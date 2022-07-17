import axios from "axios";
import { toast } from "react-toastify";
import { ToastObjects } from "./toastObject";
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  UPDATE_PROFILE,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
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

    if (data.success && data.token) {
      localStorage.setItem("access_token", data.token);
      dispatch({ type: LOGIN_USER_SUCCESS, payload: data.user });
    }
    toast.success("Successfully login!", ToastObjects);
    console.log("Successfully logged in");
  } catch (error) {
    const message =
      error.response && error.response.data.errorMessage
        ? error.response.data.errorMessage
        : error.message;
    toast.error(message, ToastObjects);
    dispatch({ type: LOGIN_USER_FAIL, payload: message });
  }
};

export const userLogout = () => async (dispatch) => {
  try {
    localStorage.removeItem("access_token");
    dispatch({ type: LOGOUT_USER_SUCCESS });
    toast.success("Successfully logout!", ToastObjects);
  } catch (error) {
    const message =
      error.response && error.response.data.errorMessage
        ? error.response.data.errorMessage
        : error.message;
    toast.error(message, ToastObjects);
    dispatch({ type: LOGOUT_USER_FAIL });
  }
};
