import { createSlice } from "@reduxjs/toolkit";
import { AllProductsTypes } from "../../types/index";
import { toast } from "react-toastify";

interface CartState {
  isLogin: boolean;
  myCart: AllProductsTypes[];
}

const initialState: CartState = {
  isLogin: true,
  myCart: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log("payload = ", action.payload);
      const newProduct = action.payload;
      const existingProduct = state.myCart?.findIndex(
        (product) => product?.productData?.id === newProduct?.productData?.id
      );

      if (existingProduct !== -1) {
        state.myCart[existingProduct].quantity += 1;
        toast.warn("Already in the cart");
      } else {
        state.myCart.push(action.payload);
        toast.success("Added to the cart");
      }
    },

    handleInc: (state, action) => {
      const findProduct = state.myCart?.findIndex(
        (product) => product?.cartId === action.payload
      );
      if (findProduct !== -1) {
        state.myCart[findProduct].quantity += 1;
      } else {
        toast.error("Something went wrong, please reload");
      }
    },

    handleDec: (state, action) => {
      const findProduct = state.myCart?.findIndex(
        (product) => product?.cartId === action.payload
      );
      if (findProduct !== -1) {
        state.myCart[findProduct].quantity -= 1;
      } else {
        toast.error("Something went wrong, please reload");
      }
    },

    handleRemProduct: (state, action) => {
      const findProduct = state.myCart?.findIndex(
        (product) => product?.cartId === action.payload
      );

      if (findProduct !== -1) {
        state.myCart.splice(findProduct, 1);
      }
    }
  }
});

export const {
  addToCart,
  handleInc,
  handleDec,
  handleRemProduct
} = cartSlice.actions;

export default cartSlice.reducer;
