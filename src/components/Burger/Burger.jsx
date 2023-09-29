import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Burger.scss";

export default function Burger() {
  const [burgerMenu, setBurgerMenu] = useState(false);

  useEffect(() => {
    if (burgerMenu) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "visible";
    }
  }, [burgerMenu]);
  const navigate = useNavigate();

  const BurgerNavItem = ({ linkName, href, setBurgerMenu }) => {
    const vars = {
      initial: {
        y: "30vh",
        transition: {
          duration: 0.5,
          ease: [0.37, 0, 0.63, 1],
        },
      },
      animate: {
        y: 0,
        transition: {
          ease: [0, 0.55, 0.45, 1],
          duration: 0.7,
        },
      },
    };
    return (
      <div className="burger__nav-container">
        <motion.div
          className="burger__nav-item"
          variants={vars}
          onClick={() => {
            setBurgerMenu(false);
            setTimeout(() => navigate(href), 1000);
          }}
          whileTap={{ scale: 1.4, originX: 0 }}
        >
          {linkName}
        </motion.div>
      </div>
    );
  };

  const vars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.12, 0, 0.39, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    animate: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  return (
    <div className="burger">
      <motion.button
        className="btn burger__open-btn"
        whileTap={{ scale: 1.4 }}
        onClick={() => setBurgerMenu(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="burger__svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </motion.button>
      <AnimatePresence>
        {burgerMenu && (
          <motion.div
            className="burger__wrapper"
            variants={vars}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.button
              className="btn burger__close-btn"
              onClick={() => setBurgerMenu(false)}
              whileTap={{ scale: 1.4 }}
            >
              Close
            </motion.button>
            <motion.nav
              variants={containerVars}
              initial="initial"
              animate="animate"
              exit="initial"
              className="burger__nav"
            >
              <BurgerNavItem
                href="/"
                linkName="Home"
                setBurgerMenu={setBurgerMenu}
              />
              <BurgerNavItem
                href="/about"
                linkName="About me"
                setBurgerMenu={setBurgerMenu}
              />
              <BurgerNavItem
                href="/contact"
                linkName="Contacts"
                setBurgerMenu={setBurgerMenu}
              />
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
