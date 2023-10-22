import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./WhoIAm.scss";

export default function WhoIAm() {
  const { t } = useTranslation();
  return (
    <section className="whoIAm">
      <div className="wrapper ">
        <div className="whoIAm__wrapper">
          <h1 className="whoIAm__left text--gray-white">
            <span className="whoIAm__text">{t("whoIAm_1")}</span>
            <span className="whoIAm__text">{t("whoIAm_2")}</span>
            <span className="whoIAm__text text-gradient">{t("whoIAm_3")}</span>
            <span className="whoIAm__text">{t("whoIAm_4")}</span>
            <span className="whoIAm__text">{t("whoIAm_5")}</span>
          </h1>
          <div className="whoIAm__right">
            <div className="whoIAm__photo-container">
              <img
                src="/portfolio-page/my_photo.jpg"
                alt="Here is supposed to be my photo"
                className="whoIAm__photo"
              />
            </div>
          </div>
        </div>
        <motion.a
          className="whoIAm__cv"
          target="_blank"
          href="https://drive.google.com/file/d/11GECcEX6PFevTvmKTu5fZr2ORhMTNW5r/view?usp=sharing"
          whileHover={{ scale: 1.3, originX: 0 }}
        >
          &gt; {t("linkCv")}
        </motion.a>
      </div>
    </section>
  );
}
