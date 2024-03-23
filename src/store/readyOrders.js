import { createSlice } from "@reduxjs/toolkit";

const readyOrders = createSlice({
  name: "readyOrders",
  initialState: {
    readyOrders: [],
  },
  reducers: {
    addToReadyOrder: (state, action) => {
      state.readyOrders.push(action.payload);
    },
    removedFromReadyOrder: (state, action) => {
      state.readyOrders = state.readyOrders.filter(
        (readyOrder) => readyOrder.id !== action.payload.id
      );
    },
  },
});

export const { addToReadyOrder, removedFromReadyOrder } = readyOrders.actions;

export default readyOrders.reducer;
