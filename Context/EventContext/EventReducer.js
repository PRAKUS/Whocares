import { Fetch_All, Fetch_One, Fetch_Header } from "./eventAction";

const eventReducer = (state, action) => {
	switch (action.type) {
		case Fetch_One:
			return {};
		case Fetch_All:
			return {
				...state,
				events: action.payload,
			};
		case Fetch_Header: {
			return {
				...state,
				eventdetails: action.payload,
			};
		}

		default:
			return state;
	}
};

export default eventReducer;
