import { ActionTypes } from "../types/actionTypes";

const initialState = {
  products: [],
  selectedProduct: {},
  productsByCategory: {},
  loading: true,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return { ...state.products, products: payload };
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
    case ActionTypes.LOADING:
      return { ...state, loading: false };

    case ActionTypes.SET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        productsByCategory: state.products.filter(
          (item) => item.category === payload
        ),
      };

    default:
      return state;
  }
};
