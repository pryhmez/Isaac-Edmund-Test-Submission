import { combineReducers } from "redux";
import page from "./page";
import user from "./user";
import setup from "./setup";
import cart from "./cart";

export default function getRootReducer(navReducer) {
  return combineReducers({
    // nav: navReducer,
    page: page,
    user: user,
    setup: setup,
    cart: cart
  });
}
