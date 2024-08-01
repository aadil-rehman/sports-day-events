import { createContext, useContext, useEffect, useState } from "react";

const EventsContext = createContext();

function EventsProvider({ children }) {
	const [events, setEvents] = useState([]);

	useEffect(function () {
		async function getEvents() {
			const res = await fetch(
				"https://run.mocky.io/v3/314401b0-9784-4d84-9e0c-3cc29faa5684"
			);

			const data = await res.json();
			console.log(data);
			setEvents(data);
		}
		getEvents();
	}, []);

	return (
		<EventsContext.Provider value={{ events }}>
			{children}
		</EventsContext.Provider>
	);
}

function useEvents() {
	const context = useContext(EventsContext);

	if (context === undefined) {
		throw new Error("EventsContext was used outised EventsProvider");
	}
	return context;
}

export { EventsProvider, useEvents };
