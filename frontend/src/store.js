import { createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import { celebrityReducer } from "./reducers/celebrityReducer";
const reducer = combineReducers({
  celebrities: celebrityReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
