import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
} from "../Constants/event-constants";
import axios from "axios";
import baseUrl from "../../Utils/baseurl";
import { headerConfig } from "../../Utils/headerConfig";
export const fetchEvents = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_EVENTS_REQUEST,
    });
    const { data } = await axios({
      method: "get",
      url: `${baseUrl}/events/all-events`,
      headers: headerConfig(),
    });
    if (!data.success) {
      dispatch({
        type: FETCH_EVENTS_FAILURE,
        payload: data.message,
      });
      return false;
    }
    dispatch({
      type: FETCH_EVENTS_SUCCESS,
      payload: data.data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: FETCH_EVENTS_FAILURE,
      payload: error.message,
    });
    return false;
  }
};
