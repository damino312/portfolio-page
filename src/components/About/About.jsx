import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const template = (name, time, place, term) => {
    return (
      <div className="template">
        <div className="template__left">
          <h3 className="template__title">{name}</h3>
          <p className="template__place">{place}</p>
        </div>
        <div className="template__right">
          <div className="template__time-block">{time}</div>
          <div className="template__term">{term}</div>
        </div>
      </div>
    );
  };
  return (
    <motion.section
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      className="about"
    >
      <div className="wrapper about__wrapper">
        <h2 className="about__title">{t("title1_about")}</h2>
        <p className="about__text">{t("par1_about")}</p>
        <p className="about__text">{t("par2_about")}</p>
        <p className="about__text">{t("par3_about")}</p>
        <h2 className="about__title">{t("title2_about")}</h2>
        {template(
          t("rmc_position"),
          t("rmc_time"),
          t("rmc_job"),
          t("rmc_period")
        )}

        <h2 className="about__title">{t("title3_about")}</h2>
        {template(
          t("bach_position"),
          t("bach_time"),
          t("bach_uni"),
          t("bach_period")
        )}
        {template(
          t("mast_position"),
          t("mast_time"),
          t("mast_uni"),
          t("mast_period")
        )}
      </div>
    </motion.section>
  );
}
