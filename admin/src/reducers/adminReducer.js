import {
  DASHBOARD_INFO_REQUEST,
  DASHBOARD_INFO_SUCCESS,
  DASHBOARD_INFO_FAIL,
  DASHBOARD_SETTINGS_REQUEST,
  DASHBOARD_SETTINGS_SUCCESS,
  DASHBOARD_SETTINGS_FAIL,
} from "../constants/adminConstants";

const initialState = {
  dashboardData: {},
  settings: {},
};

export const getDashboardInfo = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case DASHBOARD_INFO_REQUEST:
    case DASHBOARD_SETTINGS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DASHBOARD_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        dashboardData: payload,
      };

    case DASHBOARD_INFO_FAIL:
    case DASHBOARD_SETTINGS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    // Dashboard settings starts.......
    case DASHBOARD_SETTINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        settings: payload,
      };

    default:
      return state;
  }
};
