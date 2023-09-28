import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Socials from "../Socials/Socials";
import Links from "../Links/Links";
import "./header.scss";

export default function Header() {
  return (
    <header className="header" id="home-anchor">
      <div className="wrapper header__wrapper">
        <motion.div whileHover={{ scale: 1.3 }}>
          <Link to={"/"} className="header__logo text-gradient">
            damino312
          </Link>
        </motion.div>
        <Links />
        <Socials />
      </div>
    </header>
  );
}
