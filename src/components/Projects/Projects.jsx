import React from "react";
import "./Projects.scss";
import { useTranslation } from "react-i18next";
import Example from "../Example/Example";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section className="projects scroll-animation" id="project-anchor">
      <div className="wrapper projects-wrapper">
        <h2 className="projects__title text--gray-white">
          {t("title_project")}
        </h2>
        <p className="projects__text text--gray">{t("line_project")}</p>
        <div className="projects__my-projects">
          <Example
            name={"Airbnb"}
            description={t("airbnb_project")}
            stack={"Express, React, MongoDB, Tailwind"}
            imgPath={"/portfolio-page/airbnb.jpg"}
            linkToLive={"http://45.87.247.130/"}
            linkToCode={"https://github.com/damino312/aribnb-front"}
          />
          <Example
            name="Simple chat"
            description={t("chat_project")}
            stack={"Express, React, WebSocket, Framer Motion, Tailwind"}
            imgPath="/portfolio-page/chat.jpg"
            linkToLive={"http://79.133.181.39/"}
            linkToCode={"https://github.com/damino312/chat-client"}
          />
          <Example
            name="ECommerce layout"
            description={t("ecom_project")}
            stack="Vanilla JS, Vanilla HTML, SASS, BEM, Gulp"
            imgPath="/portfolio-page/layout.png"
            linkToLive={"https://damino312.github.io/Ecommerce-layout-/"}
            linkToCode={"https://github.com/damino312/Ecommerce-layout-"}
          />
          <Example
            name="Cryptoparser"
            description={t("ecom_parser")}
            stack="React, Recharts, Tailwind, ExpressJS, MongoDB, Docker"
            imgPath="/portfolio-page/parser.png"
            linkToLive={"http://79.133.181.39:1111"}
            linkToCode={"https://github.com/damino312/parser"}
          />
        </div>
      </div>
    </section>
  );
}
