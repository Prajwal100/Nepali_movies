import axios from "axios";
import {
  ALL_MOVIE_REQUEST,
  ALL_MOVIE_SUCCESS,
  ALL_MOVIE_FAIL,
  CLEAR_ERRORS,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_DETAILS_FAIL,
} from "./types";

export const getMovies = (currentPage) => async (dispatch) => {
  try {
    dispatch({
      type: ALL_MOVIE_REQUEST,
    });

    const { data } = await axios.get(
      `/api/v1/movie/get-movies?page=${currentPage}`
    );

    dispatch({
      type: ALL_MOVIE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_MOVIE_FAIL,
      payload: error.data.message,
    });
  }
};
// ClEAR ERRORS

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

//DETAIL PAGES
export const getDetailsMovies = (id) => async (dispatch) => {
  try {
    dispatch({
      type: MOVIE_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/v1/movie/show-movie/${id}`);

    dispatch({
      type: MOVIE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_DETAILS_FAIL,
      payload: error.data.message,
    });
  }
};
