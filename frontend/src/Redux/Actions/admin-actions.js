import {
  NEW_EVENT_REQUEST,
  NEW_EVENT_SUCCESS,
  NEW_EVENT_FAILURE,
} from "../Constants/admin-constants";
import axios from "axios";
import baseUrl from "../../Utils/baseurl";
import { headerConfig } from "../../Utils/headerConfig";

export const newEvent = (event) => async (dispatch) => {
  try {
    dispatch({
      type: NEW_EVENT_REQUEST,
    });
    const { data } = await axios({
      method: "post",
      url: `${baseUrl}/admin/add-event`,
      headers: headerConfig(),
      data: event,
    });
    if (!data.success) {
      dispatch({
        type: NEW_EVENT_FAILURE,
        payload: data.message,
      });
      return false;
    }
    dispatch({
      type: NEW_EVENT_SUCCESS,
      payload: data.data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: NEW_EVENT_FAILURE,
      payload: error.response.data.message,
    });
    return false;
  }
};
