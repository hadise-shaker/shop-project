import { ActionTypes } from "../types/actionTypes";

const initialState = {
  cart: [],
  total: 0,
  cartItems: 0,
};

export const cartReducer = (state = initialState, { type, payload }) => {
  console.log(state.cart);
  switch (type) {
    case ActionTypes.ADD_CART:
      return { ...state.cart, cart: payload };

    case ActionTypes.REMOVE_ITME:
      return { cart: state.cart.filter((item) => item.id !== payload) };
    case ActionTypes.INCREASE_AMOUNT:
      return {
        cart: state.cart.map((item) => item.id === payload && item.amount++),
      };

    case ActionTypes.DECREASE_AMOUNT:
      return {
        cart: state.cart.map((item) => item.id === payload && item.amount--),
      };

    case ActionTypes.SET_CART_ITEM:
      return { ...state.cart, cartItems: payload };
    case ActionTypes.SET_TOTAL:
      return { ...state.cart, total: payload };

    default:
      return state;
  }
};
