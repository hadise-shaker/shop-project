import { ActionTypes } from "../types/actionTypes";
import { getCartFromLocalStorage } from "../../utils/helpers";
const initialState = {
  cart: getCartFromLocalStorage(),
  total: 0,
  cartItems: 0,
  count: 0,
};

export const cartReducer = (state = initialState, { type, payload }) => {
  console.log(state.cart);
  switch (type) {
    case ActionTypes.ADD_CART:
      return { ...state.cart.push(payload) };

    case ActionTypes.REMOVE_ITME:
      return { cart: state.cart.filter((item) => item.id !== payload) };
    case ActionTypes.INCREASE_AMOUNT:
      return {
        cart: state.cart.map((item) => item.id === payload && item.number++),
      };

    case ActionTypes.DECREASE_AMOUNT:
      return {
        cart: state.cart.map((item) => item.id === payload && item.number--),
      };

    case ActionTypes.SET_CART_ITEM:
      return { ...state.cart, cartItems: payload };
    case ActionTypes.SET_TOTAL:
      return { ...state.cart, total: payload };
    case ActionTypes.SET_COUNT:
      return { ...state.count, count: payload };

    case ActionTypes.CLEAR_CART:
      return [];

    default:
      return state;
  }
};
