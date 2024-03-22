import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import loginSlice from "./loginSlice";
import productSlice from "./productSlice";
import wishlistSlice from "./wishlistSlice";

const rootSlice = combineReducers({
  login: loginSlice,
  product: productSlice,
  cart: cartSlice,
  wishlist: wishlistSlice,
});

export default rootSlice;
