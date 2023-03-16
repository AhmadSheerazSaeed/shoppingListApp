import React from "react";
import { MdCopyright } from "react-icons/md";
import FooterCSS from "./Footer.module.css";

function Footer() {
  return (
    <section className={FooterCSS.footerSection}>
      <MdCopyright className={FooterCSS.copyIcon} /> 2023 http://sheeraz.me (All
      rights reserved)
    </section>
  );
}

export default Footer;
