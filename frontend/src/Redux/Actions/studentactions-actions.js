import {
  FETCH_STUDENT_ATTENDANCE,
  FETCH_STUDENT_ATTENDANCE_SUCCESS,
  FETCH_STUDENT_ATTENDANCE_FAILURE,
} from "../Constants/studentactions-constants";
import axios from "axios";
import { headerConfig } from "../../Utils/headerConfig";
import baseUrl from "../../Utils/baseurl";

export const fetchAttendance = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_STUDENT_ATTENDANCE,
    });
    const { data } = await axios({
      method: "get",
      url: `${baseUrl}/attendance`,
      headers: headerConfig,
    });
    if (!data.success) {
      return dispatch({
        type: FETCH_STUDENT_ATTENDANCE_FAILURE,
        payload: data.message,
      });
    }
    return dispatch({
      type: FETCH_STUDENT_ATTENDANCE_SUCCESS,
      payload: data.attendence,
    });
  } catch (error) {
    return dispatch({
      type: FETCH_STUDENT_ATTENDANCE_FAILURE,
      payload: error.message,
    });
  }
};
