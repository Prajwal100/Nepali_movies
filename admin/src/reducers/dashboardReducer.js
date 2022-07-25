import {
  DASHBOARD_INFO_REQUEST,
  DASHBOARD_INFO_SUCCESS,
  DASHBOARD_INFO_FAIL,
} from "../constants/dashboardConstant";

export const getDashboardInfo = (state = {}, action) => {
  const { payload, type } = action;

  switch (type) {
    case DASHBOARD_INFO_REQUEST:
      return {
        loading: true,
      };

    case DASHBOARD_INFO_SUCCESS:
      return {
        loading: false,
        dashboardData: payload,
      };

    case DASHBOARD_INFO_FAIL:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
