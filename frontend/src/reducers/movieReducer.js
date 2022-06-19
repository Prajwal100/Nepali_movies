import {
  ALL_MOVIE_REQUEST,
  ALL_MOVIE_SUCCESS,
  ALL_MOVIE_FAIL,
  CLEAR_ERRORS,
} from "../actions/types";

export const moviesReducer = (state = { movies: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case ALL_MOVIE_REQUEST:
      return {
        loading: true,
        movies: [],
      };

    case ALL_MOVIE_SUCCESS:
      return {
        loading: false,
        movies: payload.data,
      };

    case ALL_MOVIE_FAIL:
      return {
        loading: true,
        movies: payload,
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
