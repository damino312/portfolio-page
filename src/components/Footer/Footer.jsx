import React from "react";
import Socials from "../Socials/Socials";
import Links from "../Links/Links";
import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer" id="contacts-anchor">
      <div className="wrapper">
        <div className="footer__top">
          <Link to={"/"} className="footer__logo text--gray">
            damino312
          </Link>
          <a
            href={"mailto:daminionq@gmail.com"}
            className="footer__email text--gray"
          >
            daminionq@gmail.com
          </a>
          <div className="footer__socials">
            <Socials />
          </div>
        </div>
        <div className="footer__bottom">
          <Links />
        </div>
      </div>
    </footer>
  );
}
