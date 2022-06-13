import { Component } from "react";
import styled, { ThemeProvided } from "styled-components";
import axios from "axios";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

import "../../css/landing.css";

import Header from "../../components/Header";
import Women from "../Women";

import { render } from "@testing-library/react";

const Container = styled.div`
  background-color: transparent;
  // background: rgb(29, 30, 32);
  width: 100vw;
  // height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  //   display: flex;
  //   flex-direction: column;
  align-items: center;
  // justify-content: center;
`;

const SectionHolder = styled.section`
  z-index: 0;
  display: flex;
  border: none;
  display: flex;
  justify-content: center;
  width: 100vw;
`;


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    // height: "70vh",
    // width: "30vw",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "2000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    border: "none",
    background: "transparent",
  },
  overlay: {
    // background: "rgb(53 178 80/ 0.1)",
    zIndex: "20",
  },
};

Modal.setAppElement("#root");

class LandingPage extends Component {
  state = {
    countDown: "3",
  };
  render() {
    return (
      <Container className="overall">
        <SectionHolder style={{height: "10vh"}}>
          <Header />
        </SectionHolder>


        <SectionHolder>
          <Women/>

        </SectionHolder>
      


      </Container>
    );
  }
}

export default LandingPage;
