import {
  NEW_EVENT_REQUEST,
  NEW_EVENT_SUCCESS,
  NEW_EVENT_FAILURE,
  ADMIN_REQUEST,
  ADMIN_SUCCESS,
  ADMIN_FAILURE,
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
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    return false;
  }
};

export const fetchAdminPage = () => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_REQUEST,
    });
    const { data } = await axios({
      method: "get",
      url: `${baseUrl}/admin/home`,
      headers: headerConfig(),
    });
    if (!data.success) {
      dispatch({
        type: ADMIN_FAILURE,
        payload: data.message,
      });
    }
    dispatch({
      type: ADMIN_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
