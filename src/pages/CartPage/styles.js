import React from "react";
import styled from "styled-components";


export const Container = styled.div`
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

export const Heading = styled.h1`
  width: 100%;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  padding: 10px;
  margin: 0px;
  font-size: 42px;
`;

export const Holder = styled.div`
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
