import {
  getAProductById,
  getAllProducts,
  deleteAproduct,
  addAproduct,
  update,
} from "../../api/products";

import { ActionTypes } from "../types/actionTypes";

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

export function setLoading() {
  return {
    type: ActionTypes.LOADING,
  };
}

export const getProducts = () => async (dispatch, getState) => {
  let res = await getAllProducts();
  let response = res.data.sort((a, b) => (new Date(a) < new Date(b) ? 1 : -1));
  dispatch(setProducts(response));
  dispatch(setLoading());
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
