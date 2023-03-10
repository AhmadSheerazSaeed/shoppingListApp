import React from "react";
import { Link } from "react-router-dom";
import LogoCSS from "./Logo.module.css";

function Logo() {
  return (
    <div className={LogoCSS.logoDiv}>
      <Link className={LogoCSS.linkLogo} to="/">
        Logo
      </Link>
    </div>
  );
}

export default Logo;
