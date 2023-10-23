import React from "react";
import "./Contact.scss";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      className="contact"
    >
      {" "}
      <div className="wrapper contact-wrapper">
        <h2 className="contact__title">{t("contacts")}</h2>
        <div className="contact__links">
          <a href="https://t.me/damino312" className="contact__link">
            Telegram
          </a>
          <a href="mailto:daminionq@gmail.com" className="contact__link">
            daminionq@gmail.com
          </a>
        </div>
      </div>
    </motion.section>
  );
}
