import { combineReducers } from "redux";
import { login, auth } from "./auth-reducers";
export default combineReducers({
  login,
  auth,
});
