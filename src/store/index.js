import { configureStore } from "@reduxjs/toolkit";

import cart from "./slices/cartSlice";

const store = configureStore({
  reducer: { cart: cart.reducer },
});

export default store;
