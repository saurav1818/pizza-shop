import { createSlice } from "@reduxjs/toolkit";

const pickedOrders = createSlice({
  name: "pickedOrders",
  initialState: {
    pickedOrders: [],
  },
  reducers: {
    addToPickedOrder: (state, action) => {
      state.pickedOrders.push(action.payload);
    },
    removedFromPickedOrder: (state, action) => {
      state.pickedOrders = state.pickedOrders.filter(
        (pickedOrders) => pickedOrders.id !== action.payload.id
      );
    },
  },
});

export const { addToPickedOrder, removedFromPickedOrder } =
  pickedOrders.actions;

export default pickedOrders.reducer;
