import {
  ALL_CELEBRITY_REQUEST,
  ALL_CELEBRITY_SUCCESS,
  ALL_CELEBRITY_FAIL,
  CLEAR_ERRORS,
  CELEBRITY_DETAILS_REQUEST,
  CELEBRITY_DETAILS_SUCCESS,
  CELEBRITY_DETAILS_FAIL,
} from "../actions/types";

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
        celebrities: payload.celebrity,
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

export const celebrityDetailsReducer = (state = { celebrity: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case CELEBRITY_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CELEBRITY_DETAILS_SUCCESS:
      return {
        loading: false,
        celebrity: payload.data,
      };
    case CELEBRITY_DETAILS_FAIL:
      return {
        ...state,
        error: payload,
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
