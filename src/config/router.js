import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useDispatch, connect } from "react-redux";
import WithRouter from "./withRouter";

import LandingPage from "../pages/LandingPage/LandingPage";
import ProductView from "../pages/ProductView";
import CartPage from "../pages/CartPage";
const WrappedProductView = WithRouter(ProductView);

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product/:id" element={<WrappedProductView />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router;
