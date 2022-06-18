import React from "react";
import styled from "styled-components";


export const Container = styled.div`
  background-color: ${(props) => (props.scrolled ? "white" : "transparent")};
  width: 100vw;
  display: flex;
  padding: 10px;
  flex-direction: column;
  max-width: 100vw;
  justify-content: center;
  align-items: center;
  z-index: 0;
  // overflow: hidden;

  @media (max-width: 768px) {
    background: #1d1e20;
    height: 11vh;
  }
`;

export const Heading = styled.h1`
  width: 100%;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  padding: 10px;
  font-size: 42px;
`;

export const Holder = styled.div`
  padding: 10px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 87%;
  height: 100vh;
  //   background: red;
`;

export const Centralize = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70vh;
  //   background: blue;
`;

export const SidePix = styled.div`
  width: 8%;
  height: 70%;
  //   background: purple;
  display: flex;
  flex-direction: column;
  align-self: start;
  justify-content: space-between;
`;

export const MainHolder = styled.div`
  width: 90%;
  height: 100%;
  //   background: green;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Prodimg = styled.img`
  padding: 20px 0px 20px 0px;
  // background: #fafafa;
`;

export const DetailsHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  //   background: cyan;
`;

export const H1 = styled.h1`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 30px;
  margin: 0px;
  width: 100%;

  p {
    margin: 0px;
  }
`;

export const Hold = styled.div`
  padding: 2px 10px 10px 0px;
  margin: 0px 10px 10px 0px;
  display: flex;
  width: 70%;
`;

export const BoxTag = styled.p`
  margin: 10px 0px 0px 0px;
`;

export const Box = styled.div`
  border: solid black 1px;
  width: 23%;
  height: 40px;
  background: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const P = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #1d1e22;
`;