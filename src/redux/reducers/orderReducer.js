import { ActionTypes } from "../types/actionTypes";

const initialState = {
  orders: [],
  /*   loading: true, */
  newOrder: {},
};
export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ORDERS:
      return { ...state.orders, orders: payload };
    /*     case ActionTypes.SET_LOADING:
      return { ...state, loading: false }; */
    case ActionTypes.SET_NEW_ORDER:
      return {
        ...state.orders,
        newOrder: payload,
      };
    case ActionTypes.ADD_ORDER:
      return { ...state.orders, orders: [...state.orders, payload] };

    default:
      return state;
  }
};
