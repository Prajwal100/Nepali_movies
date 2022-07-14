import axios from "axios";
import { toast } from "react-toastify";
import { ToastObjects } from "./toastObject";
import {
  CELEBRITY_LIST_REQUEST,
  CELEBRITY_LIST_SUCCESS,
  CELEBRITY_LIST_FAIL,
  CLEAR_ERRORS,
} from "../constants/celebrityConstant";

export const listCelebrities = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CELEBRITY_LIST_REQUEST });

    const responseData = await axios.get("/api/v1/celebrity/get-celebrities");
    const data = responseData.data;

    dispatch({ type: CELEBRITY_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    toast.error(message, ToastObjects);
    dispatch({ type: CELEBRITY_LIST_FAIL, payload: message });
  }
};
