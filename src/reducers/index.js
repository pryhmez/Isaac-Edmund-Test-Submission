import { combineReducers } from "redux";
import setup from "./setup";
import cart from "./cart";

export default function getRootReducer(navReducer) {
  return combineReducers({
    // nav: navReducer,
    setup: setup,
    cart: cart
  });
}
