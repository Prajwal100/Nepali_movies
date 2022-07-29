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

export const addMovieAction = (movieData) => async (dispatch) => {
  console.log(movieData);
  try {
    dispatch({ type: MOVIE_CREATE_REQUEST });
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const response = await axios.post(
      "/api/v1/movie/create-movie",
      movieData,
      config
    );

    const responseData = response.data;

    if (!responseData.status) {
      toast.error(responseData.message, ToastObjects);
    } else {
      toast.success(responseData.message, ToastObjects);
      dispatch({
        type: MOVIE_CREATE_SUCCESS,
        payload: responseData.movie,
      });
    }
  } catch (error) {
    const message =
      error.response && error.response.data.errorMessage
        ? error.response.data.errorMessage
        : error.message;

    dispatch({ type: MOVIE_CREATE_FAIL, payload: message });

    toast.error(message, ToastObjects);
  }
};

export const deleteMovie = (id) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_DELETE_REQUEST });

    const response = await axios.delete(`/api/v1/movie/delete-movie/${id}`);

    const data = response.data;
    if (!data.status) {
      toast.error(data.message, ToastObjects);
    } else {
      toast.success(data.message, ToastObjects);
      dispatch({ type: MOVIE_DELETE_SUCCESS, payload: data.status });
    }
  } catch (error) {
    const message =
      error.response && error.response.data.errorMessage
        ? error.response.data.errorMessage
        : error.message;

    dispatch({ type: MOVIE_CREATE_FAIL, payload: message });

    toast.error(message, ToastObjects);
  }
};
