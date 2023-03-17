import React from "react";
import { Link } from "react-router-dom";
import LogoCSS from "./Logo.module.css";
import mainLogo from "./shoppingCartHalf.png";

function Logo() {
  return (
    <div className={LogoCSS.logoDiv}>
      <Link className={LogoCSS.linkLogo} to="/">
        <img src={mainLogo} className={LogoCSS.logoImg} />
      </Link>
    </div>
  );
}

export default Logo;
