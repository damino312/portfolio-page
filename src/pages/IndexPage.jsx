import React from "react";
import { useEffect } from "react";
import WhoIAm from "../components/WhoIAm/WhoIAm";
import TechStack from "../components/TechStack/TechStack";
import Projects from "../components/Projects/Projects";
import { motion } from "framer-motion";

export default function IndexPage() {
  function scrollAnimation() {
    const the_animation = document.querySelectorAll(".scroll-animation");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("element-show");
        }
      });
    });
    for (let i = 0; i < the_animation.length; i++) {
      const elements = the_animation[i];

      observer.observe(elements);
    }
  }

  useEffect(() => {
    scrollAnimation();
  }, []);

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
    >
      <WhoIAm />
      <TechStack />
      <Projects />
    </motion.div>
  );
}
