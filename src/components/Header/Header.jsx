import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Socials from "../Socials/Socials";
import Links from "../Links/Links";
import Burger from "../Burger/Burger";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import "./header.scss";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className="header" id="home-anchor">
      <div className="wrapper header__wrapper">
        <Burger />
        <motion.div whileHover={{ scale: 1.2 }}>
          <Link to={"/"} className="header__logo text-gradient">
            damino312
          </Link>
        </motion.div>
        <Links />
        <LanguageSelector />
        <Socials />
      </div>
    </header>
  );
}
