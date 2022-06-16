import { Component } from "react";
import styled, { ThemeProvided } from "styled-components";
import { connect } from "react-redux";
import { addToCart } from "../actions/cart";

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

const ItemCont = styled.div`
  width: 100%;
  // height: auto;
  max-height: 450px;
  //   background: red;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0px;
`;

const Prodimg = styled.img`
  max-height: 200px;
  width: auto;
  //   background: green;
`;

const DetailsHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  //  background: cyan;
  justify-content: center;
`;

const H1 = styled.h1`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 30px;
  line-height: 27px;
  margin: 0px;
  width: 100%;
`;

const Hold = styled.div`
  padding: 2px 10px 10px 0px;
  margin: 0px 10px 0px 0px;
  display: flex;
`;

const BoxTag = styled.p`
  margin: 0px 0px 0px 0px;
`;

const Box = styled.div`
  border: solid black 1px;
  min-width: 45px;
  width: auto;
  height: 35px;
  background: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  padding: 5px;
`;

class CartItem extends Component {
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

  // componentDidMount() {
  //   console.log(this.props.cart[1].Color);
  // }

  setValue = (name, value) => {
    console.log(name, value);
    this.setState({ [name]: value });
  };

  render() {

    var price = this.props.details.product.prices.filter((item) => {
      return item.currency.label == this.props.setup.currency;
     });

    return (
      <Container>
        <ItemCont>
          <DetailsHolder>
            <H1 style={{ fontWeight: "600" }}>
              {this.props.details.product.name}
            </H1>
            <H1 style={{ fontWeight: "400" }}>
              {this.props.details.product.brand}
            </H1>

            <Hold>
              <BoxTag
                style={{
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: "700",
                  lineHeight: "20px",
                  marginTop: "10px"
                }}
              >
                {price[0].currency.symbol}{price[0].amount}
              </BoxTag>
            </Hold>

            {this.props.details.product.attributes.map((obj, index) => {
              if (obj.type == "text") {
                return (
                  <div key={index}>
                    <BoxTag>{obj.name}</BoxTag>
                    <Hold>
                      {obj.items.map((item, ind) => {
                        return (
                          <Box
                            style={
                              item.value == this.props.cart[this.props.index][obj.name]
                                ? {
                                    background: "black",
                                    color: "white",
                                    padding: "2px",
                                  }
                                : {}
                            }
                            onClick={() => this.setValue(obj.name, item.value)}
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
                      {obj.items.map((item) => {
                        return (
                          <div
                            style={{
                              marginRight: "3px",
                              // padding: "1px",
                              border: "solid",
                              borderColor:
                                item.value == this.props.cart[this.props.index][obj.name]
                                  ? "#5ECE7B"
                                  : "transparent",
                            }}
                          >
              
                            <Box
                              style={{
                                background: item.value,
                                color: "white",
                                minWidth: "35px",
                                height: "30px",
                                borderColor: "#c4c4c4",
                                margin: "1px",
                              }}
                              // onClick={() =>
                              //   this.setValue(obj.name, item.value)
                              // }
                            ></Box>
                          </div>
                        );
                      })}
                    </Hold>
                  </div>
                );
              }
            })}
          </DetailsHolder>
          <Prodimg src={this.props.details.product.gallery[0]} />
        </ItemCont>
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

export default connect(mapStateToProps, { addToCart })(CartItem);
