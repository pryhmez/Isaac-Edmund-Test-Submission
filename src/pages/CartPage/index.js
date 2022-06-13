import { Component } from "react";
import styled, { ThemeProvided } from "styled-components";
import { connect } from "react-redux";

import Header from "../../components/Header";
import CartItem from "../../components/CartItem";

import Thumbnail from "../../components/Thumbnail";
import item from "../../assets/item1.png";
import Button from "../../components/Button";

const Container = styled.div`
  background-color: ${(props) => (props.scrolled ? "white" : "transparent")};
  width: 100vw;
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    background: #1d1e20;
    height: 11vh;
  }
`;

const SectionHolder = styled.section`
  z-index: 0;
  display: flex;
  border: none;
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const Heading = styled.h1`
  width: 100%;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  padding: 10px;
  margin: 0px;
  font-size: 42px;
`;

const Holder = styled.div`
  padding: 10px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  //   justify-content: space-between;
  align-items: center;
  width: 87%;
  //   height: 100vh;
  //   background: red;
`;

const Centralize = styled.div`
  display: flex;
  flex-direction: column;
  //   align-items: center;
  justify-content: space-between;
  width: 100%;
  //   height: 70vh;
  //   background: blue;
`;

const Demarkator = styled.div`
  background: #c4c4c4;
  width: 100%;
  height: 1px;
`;

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hamm: false,
      click: false,
      scroll: true,
      currency: "usd",
    };
  }

  render() {
    return (
      <Container scrolled={this.scrolled}>
        {/* <SectionHolder style={{height: "1\0vh"}}>
        <Header/>

        </SectionHolder> */}
        <Heading>Cart</Heading>

        <Holder>
          <Heading>Cart</Heading>

          <Centralize>
             <Demarkator></Demarkator>
            <CartItem></CartItem>
            <Demarkator></Demarkator>

          </Centralize>
        </Holder>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    setup: state,
  };
};

export default connect(mapStateToProps)(Cart);
