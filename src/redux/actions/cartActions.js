import {
  getAllCart,
  addAcart,
  deleteAcart,
  addAproduct,
  update,
  getAitemById,
  increaseAmount2,
} from "../../api/cart";

import { ActionTypes } from "../types/actionTypes";

export function addToCart(items) {
  return {
    type: ActionTypes.ADD_CART,
    payload: items,
  };
}

export function increaseAmount1(payload) {
  return {
    type: ActionTypes.INCREASE_AMOUNT,
    payload,
  };
}
export function decreaseAmount1(payload) {
  return {
    type: ActionTypes.DECREASE_AMOUNT,
    payload,
  };
}
export function removeItem1(payload) {
  return {
    type: ActionTypes.REMOVE_ITME,
    payload,
  };
}

export function setCartItems1(data) {
  return {
    type: ActionTypes.SET_CART_ITEM,
    payload: data,
  };
}
export function setTotal1(payload) {
  return {
    type: ActionTypes.SET_TOTAL,
    payload,
  };
}
export function clearCart() {
  return {
    type: ActionTypes.CLEAR_CART,
  };
}
export function setCount(payload) {
  return {
    type: ActionTypes.SET_COUNT,
    payload,
  };
}

/* export const getCart = () => async (dispatch, getState) => {
  let res = await getAllCart();
  dispatch(setProduct(res.data));
};
export const increaseAmount = (data) => async (dispatch, getState) => {
  let res = await increaseAmount2(data);
  dispatch(increaseAmount1(res));
};
 */
/* export const getAProduct = (id) => async (dispatch) => {
  let res = await getAProductById(id);
  dispatch(selectedProduct(res.data));
}; */

/* export const deletecart = (id) => async (dispatch) => {
  await deleteAcart(id).then((res) => console.log("res", res));
  dispatch(removeItem1(id));
};
export const AddCart = (data) => async (dispatch) => {
  await createItem(data);
  dispatch(addAcart(data));
  console.log("data", data);
    dispatch(addAcart(data));
}; */

/* export const getAitem = (id) => async (dispatch) => {
  let res = await getAitemById(id);
  dispatch(setCartItems1(res.data));
};
 */
