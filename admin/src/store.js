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
const reducer = combineReducers({
  celebrityList: celebrityListReducer,
  celebrityDelete: celebrityDeleteReducer,
  celebrityEdit: celebrityEditReducer,
  celebrityUpdate: celebrityUpdateReducer,
  userLogin: userReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
