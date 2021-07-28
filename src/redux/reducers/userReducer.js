import { ActionTypes } from "../types/actionTypes";
const initialState = {
  orders: [],
  newOrder: {},
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ORDERS:
      return { ...state.orders, orders: payload };
    case ActionTypes.SET_NEW_ORDER:
      return {
        ...state,
        newOrder: payload,
      };
    case ActionTypes.ADD_ORDER:
      return { ...state.orders, orders: [...state.orders, payload] };
    case ActionTypes.GET_ORDERS:
      return { ...state.orders, orders: payload };
    case ActionTypes.DELETE_ORDERS:
      return state.orders.filter((item) => item.id != payload);
    default:
      return state;
  }
};
