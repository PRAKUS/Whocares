import React, { useEffect, useReducer } from "react";
import EventContext from "./EventContext";
import eventReducer from "./EventReducer";
import { Fetch_All, Fetch_Header } from "./eventAction";
import {HOST} from "../../env/env"
import axios from "axios";
const initialState = {
	events: [],
	eventdetails: {},
};

function EventState(props) {
	const [state, eventDispatch] = useReducer(eventReducer, initialState);

	useEffect(async () => {
		const response = await axios.get(`${HOST}/events`);
		const event = response.data;
		try {
			eventDispatch({ type: Fetch_All, payload: event });
		} catch {
			console.log("dispatch err", err);
		}
	}, []);

	const AllEvent = () => {
		eventDispatch({
			type: Fetch_All,
			payload: data,
		});
	};

	const EventDetail = async () => {
		let eventData = [];
		try {
			let event = state.events[0];

			for (let i = 0; i < event.length; i++) {
				eventData[i] = {
					id: event[i].id,
					name: event[i].Name,
					date: event[i].startdate,
					location: event[i].location,
				};
			}

			eventDispatch({
				type: Fetch_Header,
				payload: eventData,
			});
		} catch (err) {
			console.log("loading", err);
		}
	};

	return (
		<EventContext.Provider value={{ AllEvent, state, EventDetail }}>
			{props.children}
		</EventContext.Provider>
	);
}

export default EventState;
