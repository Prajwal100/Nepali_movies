import {
  CELEBRITY_LIST_REQUEST,
  CELEBRITY_LIST_SUCCESS,
  CELEBRITY_LIST_FAIL,
  CELEBRITY_CREATE_REQUEST,
  CELEBRITY_CREATE_SUCCESS,
  CELEBRITY_CREATE_FAIL,
  CELEBRITY_DELETE_REQUEST,
  CELEBRITY_DELETE_SUCCESS,
  CELEBRITY_DELETE_FAIL,
  CELEBRITY_DELETE_RESET,
  CLEAR_ERRORS,
} from "../constants/celebrityConstant";

// All Celebrities
export const celebrityListReducer = (state = { celebrities: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case CELEBRITY_LIST_REQUEST:
      return {
        loading: true,
        celebrities: [],
      };

    case CELEBRITY_LIST_SUCCESS:
      return {
        loading: false,
        celebrities: payload.data,
      };

    case CELEBRITY_LIST_FAIL:
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

// CREATE CELEBRITY REDUCER
export const createCelebrityReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case CELEBRITY_CREATE_REQUEST:
      return {
        loading: true,
      };
    case CELEBRITY_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        celebrity: payload,
      };

    case CELEBRITY_CREATE_FAIL:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
// DELETE CELEBRITY REDUCER
export const celebrityDeleteReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case CELEBRITY_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CELEBRITY_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: payload,
      };

    case CELEBRITY_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CELEBRITY_DELETE_RESET:
      return {
        ...state,
        loading: false,
        isDeleted: false,
      };

    default:
      return state;
  }
};
