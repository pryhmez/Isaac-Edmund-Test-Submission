// import { Link } from "react-router-dom";

import logo from "../assets/ordanowhite.png";
import '../css/Logo.scss';

const Logo = (props) => {
  return (
    // <Link style={{ listStyle: "none", textDecoration: "none" }} to="/">
      <div className="logo-cont">
        <img src={logo} alt={"Negst Logo"}/>
        <h2 style={{ color: props.color, marginTop: '0px', fontStyle: 'italic' }}>Redefining the Nigerian Narrative</h2>
      </div>
    // </Link>
  );
};

export default Logo;