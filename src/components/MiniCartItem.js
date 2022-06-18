import { Component } from "react";
import styled, { ThemeProvided } from "styled-components";
import { connect } from "react-redux";
import { editItemProp, removeFromCart } from "../actions/cart";

const Container = styled.div`
  background-color: transparent;
  width: 100%;
//  max-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background: green;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const ItemCont = styled.div`
  width: 100%;
  // height: 300px;
  max-height: 350px;
  //   background: red;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0px;
`;

const Prodimg = styled.img`
  height: auto;
  width: 80%;
  //   background: green;
`;

const DetailsHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
   // background: cyan;
  justify-content: center;
`;

const H1 = styled.h1`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 12px;
  line-height: 10px;
  margin: 0px;
  width: 100%;


`;

const Hold = styled.div`
  padding: 2px 2px 2px 0px;
  margin: 0px 10px 0px 0px;
  display: flex;
`;

const BoxTag = styled.p`
  margin: 0px 0px 0px 0px;
  font-size: 9px;
`;

const Box = styled.div`
  border: solid black 1px;
  max-width: 24px;
  width: 2%;
  height: 20px;
  background: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1px;
  padding: 5px;
  font-size: 8px;
`;

const RightDiv = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
// background: red;
`

const CountHolder = styled.div`
  // background: blue;
//   height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

class MiniCartItem extends Component {
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

  changeCount = (type) => {
    if (type === "add") {
      this.props.editItemProp(
        this.props.details.product.id,
        "Count",
        this.props.cart[this.props.index].Count + 1
      );
    }
    if (type === "minus") {
      if (this.props.cart[this.props.index].Count == 1) {
        this.props.removeFromCart(this.props.details.product.id);
      } else {
        this.props.editItemProp(
          this.props.details.product.id,
          "Count",
          this.props.cart[this.props.index].Count - 1
        );
      }
    }
  };

  changeSpec = (spec, param) => {
    this.props.editItemProp(
      this.props.details.product.id,
      spec,
      param
    );
  }

  render() {
    var price = this.props.details.product.prices.filter((item) => {
      return item.currency.label == this.props.setup.currency;
    });

    this.props.getCosts(this.props.index, parseInt(price[0].amount) * this.props.cart[this.props.index].Count);

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
                  fontWeight: "400",
                  lineHeight: "10px",
                  marginTop: "1px",
                }}
              >
                {price[0].currency.symbol}
                {price[0].amount}
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
                              item.value ==
                              this.props.cart[this.props.index][obj.name]
                                ? {
                                    background: "black",
                                    color: "white",
                                    padding: "1px",
                                  }
                                : {}
                            }
                            onClick={() => this.changeSpec(obj.name, item.value)}
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
                              marginRight: "0px",
                              // padding: "1px",
                              border: "solid",
                              borderColor:
                                item.value ==
                                this.props.cart[this.props.index][obj.name]
                                  ? "#5ECE7B"
                                  : "transparent",
                            }}
                          >
                            <Box
                              style={{
                                background: item.value,
                                color: "white",
                                minWidth: "2%",
                                height: "20px",
                                borderColor: "#c4c4c4",
                                margin: "0.2px",
                              }}
                              onClick={() => this.changeSpec(obj.name, item.value)}

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
          <RightDiv>

          <CountHolder>
            <Box onClick={() => this.changeCount("add")}>+</Box>

            <BoxTag>{this.props.cart[this.props.index].Count}</BoxTag>
            <Box onClick={() => this.changeCount("minus")}>-</Box>
          </CountHolder>
          <Prodimg src={this.props.details.product.gallery[0]} />
          </RightDiv>
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

export default connect(mapStateToProps, { editItemProp, removeFromCart })(
  MiniCartItem
);
