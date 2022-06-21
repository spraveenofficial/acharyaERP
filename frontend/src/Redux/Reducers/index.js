import { combineReducers } from "redux";
import { login, auth } from "./auth-reducers";
import { attendance, myClasses } from "./studentactions-reducers";
export default combineReducers({
  login,
  auth,
  attendance,
  classes: myClasses,
});
