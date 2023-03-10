import React from "react";
import { MdCopyright } from "react-icons/md";
import "./Footer.module.css";

function Footer() {
  return (
    <section className="footerSection">
      <MdCopyright className="copyIcon" /> 2023 http://sheeraz.me (All rights
      reserved)
    </section>
  );
}

export default Footer;
