import { ActionTypes } from "../types/actionTypes";

const initialState = {
  products: [],
  selectedProduct: {},
};

export const productReducer = (state = initialState, { type, payload }) => {
  console.log(state.products);
  switch (type) {
    case ActionTypes.ADD_PRODUCT:
      return { ...state.products, products: payload };

    case ActionTypes.REMOVE_PRODUCT:
      return {
        products: state.products.filter(({ id }) => id !== payload),
      };
    case ActionTypes.EDIT_PRODUCT:
      return [...state.products, payload];

    case ActionTypes.SELECTED_PRODUCT:
      return { ...state.products, selectedProduct: payload };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {
        ...state,
        products: state.products.filter(({ id }) => id !== payload),
      };
    default:
      return state;
  }
};
