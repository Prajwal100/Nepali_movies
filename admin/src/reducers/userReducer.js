import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  GET_PROFILE,
  UPDATE_PROFILE,
} from "../constants/userConstant";

const initialState = {
  profile: {
    name: "",
    avatar: "",
  },
};
export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_USER_REQUEST:
      return {
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
    case UPDATE_PROFILE:
    case GET_PROFILE:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        profile: {
          ...payload,
        },
      };

    case LOGIN_USER_FAIL:
      return {
        isAuthenticated: false,
        loading: false,
        profile: payload,
      };

    case LOGOUT_USER_SUCCESS:
      return {
        isAuthenticated: false,
        state: {},
      };
    case LOGOUT_USER_FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
};
