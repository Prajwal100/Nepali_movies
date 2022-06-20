import {
  ALL_MOVIE_REQUEST,
  ALL_MOVIE_SUCCESS,
  ALL_MOVIE_FAIL,
  CLEAR_ERRORS,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_DETAILS_FAIL,
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

export const movieDetailReducer = (state = { movie: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case MOVIE_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case MOVIE_DETAILS_SUCCESS:
      return {
        loading: false,
        movie: payload.data,
      };
    case MOVIE_DETAILS_FAIL:
      return {
        loading: true,
        error: payload,
      };

    default:
      return state;
  }
};
