import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "../constants/wishlistConstant";

export const wishlistReducer = (state = { wishlistItems: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_WISHLIST:
      const item = payload;
      console.log("reducer", item);

      const itemExist = state.wishlistItems.find((i) => i.movie === item.movie);

      console.log(itemExist, "test");
      if (itemExist) {
        return {
          ...state,
          wishlistItems: state.wishlistItems.find((i) =>
            i.celebrity === item.celebrity ? item : i
          ),
        };
      } else {
        return { ...state, wishlistItems: [...state.wishlistItems, item] };
      }

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter((i) => i.movie !== payload),
      };
    default:
      return state;
  }
};
