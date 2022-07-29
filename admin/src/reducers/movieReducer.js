import {
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
  MOVIE_CREATE_REQUEST,
  MOVIE_CREATE_SUCCESS,
  MOVIE_CREATE_FAIL,
  MOVIE_DELETE_REQUEST,
  MOVIE_DELETE_SUCCESS,
  MOVIE_DELETE_FAIL,
} from "../constants/movieConstant";

export const movieReducer = (state = { movies: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case MOVIE_LIST_REQUEST:
    case MOVIE_CREATE_REQUEST:
    case MOVIE_DELETE_REQUEST:
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
    case MOVIE_CREATE_FAIL:
    case MOVIE_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case MOVIE_CREATE_SUCCESS:
      let movies = [...state.movies];
      movies.push(payload);
      return {
        movies: movies,
        loading: false,
      };

    case MOVIE_DELETE_SUCCESS:
      return {
        ...state,
        isDelete: payload,
        loading: false,
      };
    default:
      return state;
  }
};
