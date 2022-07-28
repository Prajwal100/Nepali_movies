import {
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
  MOVIE_CREATE_REQUEST,
  MOVIE_CREATE_SUCCESS,
  MOVIE_CREATE_FAIL,
} from "../constants/movieConstant";

export const movieReducer = (state = { movies: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case MOVIE_LIST_REQUEST:
    case MOVIE_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case MOVIE_LIST_SUCCESS:
    case MOVIE_CREATE_SUCCESS:
      return {
        movies: payload,
        loading: false,
      };

    case MOVIE_LIST_FAIL:
    case MOVIE_CREATE_FAIL:
      return {
        movies: null,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
