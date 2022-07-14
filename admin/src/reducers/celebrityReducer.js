import {
  CELEBRITY_LIST_REQUEST,
  CELEBRITY_LIST_SUCCESS,
  CELEBRITY_LIST_FAIL,
  CLEAR_ERRORS,
} from "../constants/celebrityConstant";

export const celebrityListReducer = (
  state = { celebrities: [], numOfPages: 0, sortBy: "" },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case CELEBRITY_LIST_REQUEST:
      return {
        loading: true,
        celebrities: [],
      };

    case CELEBRITY_LIST_SUCCESS:
      return {
        loading: false,
        celebrities: payload.data,
      };

    case CELEBRITY_LIST_FAIL:
      return {
        loading: true,
        celebrities: payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
