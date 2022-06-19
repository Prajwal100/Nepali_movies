import axios from "axios";
import {
  ALL_MOVIE_REQUEST,
  ALL_MOVIE_SUCCESS,
  ALL_MOVIE_FAIL,
  CLEAR_ERRORS,
} from "./types";

export const getMovies = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_MOVIE_REQUEST,
    });

    const { data } = await axios.get("/api/v1/movie/get-movies");

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
