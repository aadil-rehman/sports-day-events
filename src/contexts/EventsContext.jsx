import { createContext, useContext, useEffect, useState } from "react";

const EventsContext = createContext();

function EventsProvider({ children }) {
	const [events, setEvents] = useState([]);
	const [selectedEvents, setSelectedEvents] = useState(() => {
		const savedSelectedEvents = localStorage.getItem("selectedEvents");
		return savedSelectedEvents ? JSON.parse(savedSelectedEvents) : [];
	});

	useEffect(() => {
		async function getEvents() {
			const res = await fetch(
				"https://run.mocky.io/v3/314401b0-9784-4d84-9e0c-3cc29faa5684"
			);
			const data = await res.json();
			setEvents(data);
		}
		getEvents();
	}, []);

	useEffect(() => {
		localStorage.setItem("selectedEvents", JSON.stringify(selectedEvents));
	}, [selectedEvents]);

	return (
		<EventsContext.Provider
			value={{ events, selectedEvents, setSelectedEvents }}
		>
			{children}
		</EventsContext.Provider>
	);
}

function useEvents() {
	const context = useContext(EventsContext);
	if (context === undefined) {
		throw new Error("EventsContext was used outside of EventsProvider");
	}
	return context;
}

export { EventsProvider, useEvents };
