import axios from "axios";
import { toast } from "react-toastify";
import { ToastObjects } from "./toastObject";
import {
  CELEBRITY_LIST_REQUEST,
  CELEBRITY_LIST_SUCCESS,
  CELEBRITY_LIST_FAIL,
  CELEBRITY_CREATE_REQUEST,
  CELEBRITY_CREATE_SUCCESS,
  CELEBRITY_CREATE_FAIL,
  CELEBRITY_EDIT_REQUEST,
  CELEBRITY_EDIT_SUCCESS,
  CELEBRITY_EDIT_FAIL,
  CELEBRITY_UPDATE_REQUEST,
  CELEBRITY_UPDATE_SUCCESS,
  CELEBRITY_UPDATE_FAIL,
  CELEBRITY_DELETE_REQUEST,
  CELEBRITY_DELETE_SUCCESS,
  CELEBRITY_DELETE_FAIL,
} from "../constants/celebrityConstant";

// GE ALL CELEBRITY ACTION
export const listCelebrities = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CELEBRITY_LIST_REQUEST });

    const responseData = await axios.get("/api/v1/celebrity/get-celebrities");
    const data = responseData.data;

    dispatch({ type: CELEBRITY_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.errorMessage
        ? error.response.data.errorMessage
        : error.message;
    toast.error(message, ToastObjects);
    dispatch({ type: CELEBRITY_LIST_FAIL, payload: message });
  }
};

// CREATE CELEBRITY ACTION
export const createCelebrity = (reqData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CELEBRITY_CREATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const response = await axios.post(
      `/api/v1/celebrity/create-celebrity`,
      reqData,
      config
    );

    const responseData = response.data;

    if (!responseData.status) {
      toast.error(responseData.message, ToastObjects);
    } else {
      toast.success(responseData.message, ToastObjects);
      dispatch({
        type: CELEBRITY_CREATE_SUCCESS,
        payload: responseData.data,
      });
    }
  } catch (error) {
    const message =
      error.response && error.response.data.errorMessage
        ? error.response.data.errorMessage
        : error.message;
    toast.error(message, ToastObjects);
    dispatch({ type: CELEBRITY_CREATE_FAIL, payload: message });
  }
};

// EDIT CELEBRITY ACTION;

export const editCelebrity = (id) => async (dispatch) => {
  try {
    dispatch({ type: CELEBRITY_EDIT_REQUEST });

    const { data } = await axios.get(`/api/v1/celebrity/show-celebrity/${id}`);

    dispatch({ type: CELEBRITY_EDIT_SUCCESS, payload: data.celebrity });
  } catch (error) {
    const message =
      error.response && error.response.data.errorMessage
        ? error.response.data.errorMessage
        : error.message;
    toast.error(message, ToastObjects);
    dispatch({ type: CELEBRITY_EDIT_FAIL, payload: message });
  }
};

// UPDATE CELEBRITY ACTIONS
export const updateCelebrity = (id) => async (dispatch, getState) => {};

//   DELETE CELEBRITY ACTION
export const deleteCelebrity = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CELEBRITY_DELETE_REQUEST });

    const responseData = await axios.delete(
      `/api/v1/celebrity/delete-celebrity/${id}`
    );
    const data = responseData.data;

    if (!data.status) {
      toast.error(data.message, ToastObjects);
    } else {
      toast.success(data.message, ToastObjects);
      dispatch({ type: CELEBRITY_DELETE_SUCCESS, payload: data.status });
    }
  } catch (error) {
    const message =
      error.response && error.response.data.errorMessage
        ? error.response.data.errorMessage
        : error.message;
    toast.error(message, ToastObjects);
    dispatch({ type: CELEBRITY_DELETE_FAIL, payload: message });
  }
};
