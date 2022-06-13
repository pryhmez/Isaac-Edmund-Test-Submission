import React, { useState, useEffect } from "react";
import styled, { ThemeProvided } from "styled-components";

import item from "../assets/item1.png";

const Container = styled.div`
  background-color: transparent;
  width: 100%;
  //   height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const ItemCont = styled.div`
  width: 100%;
  height: 280px;
//   background: red;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0px;
`;

const Prodimg = styled.img`
  height: 100%;
  width: auto;
//   background: green;
`;

const DetailsHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
   //  background: cyan;
    justify-content: center;

`;

const H1 = styled.h1`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 30px;
  line-height: 27px;
  margin: 0px;
  width: 100%;
`;

const Hold = styled.div`
  padding: 2px 10px 10px 0px;
  margin: 0px 10px 0px 0px;
  display: flex;
`;

const BoxTag = styled.p`
  margin: 0px 0px 0px 0px;
`;

const Box = styled.div`
  border: solid black 1px;
  width: 40px;
  height: 35px;
  background: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

function CartItem(props) {
  return (
    <Container {...props}>
      <ItemCont>
        <DetailsHolder>
          <H1 style={{ fontWeight: "600" }}>Apollo</H1>
          <H1 style={{ fontWeight: "400" }}>Running Short</H1>

          <Hold>
            <BoxTag
              style={{
                fontFamily: "Raleway, sans-serif",
                fontWeight: "700",
                lineHeight: "18px",
              }}
            >
              $50
            </BoxTag>
          </Hold>

          <BoxTag>Size</BoxTag>
          <Hold>
            <Box>XS</Box>
            <Box style={{ background: "black", color: "white" }}>S</Box>
            <Box>M</Box>
            <Box>L</Box>
          </Hold>

          <BoxTag>Color</BoxTag>

          <Hold>
            <Box
              style={{
                background: "red",
                color: "white",
                width: "30px",
                height: "25px",
              }}
            ></Box>
            <Box
              style={{
                background: "white",
                color: "white",
                width: "30px",
                height: "25px",
              }}
            ></Box>
            <Box
              style={{
                background: "cyan",
                color: "white",
                width: "30px",
                height: "25px",
              }}
            ></Box>
          </Hold>
        </DetailsHolder>
        <Prodimg src={item} />
      </ItemCont>
    </Container>
  );
}

export default CartItem;
