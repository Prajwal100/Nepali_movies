import axios from "axios";
import {
  ALL_CELEBRITY_REQUEST,
  ALL_CELEBRITY_SUCCESS,
  ALL_CELEBRITY_FAIL,
  CLEAR_ERRORS,
} from "./types";

export const getCelebrities = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_CELEBRITY_REQUEST,
    });
    const { data } = await axios.get("/api/v1/celebrity/get-celebrities");

    dispatch({
      type: ALL_CELEBRITY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_CELEBRITY_FAIL,
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
