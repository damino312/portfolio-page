import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Links.scss";

export default function Links() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

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
          {t("header_home")}
        </Link>
      </motion.li>

      <motion.li
        className={checkActive("about")}
        variants={variants}
        whileHover="hover"
        key="about2"
      >
        <Link to={"/about"} className="links__link">
          {t("header_aboutMe")}
        </Link>
      </motion.li>

      <motion.li
        className={checkActive("contact")}
        variants={variants}
        whileHover="hover"
        key="contact3"
      >
        <Link className="links__link" to={"/contact"}>
          {t("header_contacts")}
        </Link>
      </motion.li>

      {pathname.length === 1 && (
        <motion.li variants={variants} whileHover="hover">
          <a href="#stack-anchor" className="links__link">
            {t("header_techStack")}
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
            {t("header_project")}
          </a>
        </motion.li>
      )}
    </ul>
  );
}
