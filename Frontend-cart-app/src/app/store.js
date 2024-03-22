import { configureStore } from "@reduxjs/toolkit";
import rootSlice from "../features/rootSlice";

const store = configureStore({
  reducer: rootSlice,
});

export default store;
