import { ActionTypes } from "../types/actionTypes";
const initialState = {
  orders: [],
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_ORDERS:
      return { ...state.orders, orders: payload };
    case ActionTypes.DELETE_ORDERS:
      return state.orders.filter((item) => item.id != payload);
    default:
      return state;
  }
};
