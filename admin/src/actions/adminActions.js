import { toast } from "react-toastify";
import { ToastObjects } from "./toastObject";
import axios from "axios";
import {
  DASHBOARD_INFO_REQUEST,
  DASHBOARD_INFO_SUCCESS,
  DASHBOARD_INFO_FAIL,
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
