import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./ScrollToTop.scss";

export default function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-to-btm">
      <AnimatePresence>
        {showTopBtn && (
          <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            exit={{ x: 200 }}
            className="icon-position"
          >
            <FaAngleUp className=" icon-style" onClick={goToTop} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
