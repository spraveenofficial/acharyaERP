import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
} from "../Constants/event-constants";

export const events = (
  state = { loading: false, success: false, message: "", events: [] },
  action
) => {
  switch (action.type) {
    case FETCH_EVENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        message: "Events Fetched Successfully",
        events: action.payload,
      };
    case FETCH_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        message: action.payload,
      };
    default:
      return state;
  }
};
