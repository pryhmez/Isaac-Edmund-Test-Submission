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
        <div
          onClick={this.handleClick}
          className={
            !this.props.show ? "dropdown-menu clicked" : "dropdown-menu"
          }
          style={{ width: "20vw", padding: "20px", marginRight: "7vw", background: "white" }}
        >
          <CartListHolder dropdown={true}/>
        </div>
      </>
    );
  }
}
export default connect(null, { setCurrency })(CartDropdown);
