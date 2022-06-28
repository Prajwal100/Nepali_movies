import { createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import {
  celebrityReducer,
  celebrityDetailsReducer,
} from "./reducers/celebrityReducer";

import { moviesReducer, movieDetailReducer } from "./reducers/movieReducer";

import { authReducer } from "./reducers/userReducer";

import { wishlistReducer } from "./reducers/wishlistReducer";

const reducer = combineReducers({
  celebrities: celebrityReducer,
  celebrityDetails: celebrityDetailsReducer,

  movies: moviesReducer,
  movieDetails: movieDetailReducer,

  authReducer,

  wishlist: wishlistReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
