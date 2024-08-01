import { useEvents } from "../contexts/EventsContext";
import EventCard from "./EventCard";

function Events() {
	const { events } = useEvents();

	return (
		<div className="flex gap-3 flex-wrap m-5 border-r border-slate-200">
			{events.map((event) => (
				<EventCard event={event} key={event.id} />
			))}
		</div>
	);
}

export default Events;
