import { createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import {
  celebrityListReducer,
  celebrityDeleteReducer,
  celebrityEditReducer,
  celebrityUpdateReducer,
} from "./reducers/celebrityReducer";

import { userReducer } from "./reducers/userReducer";

import { getDashboardInfo } from "./reducers/dashboardReducer";

const reducer = combineReducers({
  celebrityList: celebrityListReducer,
  celebrityDelete: celebrityDeleteReducer,
  celebrityEdit: celebrityEditReducer,
  celebrityUpdate: celebrityUpdateReducer,
  userLogin: userReducer,
  dashboardInfo: getDashboardInfo,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
