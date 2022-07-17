import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  UPDATE_PROFILE,
} from "../constants/userConstant";

const initialState = {
  // profile: {
  //   name: "",
  //   email: "",
  //   username: "",
  // },
};
export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_USER_REQUEST:
    case GET_PROFILE_REQUEST:
      return {
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
    case UPDATE_PROFILE:
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        profile: {
          ...state.profile,
          ...payload,
        },
      };

    case LOGIN_USER_FAIL:
    case GET_PROFILE_FAIL:
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
