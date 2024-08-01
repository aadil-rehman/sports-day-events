import { useEvents } from "../contexts/EventsContext";
import EventCard from "./EventCard";

function SelectedEvents() {
	const { selectedEvents } = useEvents();

	return (
		<div className="flex flex-col gap-3 m-5">
			{selectedEvents.length > 0 ? (
				selectedEvents.map((event) => (
					<EventCard
						key={event.id}
						event={event}
						isSelected="true"
						page="selectedEventsPage"
					/>
				))
			) : (
				<p>No selected events</p>
			)}
		</div>
	);
}

export default SelectedEvents;
