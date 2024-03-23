import { configureStore } from "@reduxjs/toolkit";
import placedOrdersReducer from "./placedOrders";
import makingOrdersReducer from "./makingOrders";
import readyOrdersReducer from "./readyOrders";
import pickedOrdersReducer from "./pickedOrders";

const store = configureStore({
  reducer: {
    placedOrders: placedOrdersReducer,
    makingOrders: makingOrdersReducer,
    readyOrders: readyOrdersReducer,
    pickedOrders: pickedOrdersReducer,
  },
});

export default store;
