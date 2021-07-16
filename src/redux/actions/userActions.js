import {
  getWaitingOrders,
  getDeliveredOrders,
  updateOrders,
} from "../../api/user";

import { ActionTypes } from "../types/actionTypes";
export const getOrders = (users) => {
  return {
    type: ActionTypes.GET_ORDERS,
    payload: users,
  };
};
export const deletUserHandle = (id) => {
  return {
    type: ActionTypes.DELETE_ORDERS,
    payload: id,
  };
};

export const Orders = () => async (dispatch, getState) => {
  let res = await getDeliveredOrders();
  dispatch(getOrders(res.data));
};
