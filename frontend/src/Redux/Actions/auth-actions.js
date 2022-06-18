import axios from "axios";
import baseUrl from "../../Utils/baseurl";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
  USER_LOAD_FAILURE,
} from "../Constants/auth-constants";
import { headerConfig } from "../../Utils/headerConfig";

export const loginAction = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const { data } = await axios.post(`${baseUrl}/auth/login`, payload);
    if (!data.success) {
      return dispatch({
        type: USER_LOGIN_FAILURE,
        payload: data.message,
      });
    }
    localStorage.setItem("token", data.token);
    localStorage.setItem("aliveToken", data.aliveToken);
    localStorage.setItem("Oauth", data.Oauth);
    return dispatch({
      type: USER_LOGIN_SUCCESS,
    });
  } catch (error) {
    return dispatch({
      type: USER_LOGIN_FAILURE,
      payload: "Server Error, Please try again later.",
    });
  }
};

export const getProfile = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOAD_REQUEST,
    });
    const { data } = await axios({
      method: "get",
      url: `${baseUrl}/auth/profile`,
      headers: headerConfig,
    });
    if (!data.success) {
      return dispatch({
        type: USER_LOAD_FAILURE,
        payload: data.message,
      });
    }
    return dispatch({
      type: USER_LOAD_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    return dispatch({
      type: USER_LOAD_FAILURE,
      payload: "Server Error, Please try again later.",
    });
  }
};
