import axios from "axios";

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/v1/auth/login",
      { email, password },
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.errorMessage,
    });
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(userData);

    const response = await axios.post(
      `/api/v1/auth/register`,
      userData,
      config
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.user,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.errorMessage
        ? error.response.data.errorMessage
        : error.message;
    dispatch({
      type: REGISTER_FAIL,
      payload: message,
    });
  }
};

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_USER_REQUEST,
    });

    const { data } = await axios.get("/api/v1/me");

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response.data.errorMessage,
    });
  }
};

// Logout user

export const logoutUser = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/v1/auth/logout");

    dispatch({
      type: LOGOUT_USER_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: LOGOUT_USER_FAIL,
      payload: error.response.data.errorMessage,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
