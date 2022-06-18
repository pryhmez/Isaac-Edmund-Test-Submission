import { Component } from "react";
import { connect } from "react-redux";
import { Query } from "@apollo/client/react/components";
import { LOAD_ALL } from "../../GraphQL/Queries";

import { Container, Header, Holder} from "./styles"
import Thumbnail from "../../components/Thumbnail";



class Main extends Component {
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

export default connect(mapStateToProps)(Main);
