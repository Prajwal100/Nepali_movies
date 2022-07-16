import axios from "axios";
import { toast } from "react-toastify";
import { ToastObjects } from "./toastObject";
import { Navigate } from "react-router-dom";
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  UPDATE_PROFILE,
} from "../constants/userConstant";

export const userLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(
      "/api/v1/auth/login",
      { email, password },
      config
    );

    const data = response.data;

    if (data.token) {
      localStorage.setItem("access_token", data.token);
    }

    if (data.success) {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: data.user });
    }
  } catch (error) {
    const message =
      error.response && error.response.data.errorMessage
        ? error.response.data.errorMessage
        : error.message;
    toast.error(message, ToastObjects);
    dispatch({ type: LOGIN_USER_FAIL, payload: message });
  }
};
