import { Component } from "react";
import styled, { ThemeProvided } from "styled-components";
import { connect } from "react-redux";
import { Query } from "@apollo/client/react/components";
import { LOAD_ALL } from "../../GraphQL/Queries";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";

import Thumbnail from "../../components/Thumbnail";

const Container = styled.div`
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

const Header = styled.h1`
  width: 100%;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  padding: 10px;
  font-size: 42px;
`;

const Holder = styled.div`
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

class Women extends Component {
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
        <Header >{this.props.setup.page}</Header>

        <Holder>
          <Query query={LOAD_ALL(this.props.setup.page)}>
            {({ loading, error, data }) => {
              if (error) {
                return <h1>Error...{error+""}</h1>;
              }
              if (loading) {
                return <h1>Loading....</h1>;
              }
              return data.category.products.map((item, index) => {
                return <Thumbnail details={item} key={index} />;
              });
            }}
          </Query>


        </Holder>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    setup: state.setup,
  };
};

export default connect(mapStateToProps)(Women);
