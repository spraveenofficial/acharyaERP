import {
  NEW_EVENT_REQUEST,
  NEW_EVENT_SUCCESS,
  NEW_EVENT_FAILURE,
  NEW_EVENT_CLEAR,
  ADMIN_REQUEST,
  ADMIN_SUCCESS,
  ADMIN_FAILURE,
  ADMIN_USER_REQUEST,
  ADMIN_USER_SUCCESS,
  ADMIN_USER_FAILURE,
  ADMIN_USER_FILTER,
} from "../Constants/admin-constants";

export const newEvent = (
  state = { loading: false, success: false, message: "" },
  action
) => {
  switch (action.type) {
    case NEW_EVENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        message: "Event Added Successfully",
      };
    case NEW_EVENT_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        message: action.payload,
      };
    case NEW_EVENT_CLEAR:
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

export const admin = (
  state = {
    loading: false,
    success: false,
    message: "",
    data: {},
    error: false,
  },
  action
) => {
  switch (action.type) {
    case ADMIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        message: "Access Granted",
        data: action.payload,
      };
    case ADMIN_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        message: action.payload,
      };
    default:
      return state;
  }
};

export const adminuser = (
  state = {
    loading: false,
    success: false,
    message: "",
    data: {},
    error: false,
  },
  action
) => {
  switch (action.type) {
    case ADMIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADMIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        message: "Access Granted",
        data: action.payload,
      };
    case ADMIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        message: action.payload,
      };
    case ADMIN_USER_FILTER:
      if (action.payload.method === "filter") {
        return {
          ...state,
          data: state.data.filter((item) => {
            return item.auid !== action.payload.auid;
          }),
        };
      }
      if (action.payload.method === "modify") {
        return {
          ...state,
          data: state.data.map((item) => {
            if (item.auid === action.payload.auid) {
              return { ...item, role: action.payload.role };
            }
            return item;
          }),
        };
      }
      if (action.payload.method === "add") {
        return {
          ...state,
          data: [...state.data, action.payload],
        };
      }
      break;
    default:
      return state;
  }
};
