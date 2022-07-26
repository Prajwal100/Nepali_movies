import { createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import {
  celebrityReducer,
  celebrityDeleteReducer,
  celebrityEditReducer,
  celebrityUpdateReducer,
} from "./reducers/celebrityReducer";

import { userReducer } from "./reducers/userReducer";

import { getDashboardInfo } from "./reducers/adminReducer";

const reducer = combineReducers({
  celebrities: celebrityReducer,
  // celebrityDelete: celebrityDeleteReducer,
  // celebrityEdit: celebrityEditReducer,
  // celebrityUpdate: celebrityUpdateReducer,
  user: userReducer,
  dashboard: getDashboardInfo,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
