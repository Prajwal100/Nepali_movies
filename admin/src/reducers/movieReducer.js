import {
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
} from "../constants/movieConstant";

export const movieReducer = (state = { movies: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case MOVIE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case MOVIE_LIST_SUCCESS:
      return {
        movies: payload,
        loading: false,
      };

    case MOVIE_LIST_FAIL:
      return {
        movies: null,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
