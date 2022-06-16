import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
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
          <Route path="/" element={<CartPage />} />
          <Route path="/product/:id" element={<WrappedProductView />} />

          {/* <Route path="/" element={<ProductView />} /> */}

          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

// const mapStateToProps = (state) => {
//    return {
//      user: state.user
//    };
//  };

// export default connect(mapStateToProps)(Router);
export default Router;
