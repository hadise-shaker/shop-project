import { createSlice } from "@reduxjs/toolkit";
import { getCartFromLocalStorage } from "../../utils/helpers";
import { getAllCart } from "../../api/cart";

const CartReducer = createSlice({
  name: "cart",
  initialState: {
    cart: getCartFromLocalStorage(),
    total: 0,
    cartItems: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    increaseAmount: (state, action) => {
      state.cart.map((item) => item.id === action.payload && item.amount++);
    },
    decreaseAmount: (state, action) => {
      state.cart.map((item) => item.id === action.payload && item.amount--);
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const {
  addToCart,
  increaseAmount,
  decreaseAmount,
  removeItem,
  setCartItems,
  setTotal,
} = CartReducer.actions;

export default CartReducer.reducer;
