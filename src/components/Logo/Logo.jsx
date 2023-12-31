// import React from "react";
import logo from "../../assets/car.svg";
import { StyledLink, StyledLogoDescr, StyledLogoSVG } from "./Logo.styled.js";

const Logo = () => {
  return (
    <div>
      <StyledLink to="/">
        <StyledLogoSVG src={logo} alt="logo" />
        <StyledLogoDescr>Rent Car</StyledLogoDescr>
      </StyledLink>
    </div>
  );
};

export default Logo;