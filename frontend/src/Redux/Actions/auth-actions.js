import axios from "axios";
import baseUrl from "../../Utils/baseurl";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from "../Constants/auth-constants";
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
