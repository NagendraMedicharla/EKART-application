import { createSlice } from "@reduxjs/toolkit";

const intialWishListState = { items: [] };

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: intialWishListState,
  reducers: {
    addtoWishList(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push(newItem);
      }
    },
    deleteItemFromWishList(state, action) {
      const removeItem = action.payload;
      state.items = state.items.filter((item) => item.id !== removeItem.id);
    },
  },
});

export const { addtoWishList, deleteItemFromWishList } = wishlistSlice.actions;

export default wishlistSlice.reducer;
