import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Links.scss";

export default function Links() {
  const { pathname } = useLocation();
  const name = pathname.split("/")?.[1];

  const checkActive = (type) => {
    if (pathname === "/" && type === "home") return "text-gradient";
    if (type == name) return "text-gradient";
    return "";
  };

  const variants = {
    hover: { scale: 1.4 },
  };

  return (
    <ul className="links text--gray">
      <li
        className={checkActive("home")}
        variants={variants}
        whileHover="hover"
        key="home1"
      >
        <Link className="links__link" to={"/"}>
          Home
        </Link>
      </li>

      <li
        className={checkActive("about")}
        variants={variants}
        whileHover="hover"
        key="about2"
      >
        <Link to={"/about"} className="links__link">
          About
        </Link>
      </li>

      <li
        className={checkActive("contact")}
        variants={variants}
        whileHover="hover"
        key="contact3"
      >
        <Link className="links__link" to={"/contact"}>
          Contacts
        </Link>
      </li>

      {pathname.length === 1 && (
        <li variants={variants} whileHover="hover">
          <a href="#stack-anchor" className="links__link">
            Tech Stack
          </a>
        </li>
      )}

      {pathname.length === 1 && (
        <li className="links__link" variants={variants} whileHover="hover">
          <a href="#project-anchor" className="links__link">
            Projects
          </a>
        </li>
      )}
    </ul>
  );
}
