import { Component } from "react";
import styled, { ThemeProvided } from "styled-components";
import Modal from "react-modal";

import "../../css/landing.css";
import { Container, SectionHolder} from "./styles";
import Header from "../../components/Header";
import Main from "../Main";




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
          <Main/>

        </SectionHolder>
      


      </Container>
    );
  }
}

export default LandingPage;
