import {
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
} from "../constants/movieConstant";

import { toast } from "react-toastify";
import { ToastObjects } from "./toastObject";
import axios from "axios";
export const moviesActions = () => async (dispatch) => {
  try {
    dispatch({
      type: MOVIE_LIST_REQUEST,
    });

    const response = await axios.get("/api/v1/movie/get-movies");

    const movieData = response.data.movies;

    dispatch({ type: MOVIE_LIST_SUCCESS, payload: movieData });
  } catch (error) {
    const message =
      error.response && error.response.data.errorMessage
        ? error.response.data.errorMessage
        : error.message;

    dispatch({ type: MOVIE_LIST_FAIL, payload: message });

    toast.error(message, ToastObjects);
  }
};
