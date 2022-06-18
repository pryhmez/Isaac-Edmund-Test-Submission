import { Component } from "react";
import { connect } from "react-redux";

import CartListHolder from "../../components/CartListHolder";

import { Container, Heading, Holder} from "./styles";

class Cart extends Component {
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
      
        <Heading>Cart</Heading>

        <Holder>
          <Heading>Cart</Heading>

          <CartListHolder/>
        </Holder>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    setup: state,
  };
};

export default connect(mapStateToProps)(Cart);
