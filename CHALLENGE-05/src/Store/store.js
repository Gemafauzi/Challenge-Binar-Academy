import { configureStore } from "@reduxjs/toolkit";
import carCartSlice from "./carCartSlice";

const store = configureStore({
  reducer: {
    carCartSlice: carCartSlice.reducer,
  },
});

export default store;