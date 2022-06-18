import React from "react";
import styled, { ThemeProvided } from "styled-components";


export const Container = styled.div`
  background-color: ${(props) => (props.scrolled ? "white" : "transparent")};
  width: 87vw;
  display: flex;
  padding: 10px;
  flex-direction: column;
  max-width: 100vw;
  justify-content: center;
  z-index: 0;
  // overflow: hidden;

  @media (max-width: 768px) {
    background: #1d1e20;
    height: 11vh;
  }
`;

export const Header = styled.h1`
  width: 100%;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  padding: 10px;
  font-size: 42px;
`;

export const Holder = styled.div`
  // padding: 10px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  // display: grid;
  // grid-template-columns: auto auto auto;
  // background-color: #2196F3;
  // padding: 10px;
`;