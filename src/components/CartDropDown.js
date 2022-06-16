import { Component } from "react";
import { connect } from "react-redux";
import { setCurrency } from "../actions/setup";
import { Link } from "react-router-dom";
import "../css/Dropdown.scss";
import CartListHolder from "./CartListHolder";

class CartDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      click: false,
    };
  }

  handleClick = (content) => {
    //  this.setState({click: !this.state.click})
  };

  render() {
    return (
      <>
        {/* {console.log(props)} */}
        <ul
          onClick={this.handleClick}
          className={
            !this.props.show ? "dropdown-menu clicked" : "dropdown-menu"
          }
          // style={{ ...props.styles }}
        >
          <CartListHolder />
        </ul>
      </>
    );
  }
}
export default connect(null, { setCurrency })(CartDropdown);