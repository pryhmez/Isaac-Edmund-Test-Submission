import { Component } from "react";
import styled, { ThemeProvided } from "styled-components";
import { connect } from "react-redux";
import { Query } from "@apollo/client/react/components";
import { Navigate } from "react-router-dom";
import { LOAD_PRODUCT } from "../GraphQL/Queries";

import CartItem from "./CartItem";
import MiniCartItem from "./MiniCartItem";
import Button from "./Button";

const Centralize = styled.div`
  display: flex;
  flex-direction: column;
  //   align-items: center;
  justify-content: space-between;
  width: 100%;
  //   height: 70vh;
  //  background: blue;
`;

const Holder = styled.div`
  &::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #fff;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #fff;
  }
  ${(props) =>
    props.dropdown && {
      "max-height": "45vh",
      overflow: "scroll",
    }}
`;

const Demarkator = styled.div`
  background: #c4c4c4;
  width: 100%;
  height: 0.5px;
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 300px;
`;

const Name = styled.p`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  margin: 0px;
  font-size: 20px;
  line-height: 35px;
  margin-right: 10px;
`;
const Price = styled.p`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  margin: 0px;
  font-size: 20px;
  line-height: 35px;
`;

class CartListHolder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hamm: false,
      click: false,
      scroll: true,
      currency: "usd",
      prices: [],
      total: "",
      itemCosts: [],
      goTo: "",
    };
  }

  componentDidUpdate() {
    console.log("updated");
    if (this.state.prices.length !== 0) {
      this.totalCost();
    }
  }

  getCosts = (index, cost) => {
    // console.log(index, cost)
    let { itemCosts } = this.state;

    itemCosts[index] = cost;
    this.setState({
      total: 0,
    });
  };

  getQuantity = () => {
    return this.props.cart.reduce((acc, next) => {
      return acc + next.Count;
    }, 0);
  };

  totalCost = () => {
    const sum = this.state.itemCosts.reduce((accumulator, next) => {
      return accumulator + next;
    }, 0);

    if (this.props.dropdown) {
      return (
        <Summary>
          <span style={{ display: "flex", justifyContent: "space-between" }}>
            {" "}
            <Name style={{ fontSize: "12px", fontWeight: "700" }}>Total: </Name>
            <Price style={{ fontSize: "12px", fontWeight: "700" }}>
              {this.props.setup.symbol}
              {Math.round(sum)}
            </Price>
          </span>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              style={{
                width: "40%",
                height: "33px",
                background: "transparent",
                borderColor: "black",
                color: "black",
                borderRadius: "3px",
                margin: "0px",
              }}
              onClick={() => this.setState({ goTo: "cart" })}
            >
              VIEW BAG
            </Button>
            <Button
              style={{
                width: "40%",
                height: "33px",
                borderRadius: "3px",
                margin: "0px",
              }}
              onClick={() => this.setState({ goTo: "cart" })}
            >
              CHECKOUT
            </Button>
          </div>
        </Summary>
      );
    } else {
      return (
        <Summary>
          <span style={{ display: "flex", justifyContent: "flex-start" }}>
            {" "}
            <Name>Tax 21%: </Name>
            <Price>
              {this.props.setup.symbol}
              {Math.round(0.21 * sum)}
            </Price>
          </span>
          <span style={{ display: "flex" }}>
            {" "}
            <Name>Quantity: </Name>
            <Price>{3}</Price>
          </span>
          <span style={{ display: "flex" }}>
            {" "}
            <Name>Total: </Name>
            <Price>
              {this.props.setup.symbol}
              {Math.round(sum)}
            </Price>
          </span>
          <Button>Order</Button>
        </Summary>
      );
    }
  };

  render() {
    return (
      <Centralize>
        <Name style={{ fontSize: "12px", fontWeight: "700" }}>
          My Bag: {this.getQuantity()}
        </Name>
        {this.state.goTo && <Navigate to={`/cart`} />}

        <Holder dropdown={this.props.dropdown}>
          {this.props.cart.map((item, index) => {
            return (
              <Query
                query={LOAD_PRODUCT(item.id)}
                key={index}
                // onCompleted={(data) =>
                //   this.returnPrices(index, data.product.prices)
                // }
                //   fetchPolicy={"network-only"}
              >
                {({ loading, error, data }) => {
                  if (error) {
                    return <h1>Error...{error + ""}</h1>;
                  }
                  if (loading) {
                    return <h1>Loading....</h1>;
                  }
                  // this.returnPrices(index, data.product.prices)
                  return (
                    <div>
                      <Demarkator></Demarkator>
                      {this.props.dropdown ? (
                        <MiniCartItem
                          details={data}
                          item={item}
                          index={index}
                          getCosts={this.getCosts}
                        />
                      ) : (
                        <CartItem
                          details={data}
                          item={item}
                          index={index}
                          getCosts={this.getCosts}
                        />
                      )}

                      <Demarkator></Demarkator>
                    </div>
                  );
                }}
              </Query>
            );
          })}
        </Holder>

        {this.totalCost()}
      </Centralize>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    setup: state.setup,
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(CartListHolder);
