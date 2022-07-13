import {
  ALL_CELEBRITY_REQUEST,
  ALL_CELEBRITY_SUCCESS,
  ALL_CELEBRITY_FAIL,
  CLEAR_ERRORS,
} from "../constants/types";

export const celebrityReducer = (state = { celebrities: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case ALL_CELEBRITY_REQUEST:
      return {
        loading: true,
        celebrities: [],
      };

    case ALL_CELEBRITY_SUCCESS:
      return {
        loading: false,
        celebrities: payload.data,
      };

    case ALL_CELEBRITY_FAIL:
      return {
        loading: true,
        celebrities: payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
