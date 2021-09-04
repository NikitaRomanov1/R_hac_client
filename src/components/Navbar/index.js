import React from "react";
import { Link } from "react-router-dom";
import { StyledNavBar } from "../../styles/styles";
import rosatom from "../../images/rosatom.png";
const Navbar = () => {
  return (
    <StyledNavBar>
      <Link to="/">
        <img src={rosatom} alt="rosatom_logo"></img>
      </Link>
    </StyledNavBar>
  );
};

export default Navbar;
