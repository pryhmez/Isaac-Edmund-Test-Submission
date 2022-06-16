import { Component } from "react";
import styled, { ThemeProvided } from "styled-components";
import { connect } from "react-redux";
import { setPage } from "../actions/setup";
import { Link, animateScroll as scroll } from "react-scroll";
import { Navigate } from "react-router-dom";
import { Query } from "@apollo/client/react/components";
import { LOAD_CURRENCIES } from "../GraphQL/Queries";
import "../css/header.scss";

import logo from "../assets/logo.png";
import usd from "../assets/usd.png";
import jpy from "../assets/jpy.png";
import eur from "../assets/eur.png";
import { Cart } from "../components/AllSvgs";
import Dropdown from "../components/DropDown";
import CartDropDown from "./CartDropDown";
import { findAllByTestId } from "@testing-library/react";

const Container = styled.div`
  background-color: ${(props) => (props.scrolled ? "white" : "transparent")};
  background: white;
  height: 80px;
  width: 100vw;
  position: fixed;
  top: 0px;
  display: flex;
  flex-direction: row;
  max-width: 100vw;
  justify-content: center;
  z-index: 20;
  // overflow: hidden;

  @media (max-width: 768px) {
    background: #1d1e20;
    height: 11vh;
  }
`;

const Holder = styled.div`
  height: 100%;
  width: 87%;
  display: flex;
  flex-direction: row;
  // background: cyan;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const Partition = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none !important;
  font-family: "Raleway", "sans-serif";
  font-weight: 600;
  font-size: 16;

  p {
    color: black;
    cursor: pointer;
  }
`;

const LinkContainer = styled.div`
  height: 7vh;
  // background: red;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px 20px;
  cursor: pointer;
`;

const LinkUnderline = styled.div`
  height: 2px;
  width: 100%;
  background: #5ece7b;
`;

const P = styled.div`
  font-family: "Raleway", "sans-serif";
  font-weight: 600;
  color: #5ece7b;
  font-size: 16px;
`;

const Badge = styled.div`
  background: black;
  border: solid transparent;
  border-radius: 50%;
  color: white;
  font-size: 10px;
  height: 14px;
  width: 14px;
  padding: 0px;
  margin: 0px;
  margin: -5px 0px -0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hamm: false,
      click: false,
      scroll: true,
      currency: "usd",
      showDrop: false,
      showCartDrop: false,
      page: 0,
      data: {},
      cartSelect: false,
    };
  }

  headerLinks = [
    ["All", "All", -70],
    ["Tech", "Tech", -40],
    ["Clothes", "Clothes", -150],
  ];
  currencyList = [
    // ["Home", "/", 70],
    {
      title: "USD",
      symbol: "$",
    },
    {
      title: "EUR",
      symbol: "E",
    },
    {
      title: "JPY",
      symbol: "J",
    },
  ];

  togglePage = (index, title) => {
    this.setState({ page: index });
    this.props.setPage(title);
    // alert(index)
  };

  closeMobileMenu = () => {
    this.setState({ click: findAllByTestId });
  };

  setDrop = (drop) => {
    this.setState({ showDrop: !this.state.showDrop, showCartDrop: false });
  };

  setCartDrop = (drop) => {
    this.setState({
      showCartDrop: !this.state.showCartDrop,
      showDrop: false
    });
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    window.addEventListener("scroll", this.handleScroll);
    // console.log(this.props.setup.currency);
    // console.log(data)
  }

  handleScroll = () => {
    if (window.pageYOffset > 10) {
      this.setState({ scroll: true });
    } else {
      this.setState({ scroll: true });
    }
  };

  render() {
    return (
      <Container scrolled={this.scrolled}>
        <Holder>
          <Partition style={{ width: "45%" }}>
            {this.headerLinks.map((item, index) => {
              return (
                <Link
                  onClick={() => {
                    this.togglePage(index, item[1]);
                  }}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={item[2]}
                  duration={500}
                  to={item[1]}
                  // activeClassName="selected"
                >
                  <LinkContainer>
                    <P style={{ color: index !== this.state.page && "black" }}>
                      {item[0]}
                    </P>
                    <LinkUnderline
                      style={{
                        background: index !== this.state.page && "transparent",
                      }}
                    />
                  </LinkContainer>
                </Link>
              );
            })}
          </Partition>

          <Partition
            true={true}
            style={{ width: "10%", justifyContent: "center" }}
          >
            <img src={logo} style={{ width: "40%" }} />
          </Partition>

          <Partition
            true={true}
            style={{ width: "45%", justifyContent: "flex-end" }}
          >
            <LinkContainer onClick={this.setDrop}>
              <span style={{ display: "flex" }}>
                <P style={{ color: "black", marginRight: "10px" }}>
                  {this.props.setup.symbol}
                </P>
                <i
                  className={
                    this.state.showDrop
                      ? "fas fa-angle-up"
                      : "fas fa-angle-down"
                  }
                  style={{ fontWeight: "600" }}
                />
              </span>
              <Query query={LOAD_CURRENCIES}>
                {({ loading, error, data }) => {
                  if (error) return <h1>Error...{error + ""}</h1>;
                  if (loading || !data) return <h1>Loading...</h1>;
                  return (
                    <Dropdown
                      dropvalues={data.currencies}
                      show={this.state.showDrop}
                      setDrop={this.setDrop}
                    />
                  );
                }}
              </Query>
            </LinkContainer>

            <LinkContainer
              style={{ justifyContent: "center" }}
              onClick={this.setCartDrop}
            >
              {/* {this.state.cartSelect && <Navigate to={`/cart`}  />} */}
              <div style={{ width: "0px", height: "0px", zIndex: "10" }}>
                <Badge>{this.props.cart.length}</Badge>
              </div>
              <Cart />
              <Query query={LOAD_CURRENCIES}>
                {({ loading, error, data }) => {
                  if (error) return <h1>Error...{error + ""}</h1>;
                  if (loading || !data) return <h1>Loading...</h1>;
                  return (
                    <CartDropDown
                      dropvalues={data.currencies}
                      show={this.state.showCartDrop}
                      setDrop={this.setCartDrop}
                    />
                  );
                }}
              </Query>
            </LinkContainer>
          </Partition>
        </Holder>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    setup: state.setup,
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { setPage })(Header);
