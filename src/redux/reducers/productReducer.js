import { ActionTypes } from "../types/actionTypes";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  console.log(state.products);
  switch (type) {
    case ActionTypes.ADD_PRODUCT:
      return { ...state, products: payload };

    case ActionTypes.REMOVE_PRODUCT:
      return {
        products: state.products.filter(({ id }) => id !== payload),
      };
    case ActionTypes.EDIT_PRODUCT:
      return [...payload, ...state.products];
    /*     case ActionTypes.EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map((content, i) =>
          i === 1 ? { ...content, products: payload } : content
        ),
      }; */
    default:
      return state;
  }
};
