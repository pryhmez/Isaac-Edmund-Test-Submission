import React, { useState, useEffect } from "react";
import styled, { ThemeProvided } from "styled-components";

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

const SectionHolder = styled.section`
  z-index: 0;
  display: flex;
`;

const Dash = styled.div `
   height: 2px;
   width:60px;
   background-color: #ffaa00;
   margin-bottom: 30px;
`

const H3 = styled.h3`
 font-family: "Roboto Slab", Serif;
 color: #a6a6a6;
 font-size: 18px;
 font-weight: 600;
 line-height: 12px;
 // padding: 15px;

 @media (max-width: 768px) {
  text-align: justify;
}
`;

const H1 = styled.h1`
 font-family: "Roboto Slab", Serif;
 color: black;
 margin-bottom: 23px;
 margin-top: 0px;
 font-size: 36px;
 font-weight: 700;
 line-height: 40px;
 padding: 10px 0 0;
 @media (max-width: 768px) {
  text-align: center;
}
`;

function Headings(props) {
  return (
    <Container {...props}>
      {props.subText && <H3>{props.subText}</H3>}
          <H1 style={props.h}>{props.head}</H1>
          <Dash className="dash"></Dash>
    </Container>
  );
}

export default Headings;
