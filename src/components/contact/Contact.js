import React from "react";
import ContactCSS from "./Contact.module.css";

function Contact() {
  return (
    <section className={ContactCSS.wrapper}>
      <h1 className={ContactCSS.headingContact}>Contact</h1>
      <p className={ContactCSS.contactDetails}>
        If you want to contact me, <br /> just send me an email on
        <br /> <a href="mailto:khera724@gmail.com">khera724@gmail.com</a>
      </p>
    </section>
  );
}

export default Contact;
