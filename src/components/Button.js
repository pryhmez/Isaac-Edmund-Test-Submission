import React, { useState, useEffect } from "react";
import styled, { ThemeProvided } from "styled-components";

const Btn = styled.button`
  cursor: pointer;
  background: #5ECE7B;
  width: 100%;
  height: 50px;
  border: solid transparent;
  border-radius: 5px;
  margin-top: 20px;
  align-items: center;
  color: white;
  font-family: "Roboto Slab", serif;
  font-size: 14px;

  &:hover {
    background: #5ECE7B;
  }
`;

const SectionHolder = styled.section``;

function Button(props) {
  return <Btn {...props}>{props.children || props.title}</Btn>;
}

export default Button;
