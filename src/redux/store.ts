import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";

export const store = configureStore(
  {
    reducer: {
      cart: cartSlice,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// export const store = createStore();
