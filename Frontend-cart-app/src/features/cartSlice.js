import { createSlice } from "@reduxjs/toolkit";

const intialCartState = { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: intialCartState,
  reducers: {
    addItemtoCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.offerPrice,
          quantity: 1,
          name: newItem.title,
          image: newItem.image,
        });
      } else {
        existingItem.quantity++;
      }
    },

    decrementItemFromCart(state, action) {
      const removeItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === removeItem.id
      );
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== removeItem.id);
      } else {
        existingItem.quantity--;
      }
    },
    deleteItemFromCart(state, action) {
      const removeItem = action.payload;
      state.items = state.items.filter((item) => item.id !== removeItem.id);
    },
  },
});

export const { addItemtoCart, decrementItemFromCart, deleteItemFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
