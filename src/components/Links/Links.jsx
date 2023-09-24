import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Links.scss";

export default function Links() {
  const { pathname } = useLocation();
  const name = pathname.split("/")?.[1];

  const checkActive = (type) => {
    if (type == name) return "text-gradient";
    return "";
  };

  return (
    <ul className="links text--gray">
      <li
        className={"links__link " + checkActive("home")}
        key="dsadasdasjiodjasda"
      >
        <Link to={"/"}>Home</Link>
      </li>

      <li
        className={"links__link " + checkActive("about")}
        key="1231232133dasdsa"
      >
        <Link to={"/about"}>About</Link>
      </li>

      <li
        className={"links__link " + checkActive("contact")}
        key="dsadasd1dsadas"
      >
        <Link to={"/contact"}>Contacts</Link>
      </li>

      {pathname.length === 1 && (
        <motion.li
          className="links__link"
          key="modal"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
        >
          <a href="#stack-anchor">Tech Stack</a>
        </motion.li>
      )}

      {pathname.length === 1 && (
        <motion.li
          className="links__link"
          key={pathname}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
        >
          <a href="#project-anchor">Projects</a>
        </motion.li>
      )}
    </ul>
  );
}
