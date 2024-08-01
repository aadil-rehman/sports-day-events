import React, { useState, useEffect } from "react";
import EventCategory from "./EventCategory";
import { useEvents } from "../contexts/EventsContext";

function DisplayCard({ event, isSelected, page }) {
	const { event_name, event_category, start_time, end_time } = event;
	const { selectedEvents, setSelectedEvents } = useEvents();

	const date = new Date(start_time).toLocaleString().split(",").at(0);
	const startTime = new Date(start_time).toLocaleString().split(",").at(1);
	const endTime = new Date(end_time).toLocaleString().split(",").at(1);

	const [buttonSelected, setButtonSelected] = useState(false);

	useEffect(() => {
		const isEventSelected = selectedEvents.some(
			(selEvent) => selEvent.id === event.id
		);
		setButtonSelected(isEventSelected);
	}, [selectedEvents, event.id]);

	function handleSelect() {
		if (page === "eventPage") {
			setSelectedEvents([...selectedEvents, event]);
		}
	}

	function handleRemove() {
		if (page === "selectedEventsPage") {
			setSelectedEvents(
				selectedEvents.filter((selEvent) => selEvent.id !== event.id)
			);
		}
	}

	return (
		<div className="flex flex-col gap-2 border border-slate-200 rounded-lg h-fit bg-white hover:shadow-lg transition-all duration-200">
			<div className="font-semibold text-xl bg-blue-50 border-b border-slate-200 px-3 py-2">
				{event_name}
			</div>
			<div className="px-3 py-2">
				<EventCategory category={event_category} />
			</div>

			<div className="text-gray-600  px-3 py-2 flex items-center justify-center gap-3">
				<p
					className={`flex ${
						isSelected
							? "flex-row gap-3 justify-between items-center text-md"
							: "flex-col justify-center items-center text-xs"
					}   border-r border-slate-200 pr-3 font-medium`}
				>
					<span>{startTime}</span>
					<span>to</span>
					<span>{endTime}</span>
				</p>
				<div className="font-semibold text-lg text-start">{date}</div>
			</div>
			{page === "selectedEventsPage" ? (
				<button
					onClick={handleRemove}
					className="border-2 border-red-500 w-fit px-3 py-0.5 rounded-md text-red-600 font-semibold text-md mx-auto mb-2 hover:px-4 transition-all duration-200"
				>
					Remove
				</button>
			) : (
				<button
					onClick={handleSelect}
					disabled={buttonSelected || selectedEvents.length >= 3}
					className="border-2 border-blue-500 w-fit px-3 py-0.5 rounded-md text-blue-600 font-semibold text-md mx-auto mb-2 hover:px-4 transition-all duration-200"
				>
					Select
				</button>
			)}
		</div>
	);
}

export default DisplayCard;
