import { useEvents } from "../contexts/EventsContext";
import EventCard from "./EventCard";

function Events() {
	const { events } = useEvents();

	return (
		<div className="flex flex-wrap gap-3 m-5 border-r border-slate-200 ">
			{events.length > 0 ? (
				events.map((event) => (
					<EventCard key={event.id} event={event} page="eventPage" />
				))
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}

export default Events;
