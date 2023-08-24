import React from "react";
import { Link } from "react-router-dom";
import Socials from "../Socials/Socials";
import Links from "../Links/Links";
import "./header.scss";

export default function Header() {
  return (
    <header className="header" id="home-anchor">
      <div className="wrapper header__wrapper">
        <div>
          <Link to={"/"} className="header__logo text-gradient">
            damino312
          </Link>
        </div>
        <Links />
        <Socials />
      </div>
    </header>
  );
}
