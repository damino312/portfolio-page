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
        className={checkActive("home")}
        variants={variants}
        whileHover="hover"
        key="home1"
      >
        <Link className="links__link" to={"/"}>
          Home
        </Link>
      </motion.li>

      <motion.li
        className={checkActive("about")}
        variants={variants}
        whileHover="hover"
        key="about2"
      >
        <Link to={"/about"} className="links__link">
          About me
        </Link>
      </motion.li>

      <motion.li
        className={checkActive("contact")}
        variants={variants}
        whileHover="hover"
        key="contact3"
      >
        <Link className="links__link" to={"/contact"}>
          Contacts
        </Link>
      </motion.li>

      {pathname.length === 1 && (
        <motion.li variants={variants} whileHover="hover">
          <a href="#stack-anchor" className="links__link">
            Tech Stack
          </a>
        </motion.li>
      )}

      {pathname.length === 1 && (
        <motion.li
          className="links__link"
          variants={variants}
          whileHover="hover"
        >
          <a href="#project-anchor" className="links__link">
            Projects
          </a>
        </motion.li>
      )}
    </ul>
  );
}
