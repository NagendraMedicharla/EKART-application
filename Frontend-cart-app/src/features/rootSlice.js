import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import loginSlice from "./loginSlice";
import productSlice from "./productSlice";

const rootSlice = combineReducers({
  login: loginSlice,
  product:productSlice,
  cart:cartSlice
});

export default rootSlice;
