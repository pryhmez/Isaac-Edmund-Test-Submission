import { Component } from "react";
import { connect } from "react-redux";
import { Query } from "@apollo/client/react/components";
import { LOAD_PRODUCT } from "../../GraphQL/Queries";
import { addToCart } from "../../actions/cart";

import { Box, BoxTag, Centralize, Container, DetailsHolder, H1, Hold, Holder, MainHolder, P, Prodimg, SidePix} from "./styles";
import Button from "../../components/Button";

class ProductView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: "usd",
      Color: "",
      Capacity: "",
      Size: "",
      exists: false,
    };
  }

  componentDidMount() {
    const exists = this.props.cart.some((item, index) => {
      if (item.id == this.props.params.id) {
        this.setState({ ...item, exists: true });
        return true;
      }

      this.props.location.state.attributes.map((item, index) => {
        console.log(item.name, item.items[0].value);

        this.setState({ [item.name]: item.items[0].value });
      });
      return false;
    });

    if (this.props.cart.length == 0) {
      this.props.location.state.attributes.map((item, index) => {
        this.setState({ [item.name]: item.items[0].value });
      });
    }

    console.log(exists);
  }

  addToCart = () => {
    let data = {
      id: this.props.params.id,
      Count: 1,
      ...this.state,
    };

    console.log(this.state.exists);
    if (!this.state.exists) {
      this.setState({ exists: true });
      this.props.addToCart(data);
    }
  };

  setValue = (name, value) => {
    console.log(name, value);
    this.setState({ [name]: value });
  };

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
              // console.log(data)

              return (
                <Centralize>
                  <SidePix>
                    <Prodimg
                      src={data.product.gallery[3]}
                      style={{
                        border: "solid",
                        borderColor: "#c4c4c450",
                        marginBottom: "5px",
                        display: data.product.gallery[3] ? "block" : "none",
                      }}
                    />
                    <Prodimg
                      src={data.product.gallery[1]}
                      style={{
                        border: "solid",
                        borderColor: "#c4c4c450",
                        marginBottom: "5px",
                        display: data.product.gallery[1] ? "block" : "none",
                      }}
                    />
                    <Prodimg
                      src={data.product.gallery[2]}
                      style={{
                        border: "solid",
                        borderColor: "#c4c4c450",
                        marginBottom: "5px",
                        display: data.product.gallery[2] ? "block" : "none",
                      }}
                    />
                  </SidePix>

                  <MainHolder>
                    <Prodimg
                      src={data.product.gallery[0]}
                      style={{
                        width: "auto",
                        height: "auto",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                    <DetailsHolder>
                      <H1 style={{ fontWeight: "600", marginBottom: "10px" }}>
                        {data.product.name}
                      </H1>
                      <H1>{data.product.brand}</H1>

                      {data.product.attributes.map((obj, index) => {
                        if (obj.type == "text") {
                          return (
                            <div key={index}>
                              <BoxTag>{obj.name}</BoxTag>
                              <Hold>
                                {obj.items.map((item, index) => {
                                  return (
                                    <Box
                                      style={
                                        item.value == this.state[obj.name]
                                          ? {
                                              background: "black",
                                              color: "white",
                                            }
                                          : {}
                                      }
                                      onClick={() =>
                                        this.setValue(obj.name, item.value)
                                      }
                                    >
                                      {item.value}
                                    </Box>
                                  );
                                })}
                              </Hold>
                            </div>
                          );
                        }

                        if (obj.type == "swatch") {
                          return (
                            <div key={index}>
                              <BoxTag>{obj.name}</BoxTag>

                              <Hold>
                                {obj.items.map((item, index) => {
                                  return (
                                    <div
                                      style={{
                                        marginRight: "3px",
                                        padding: "1px",
                                        border: "solid",
                                        borderColor:
                                          item.value == this.state.Color
                                            ? "#5ECE7B"
                                            : "transparent",
                                      }}
                                    >
                                      <Box
                                        style={{
                                          background: item.value,
                                          color: "white",
                                          width: "35px",
                                          height: "30px",
                                          borderColor: "#c4c4c4",
                                          margin: "0px",
                                        }}
                                        onClick={() =>
                                          this.setValue(obj.name, item.value)
                                        }
                                      ></Box>
                                    </div>
                                  );
                                })}
                              </Hold>
                            </div>
                          );
                        }
                      })}

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

                      <Hold style={{ flexDirection: "column" }}>
                        {this.state.exists && (
                          <p
                            style={{
                              color: "red",
                              fontSize: "10px",
                              margin: "0px",
                            }}
                          >
                            Item already added to cart view in cart
                          </p>
                        )}{" "}
                        <Button onClick={this.addToCart}>ADD TO CART</Button>
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
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { addToCart })(ProductView);
