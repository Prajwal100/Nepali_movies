import axios from "axios";
import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "../constants/wishlistConstant";

// Add to wishlist
export const addToWishlist = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`api/v1/movie/show-movie/${id}`);
  dispatch({
    type: ADD_TO_WISHLIST,
    payload: {
      movie: data.movie._id,
      name: data.movie.name,
      image: data.movie.image,
    },
  });

  localStorage.setItem(
    "wishlistItems",
    JSON.stringify(getState().wishlist.wishlistItems)
  );
};

// Remove from wishlist;

export const removeWishlist = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_WISHLIST,
    payload: id,
  });

  localStorage.setItem(
    "wishlistItems",
    JSON.stringify(getState().wishlist.wishlistItems)
  );
};
