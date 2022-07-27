import { toast } from "react-toastify";
import { ToastObjects } from "./toastObject";
import axios from "axios";
import {
  DASHBOARD_INFO_REQUEST,
  DASHBOARD_INFO_SUCCESS,
  DASHBOARD_INFO_FAIL,
  DASHBOARD_SETTINGS_REQUEST,
  DASHBOARD_SETTINGS_SUCCESS,
  DASHBOARD_SETTINGS_FAIL,
  SETTINGS_UPDATE_REQUEST,
  SETTINGS_UPDATE_SUCCESS,
  SETTINGS_UPDATE_FAIL,
} from "../constants/adminConstants";

export const getDashboardInfo = () => async (dispatch) => {
  try {
    dispatch({ type: DASHBOARD_INFO_REQUEST });

    const { data } = await axios.get("/api/v1/get-dashboard-info");

    console.log(data);

    dispatch({ type: DASHBOARD_INFO_SUCCESS, payload: data.data });
  } catch (error) {
    const message =
      error.response && error.response.data.errorMessage
        ? error.response.data.errorMessage
        : error.message;

    toast.error(message, ToastObjects);
    dispatch({ type: DASHBOARD_INFO_FAIL, payload: message });
  }
};

export const getSettingsInfo = () => async (dispatch) => {
  try {
    dispatch({ type: DASHBOARD_SETTINGS_REQUEST });

    const response = await axios.get("/api/v1/settings");

    const data = response.data.settings;

    dispatch({ type: DASHBOARD_SETTINGS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.errorMessage
        ? error.response.data.errorMessage
        : error.message;

    toast.error(message, ToastObjects);
    dispatch({ type: DASHBOARD_SETTINGS_FAIL, payload: message });
  }
};

export const updateSettings = (reqData) => async (dispatch) => {
  try {
    dispatch({ type: SETTINGS_UPDATE_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const response = await axios.patch(
      `/api/v1/settings/${reqData._id}`,
      reqData,
      config
    );

    const responseData = response.data;

    if (!responseData.status) {
      toast.error(responseData.message, ToastObjects);
    } else {
      toast.success(responseData.message, ToastObjects);
      dispatch({
        type: SETTINGS_UPDATE_SUCCESS,
        payload: responseData.settings,
      });
    }
  } catch (error) {
    const message =
      error.response && error.response.data.errorMessage
        ? error.response.data.errorMessage
        : error.message;

    toast.error(message, ToastObjects);
    dispatch({ type: SETTINGS_UPDATE_FAIL, payload: message });
  }
};
