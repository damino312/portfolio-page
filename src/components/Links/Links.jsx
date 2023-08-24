import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Links.scss";

export default function Links() {
  const { pathname } = useLocation();
  const name = pathname.split("/")?.[1];

  const checkActive = (type) => {
    if (type == name) return "text-gradient";
    return "";
  };
  if (pathname.length !== 1) {
    return (
      <ul className="links text--gray">
        <li className={"links__link " + checkActive("home")}>
          <Link to={"/"}>Home</Link>
        </li>
        <li className={"links__link " + checkActive("about")}>
          <Link to={"/about"}>About</Link>
        </li>
        <li className={"links__link " + checkActive("contact")}>
          <Link to={"/contact"}>Contacts</Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className="links text--gray">
      <li className="links__link">
        <a href="#home-anchor">Home</a>
      </li>
      <li className="links__link">
        <Link to={"/about"}>About</Link>
      </li>
      <li className="links__link">
        <a href="#stack-anchor">Tech Stack</a>
      </li>
      <li className="links__link">
        <a href="#project-anchor">Projects</a>
      </li>
      <li className="links__link">
        <Link to={"/contact"}>Contacts</Link>
      </li>
    </ul>
  );
}
