import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";
import { orderReducer } from "./orderReducer";
import cart from "../actions/cart.reducer";
import { cartReducer } from "./cartReducer";
export const reducers = combineReducers({
  allProducts: productReducer,
  userOrders: userReducer,
  cart: cart,
  /*   order: orderReducer, */
});
