import { createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import {
  celebrityListReducer,
  celebrityDeleteReducer,
} from "./reducers/celebrityReducer";
const reducer = combineReducers({
  celebrityList: celebrityListReducer,
  celebrityDelete: celebrityDeleteReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
