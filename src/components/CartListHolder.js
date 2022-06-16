import { Component } from "react";
import styled, { ThemeProvided } from "styled-components";
import { connect } from "react-redux";
import { Query } from "@apollo/client/react/components";
// import { Query as OpusQuery, Field, InlineFragment, client } from '@tilework/opus';
import { LOAD_PRODUCT } from "../GraphQL/Queries";

import CartItem from "./CartItem";
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
    };
  }

  componentDidUpdate() {
     console.log("updated")
  }

  returnPrices = async (index, nextPrice) => {
    var price = nextPrice.filter((item) => {
      return item.currency.label == this.props.setup.currency;
    });

    let { prices } = this.state;
    prices.push(price[0].amount);
    this.setState({
      total: this.state.prices.reduce((a, b) => parseInt(a) + parseInt(b), 0),
    });
  };



  render() {
    return (
      <Centralize>
        {this.props.cart.map((item, index) => {
          return (
            <Query
              query={LOAD_PRODUCT(item.id)}
              key={index}
              onCompleted={(data) =>
                this.returnPrices(index, data.product.prices)
              }
              //   fetchPolicy={"network-only"}
            >
              {({ loading, error, data }) => {
                if (error) {
                  return <h1>Error...{error + ""}</h1>;
                }
                if (loading) {
                  return <h1>Loading....</h1>;
                }

                return (
                  <div>
                    <Demarkator></Demarkator>
                    <CartItem
                      details={data}
                      item={item}
                      index={index}
                    ></CartItem>
                    <Demarkator></Demarkator>
                  </div>
                );
              }}
            </Query>
          );
        })}

        <Summary>
          <span style={{ display: "flex", justifyContent: "flex-start" }}>
            {" "}
            <Name>Tax 21%: </Name>
            <Price >{this.props.setup.symbol}{0.21 * this.state.total}</Price>
          </span>
          <span style={{ display: "flex" }}>
            {" "}
            <Name>Quantity: </Name>
            <Price>{3}</Price>
          </span>
          <span style={{ display: "flex" }}>
            {" "}
            <Name>Total: </Name>
            <Price>{this.props.setup.symbol}{this.state.total}</Price>
          </span>
          <Button >Order</Button>

        </Summary>
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
