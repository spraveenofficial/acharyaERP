import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  CLEAR_LOGIN_DATA,
} from "../Constants/auth-constants";

export const login = (
  state = { loading: false, success: false, message: "" },
  action
) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        message: "",
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        message: "Login Successful",
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        message: action.payload,
      };
    case CLEAR_LOGIN_DATA:
      return {
        ...state,
        loading: false,
        success: false,
        message: "",
      };
    default:
      return state;
  }
};
