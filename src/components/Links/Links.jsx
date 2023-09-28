import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
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
      <motion.li
        className={"links__link " + checkActive("home")}
        variants={variants}
        whileHover="hover"
        key="home1"
      >
        <Link className="" to={"/"}>
          Home
        </Link>
      </motion.li>

      <motion.li
        className={"links__link " + checkActive("about")}
        variants={variants}
        whileHover="hover"
        key="about2"
      >
        <Link to={"/about"}>About</Link>
      </motion.li>

      <motion.li
        className={"links__link " + checkActive("contact")}
        variants={variants}
        whileHover="hover"
        key="contact3"
      >
        <Link to={"/contact"}>Contacts</Link>
      </motion.li>

      {pathname.length === 1 && (
        <motion.li
          className="links__link"
          variants={variants}
          whileHover="hover"
        >
          <a href="#stack-anchor">Tech Stack</a>
        </motion.li>
      )}

      {pathname.length === 1 && (
        <motion.li
          className="links__link"
          variants={variants}
          whileHover="hover"
        >
          <a href="#project-anchor">Projects</a>
        </motion.li>
      )}
    </ul>
  );
}
