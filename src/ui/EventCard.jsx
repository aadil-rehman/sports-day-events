import React from "react";
import EventCategory from "./EventCategory";

function DisplayCard({ event }) {
	const { event_name, event_category, start_time, end_time } = event;

	return (
		<div className="flex flex-col gap-2 border border-slate-200 rounded-lg  bg-white hover:shadow-md transition-all duration-200">
			<div className="font-semibold text-xl bg-blue-50 border-b border-slate-200 px-3 py-2">
				{event_name}
			</div>
			<div className="px-3 py-2">
				<EventCategory category={event_category} />
			</div>

			<p className="text-gray-600 text-xs px-3 py-2">
				{new Date(start_time).toLocaleString()} -{" "}
				{new Date(end_time).toLocaleString()}
			</p>
		</div>
	);
}

export default DisplayCard;
