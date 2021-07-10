import {
  getAProductById,
  getAllProducts,
  deleteAproduct,
  addAproduct,
} from "../../api/products";

import { ActionTypes } from "../types/actionTypes";

export const setProducts = (products) => {
  return {
    type: ActionTypes.ADD_PRODUCT,
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

export const getProducts = () => async (dispatch, getState) => {
  let res = await getAllProducts();
  dispatch(setProducts(res.data));
};

export const getAProduct = (id) => async (dispatch) => {
  let res = await getAProductById(id);
  console.log(res.data);
  dispatch(selectedProduct(res.data));
};
export const deleteproduct = (id) => async (dispatch) => {
  await deleteAproduct(id);
  dispatch(removeProduct(id));
};
export const addProduct = (data) => async (dispatch) => {
  await createProduct(data);
  dispatch(addAproduct(data));
};
