import { combineReducers } from "redux";
import { login, auth } from "./auth-reducers";
import { attendance, myClasses } from "./studentactions-reducers";
import { newEvent } from "./admin-reducers";
import { events } from "./event-reducers";
export default combineReducers({
  login,
  auth,
  attendance,
  classes: myClasses,
  newEvent,
  events,
});
