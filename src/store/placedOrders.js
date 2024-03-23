import { createSlice } from "@reduxjs/toolkit";

const placedOrders = createSlice({
  name: "placedOrders",
  initialState: {
    placedOrders: [],
  },
  reducers: {
    addToPlacedOrder: (state, action) => {
      state.placedOrders.push(action.payload);
    },
    removedFromPlacedOrder: (state, action) => {
      state.placedOrders = state.placedOrders.filter(
        (placedOrder) => placedOrder.id !== action.payload.id
      );
    },
  },
});

export const { addToPlacedOrder, removedFromPlacedOrder } =
  placedOrders.actions;

export default placedOrders.reducer;
