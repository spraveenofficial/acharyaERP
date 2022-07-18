import {
  NEW_EVENT_REQUEST,
  NEW_EVENT_SUCCESS,
  NEW_EVENT_FAILURE,
  ADMIN_REQUEST,
  ADMIN_SUCCESS,
  ADMIN_FAILURE,
  ADMIN_USER_REQUEST,
  ADMIN_USER_SUCCESS,
  ADMIN_USER_FAILURE,
  ADMIN_USER_FILTER,
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

export const fetchAdminUser = () => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_USER_REQUEST,
    });
    const { data } = await axios({
      method: "get",
      url: `${baseUrl}/admin/users`,
      headers: headerConfig(),
    });
    if (!data.success) {
      dispatch({
        type: ADMIN_USER_FAILURE,
        payload: data.message,
      });
    }
    dispatch({
      type: ADMIN_USER_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_USER_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const fetchAdminModsAndAdmins = () => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_USER_REQUEST,
    });
    const { data } = await axios({
      method: "get",
      url: `${baseUrl}/admin/admins`,
      headers: headerConfig(),
    });
    if (!data.success) {
      dispatch({
        type: ADMIN_USER_FAILURE,
        payload: data.message,
      });
    }
    dispatch({
      type: ADMIN_USER_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_USER_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeAdminOrMods = (payload, toast) => async (dispatch) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: `${baseUrl}/admin/admins/action`,
      headers: headerConfig(),
      data: payload,
    });
    if (payload.role === "STUDENT") {
      dispatch({
        type: ADMIN_USER_FILTER,
        payload: {
          method: "filter",
          auid: payload.auid,
        },
      });
    } else {
      dispatch({
        type: ADMIN_USER_FILTER,
        payload: {
          method: "modify",
          auid: payload.auid,
          role: payload.role,
        },
      });
    }

    toast({
      title: data.message,
      description: "Your action has been successfully reflected.",
      status: `${data.success ? "success" : "error"}`,
      duration: 5000,
      isClosable: true,
      position: "top-left",
      zIndex: 110000000,
    });
  } catch (error) {
    toast({
      title: "Something went wrong",
      description:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top-left",
      zIndex: 110000000,
    });
    return false;
  }
};
