import {
  NEW_EVENT_REQUEST,
  NEW_EVENT_SUCCESS,
  NEW_EVENT_FAILURE,
} from "../Constants/admin-constants";

export const newEvent = (
  state = { loading: false, success: false, message: "" },
  action
) => {
  switch (action.type) {
    case NEW_EVENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        message: "Event Added Successfully",
      };
    case NEW_EVENT_FAILURE:
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