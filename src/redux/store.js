import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlices";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
console.log("oncrete store : ", store.getState());

store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

export default store;
