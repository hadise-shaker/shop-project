import {
  getAProductById,
  getAllProducts,
  deleteAproduct,
  addAproduct,
  update,
} from "../../api/products";

import { ActionTypes } from "../types/actionTypes";
/* export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const GET_ALL_PRODUCT = "GET_ALL_PRODUCT";
export const GET_NUMBER_CART = "GET_NUMBER_CART";
export const ADD_CART = "ADD_CART";
export const UPDATE_CART = "UPDATE_CART";
export const DELETE_CART = "DELETE_CART"; */
export const setProducts = (products) => {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: products,
  };
};
export const setProducts2 = (products) => {
  return {
    type: ActionTypes.SET_PRODUCT,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export function removeProduct(id) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: id,
  };
}
export function createProduct(data) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: data,
  };
}

export const editItem = (product) => {
  return {
    type: ActionTypes.EDIT_PRODUCT,
    payload: product,
  };
};

export const setProductsByCategory = (category) => {
  return {
    type: ActionTypes.SET_PRODUCTS_BY_CATEGORY,
    payload: category,
  };
};
/* export function GetNumberCart() {
  return {
    type: "GET_NUMBER_CART",
  };
}

export function AddCart(payload) {
  return {
    type: "ADD_CART",
    payload,
  };
}
export function UpdateCart(payload) {
  return {
    type: "UPDATE_CART",
    payload,
  };
}
export function DeleteCart(payload) {
  return {
    type: "DELETE_CART",
    payload,
  };
}

export function IncreaseQuantity(payload) {
  return {
    type: "INCREASE_QUANTITY",
    payload,
  };
}
export function DecreaseQuantity(payload) {
  return {
    type: "DECREASE_QUANTITY",
    payload,
  };
} */

/* export const setEdit = () => {
  return {
    type: ActionTypes.SET_EDIT,
  };
}; */

// export const getProducts = () => (dispatch, getState) => {
//   getAllProducts().then((res) => {
//     console.log(res.data);
//     dispatch(setProducts(res.data));
//   });
// };

export const setCategory = (category) => async (dispatch) => {
  const res = await getAllProducts();
  let response = res.data.sort((a, b) => (new Date(a) < new Date(b) ? 1 : -1));
  dispatch(setProducts2(response));
  dispatch(setProductsByCategory(category));
};

export const getProducts = () => async (dispatch, getState) => {
  let res = await getAllProducts();
  let response = res.data.sort((a, b) => (new Date(a) < new Date(b) ? 1 : -1));
  dispatch(setProducts(response));
};

export const getAProduct = (id) => async (dispatch) => {
  let res = await getAProductById(id);
  dispatch(selectedProduct(res.data));
};

export const editProduct = (id, updatedProduct) => async (dispatch) => {
  console.log(id);
  let res = await update(id, updatedProduct);
  dispatch(editItem(update));
};
export const deleteproduct = (id) => async (dispatch) => {
  await deleteAproduct(id).then((res) => console.log("res", res));
  dispatch(removeProduct(id));
};
export const addProduct = (data) => async (dispatch, getState) => {
  let result = await addAproduct(data);
  dispatch(createProduct(data));
};
