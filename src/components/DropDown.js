import {Component} from "react";
import { connect } from "react-redux";
import { setCurrency } from "../actions/setup";
import { Link } from "react-router-dom";
import "../css/Dropdown.scss";

class Dropdown extends Component {

  constructor(props) {
    super(props);

    this.state = {
      click: false
    }
  }


   handleClick = (content) =>{
    //  this.setState({click: !this.state.click})
     this.props.setCurrency(content);
     this.props.setDrop();
     return;
   } 

  render(){

    
    return (
      <>
      {/* {console.log(props)} */}
      <ul
        onClick={this.handleClick}
        className={!this.props.show ? "dropdown-menu clicked" : "dropdown-menu"}
        // style={{ ...props.styles }}
        >
        {this.props.dropvalues
          ? this.props.dropvalues.map((item, index) => {
            return (
              <li key={index} >
                  <div className="dropdown-link" onClick={() => {this.handleClick({currency: item.label, symbol: item.symbol})}}>
                  {/* <img src={item.img} style={{width: '40px'}}/> */}
                  <p>{item.symbol}</p>
                  <p>{item.label}</p>

                  </div>
                </li>
              );
            })
            : this.props.children}
      </ul>
    </>
  );
}

}
export default connect(null, {setCurrency})(Dropdown);
