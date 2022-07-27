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
import { movieReducer } from "./reducers/movieReducer";

import { getDashboardInfo } from "./reducers/adminReducer";

const reducer = combineReducers({
  celebrityReducer: celebrityReducer,
  movieReducer: movieReducer,
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
