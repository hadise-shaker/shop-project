import { ActionTypes } from "../types/actionTypes";
const initialState = {
  orders: [],
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_ORDERS:
      return payload;
    case ActionTypes.DELETE_ORDERS:
      return { orders: state.orders.filter((item) => item.id != payload) };
    default:
      return state;
  }
};