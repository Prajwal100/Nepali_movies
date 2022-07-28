import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
} from "../constants/userConstant";

export const userReducer = (state = { profile: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_USER_SUCCESS:
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        profile: payload,
      };

    case LOGIN_USER_FAIL:
    case GET_PROFILE_FAIL:
      return {
        isAuthenticated: false,
        loading: false,
        profile: null,
        error: action.payload,
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

    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: payload,
      };

    case UPDATE_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
