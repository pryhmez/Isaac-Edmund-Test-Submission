import { Component } from "react";
import styled, { ThemeProvided } from "styled-components";
import { connect } from "react-redux";
import { Query } from "@apollo/client/react/components";
import { LOAD_PRODUCT } from "../../GraphQL/Queries";

import Thumbnail from "../../components/Thumbnail";
import item from "../../assets/item1.png";
import Button from "../../components/Button";

const Container = styled.div`
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

const Heading = styled.h1`
  width: 100%;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  padding: 10px;
  font-size: 42px;
`;

const Holder = styled.div`
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

const Centralize = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70vh;
  //   background: blue;
`;

const SidePix = styled.div`
  width: 8%;
  height: 70%;
  //   background: purple;
  display: flex;
  flex-direction: column;
  align-self: start;
  justify-content: space-between;
`;

const MainHolder = styled.div`
  width: 90%;
  height: 100%;
  //   background: green;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Prodimg = styled.img`
  padding: 20px 0px 20px 0px;
  // background: #fafafa;
`;

const DetailsHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  //   background: cyan;
`;

const H1 = styled.h1`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 30px;
  margin: 0px;
  width: 100%;

  p {
    margin: 0px;
  }
`;

const Hold = styled.div`
  padding: 2px 10px 10px 0px;
  margin: 0px 10px 10px 0px;
  display: flex;
  width: 70%;
`;

const BoxTag = styled.p`
  margin: 10px 0px 0px 0px;
`;

const Box = styled.div`
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

const P = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #1d1e22;
`;

class ProductView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hamm: false,
      click: false,
      scroll: true,
      currency: "usd",
      selectedColor: "",
      selectedCapacity: "",
      selectedSize: ""
    };
  }

  componentDidMount() {
    console.log(this.props.location.state.prices);
  }

  render() {
    var price = this.props.location.state.prices.filter((item) => {
      return item.currency.label == this.props.setup.currency;
    });

    return (
      <Container scrolled={this.scrolled}>
        {/* <Header/> */}

        {/* <Heading>Women</Heading> */}

        <Holder>
          <Query query={LOAD_PRODUCT(this.props.params.id)}>
            {({ loading, error, data }) => {
              if (error) {
                return <h1>Error...{error + ""}</h1>;
              }
              if (loading) {
                return <h1>Loading....</h1>;
              }
              return (
                <Centralize>
                  <SidePix>
                    <Prodimg src={data.product.gallery[3]} style={{ border: "solid", borderColor: "#c4c4c450", marginBottom: "5px", display: data.product.gallery[3] ? "block" : "none"}}/>
                    <Prodimg src={data.product.gallery[1]} style={{ border: "solid", borderColor: "#c4c4c450", marginBottom: "5px", display: data.product.gallery[1] ? "block" : "none"}}/>
                    <Prodimg src={data.product.gallery[2]} style={{ border: "solid", borderColor: "#c4c4c450", marginBottom: "5px", display: data.product.gallery[2] ? "block" : "none"}}/>
                  </SidePix>

                  <MainHolder>
                    <Prodimg
                      src={data.product.gallery[0]}
                      style={{ width: "auto", height: "auto", marginLeft: "auto", marginRight: "auto" }}
                    />
                    <DetailsHolder>
                      <H1 style={{ fontWeight: "600", marginBottom: "10px" }}>
                        {data.product.name}
                      </H1>
                      <H1>{this.props.location.state.brand}</H1>

                      {this.props.location.state.attributes.map(
                        (obj, index) => {
                          console.log(item.value);

                          if (obj.name == "Size" || obj.name == "Capacity") {
                            return (
                              <div>
                                <BoxTag>{obj.name}</BoxTag>
                                <Hold>
                                  {obj.items.map((item, index) => {
                                    return <Box>{item.value}</Box>;
                                  })}
                                </Hold>
                              </div>
                            );
                          }

                          if (obj.name == "Color") {
                            return (
                              <div>
                                <BoxTag>{obj.name}</BoxTag>

                                <Hold>
                                  {obj.items.map((item, index) => {
                                    return (
                                      <Box
                                        style={{
                                          background: item.value,
                                          color: "white",
                                          width: "35px",
                                          height: "30px",
                                        }}
                                      ></Box>
                                    );
                                  })}
                                </Hold>
                              </div>
                            );
                          }
                        }
                      )}

                      <BoxTag>Price</BoxTag>

                      <Hold>
                        <BoxTag
                          style={{
                            fontFamily: "Raleway, sans-serif",
                            fontWeight: "700",
                            lineHeight: "18px",
                          }}
                        >
                          {this.props.setup.symbol}
                          {price[0].amount}
                        </BoxTag>
                      </Hold>

                      <Hold>
                        <Button>ADD TO CART</Button>
                      </Hold>

                      <Hold>
                        <P
                          dangerouslySetInnerHTML={{
                            __html: data.product.description,
                          }}
                        ></P>
                      </Hold>
                    </DetailsHolder>
                  </MainHolder>
                </Centralize>
              );
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

export default connect(mapStateToProps)(ProductView);
