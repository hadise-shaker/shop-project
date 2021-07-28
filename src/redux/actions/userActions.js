import {
  getWaitingOrders,
  getDeliveredOrders,
  updateOrders,
  addedOrder,
} from "../../api/user";

import { ActionTypes } from "../types/actionTypes";

export const setOrders = (orders) => {
  return {
    type: ActionTypes.SET_ORDERS,
    payload: orders,
  };
};
export function saveNewOrder(newOrder) {
  return {
    type: ActionTypes.SET_NEW_ORDER,
    payload: newOrder,
  };
}
export function addOrder(newOrder) {
  return {
    type: ActionTypes.ADD_ORDER,
    payload: newOrder,
  };
}

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

export const addNewOrder = (newOrder) => async (dispatch, getState) => {
  let res = await addedOrder(newOrder);
  dispatch(addOrder(newOrder));
};

export const Orders = () => async (dispatch, getState) => {
  let res = await getDeliveredOrders();
  dispatch(getOrders(res.data));
};
export const WaitingOrders = () => async (dispatch, getState) => {
  let res = await getWaitingOrders();
  dispatch(getOrders(res.data));
};

export const DeleteWaitingOrder = (id) => async (dispatch) => {
  await updateOrders(id);
  dispatch(getWaitingOrders(id));
};
