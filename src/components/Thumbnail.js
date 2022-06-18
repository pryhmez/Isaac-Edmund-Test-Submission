import { Component } from "react";
import styled, { ThemeProvided } from "styled-components";
import { connect } from "react-redux";
import { addToCart} from "../actions/cart";
import { Navigate } from "react-router-dom";

import { CartWhite } from "../components/AllSvgs";


const Container = styled.div`
  background: white;
  height: 444px;
  width: 386px;
  // width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 16px;
  margin-top: 40px;
  margin-right: auto;
  margin-bottom: 30px;

  &:hover {
    background: white;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.59);
  }

  @media (max-width: 768px) {
    background: #1d1e20;
    height: 11vh;
  }
`;

const Img = styled.img`
  height: 338px;
  width: auto;
  max-width: 100%;
  background: grey;
`;

const Name = styled.p`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  margin: 0px;
  width: 100%;
`;
const Price = styled.p`
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  margin: 0px;
  width: 100%;
`;

const Floating = styled.div`
  width: 50px;
  height: 10px;
  // background: green;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const FAB = styled.div`
  background: #5ece7b;
  width: 50px;
  height: 50px;
  margin: -25px 15px 0px 0px;
  border: solid transparent;
  border-radius: 50%;
  // display: flex;
  justify-content: center;
  align-items: center;


`;

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hamm: false,
      click: false,
      scroll: true,
      currency: "usd",
      price: "",
      focused: false,
      navigate: ""
    };
  }

  addToCart = () => {
    this.props.addToCart(this.props.details)  
  }

  goToProduct = () => {
    this.setState({navigate: this.props.details.id});
  }

  render() {
    var price = this.props.details.prices.filter((item) => {
      return item.currency.label == this.props.setup.currency;
    });

    return (
      <Container
        scrolled={this.scrolled}
        onMouseEnter={() => this.setState({ focused: true })}
        onMouseLeave={() => this.setState({ focused: false })}
        onClick={this.goToProduct}
      >
        {this.state.navigate && (<Navigate to={`/product/${this.state.navigate}`}  state={this.props.details} />)}
        <Img src={this.props.details.gallery[0]} />
        <Floating>
          <FAB
            style={
              this.state.focused ? { display: "flex" } : { display: "none" }
            }
            onClick={this.addToCart}
          >
            <CartWhite fill={"red"} />
          </FAB>
        </Floating>

        <Name>{this.props.details.name}</Name>
        <Price>
          {this.props.setup.symbol}
          {price[0].amount}
        </Price>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    setup: state.setup,
  };
};

export default connect(mapStateToProps, {addToCart})(Header);
