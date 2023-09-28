import React from "react";
import "./Projects.scss";
import Example from "../Example/Example";

export default function Projects() {
  return (
    <section className="projects scroll-animation" id="project-anchor">
      <div className="wrapper projects-wrapper">
        <h2 className="projects__title text--gray-white">Projects</h2>
        <p className="projects__text text--gray">
          Things I&apos;ve built so far
        </p>
        <div className="projects__my-projects">
          <Example
            name={"Airbnb"}
            description={
              " Airbnb (ABNB) is an online marketplace that connects people who want to rent out their homes with people who are looking for accommodations in specific locales."
            }
            stack={"Express, React, MongoDB, Tailwind"}
            imgPath={"/portfolio-page/airbnb.jpg"}
            linkToLive={"http://45.87.247.130/"}
            linkToCode={"https://github.com/damino312/aribnb-front"}
          />
          <Example
            name="Simple chat"
            description="The Simple Web Chat project is a user-friendly web application designed to facilitate real-time text communication between individuals. This minimalistic chat platform is aimed at providing an intuitive and hassle-free way for users to engage in conversations in small organizations."
            stack={"Express, React, WebSocket, Framer Motion, Tailwind"}
            imgPath="/portfolio-page/chat.jpg"
            linkToLive={"http://79.133.181.39/"}
            linkToCode={"https://github.com/damino312/chat-client"}
          />
          <Example
            name="ECommerce layout"
            description="This project presents the layout design for a single-page application tailored for wilderness enthusiasts and travelers exploring remote and scenic destinations. "
            stack="Vanilla JS, Vanilla HTML, SASS, BEM, Gulp"
            imgPath="/portfolio-page/layout.png"
            linkToLive={"https://damino312.github.io/Ecommerce-layout-/"}
            linkToCode={"https://github.com/damino312/Ecommerce-layout-"}
          />
        </div>
      </div>
    </section>
  );
}
