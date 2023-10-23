import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import "./languageSelector.scss";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [switcher, setSwitcher] = useState(null);

  useEffect(() => {
    if (i18n.language !== "ru") {
      setSwitcher(true);
    }
  }, []);

  useEffect(() => {
    const language = switcher ? "en" : "ru";
    i18n.changeLanguage(language);
  }, [switcher]);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div
      className="switch"
      data-isOn={switcher}
      onClick={() => setSwitcher(!switcher)}
    >
      <motion.div className="handle" layout transition={spring}>
        {switcher ? "En" : "Ru"}
      </motion.div>
    </div>
  );
}

export default LanguageSelector;
