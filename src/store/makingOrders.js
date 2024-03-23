import { createSlice } from "@reduxjs/toolkit";

const makingOrders = createSlice({
  name: "makingOrders",
  initialState: {
    makingOrders: [],
  },
  reducers: {
    addToMakingOrder: (state, action) => {
      state.makingOrders.push(action.payload);
    },
    removedFromMakingOrder: (state, action) => {
      state.makingOrders = state.makingOrders.filter(
        (makingOrder) => makingOrder.id !== action.payload.id
      );
    },
  },
});

export const { addToMakingOrder, removedFromMakingOrder } =
  makingOrders.actions;

export default makingOrders.reducer;
