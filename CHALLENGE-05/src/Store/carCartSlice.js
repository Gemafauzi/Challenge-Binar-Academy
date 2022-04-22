import { createSlice } from "@reduxjs/toolkit";

const carCartSlice = createSlice({
  name: "carCart",
  initialState: {
    carCart: null,
  },
  reducers: {
    addCarToCart: (state, action) => {
      state.carCart = action.payload.id;
    },
  },
});

export default carCartSlice;
