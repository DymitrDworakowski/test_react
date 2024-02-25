import React from "react";
import css from "./Footer.module.css";
import { ReactComponent as LinkedInIcon } from "../../img/linkedin.svg";

const Footer = () => {
  return (
    <div className={css.footer_container}>
      <h1 className={css.footer_title}>Footer</h1>
      <p className={css.developer_info}>
        Developed by <LinkedInIcon className={css.linkedin_icon} />
        <a
          href="https://www.linkedin.com/in/dymitr-dworakowski/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dymitr Dworakowski
        </a>
      </p>
    </div>
  );
};

export default Footer;
