import React from "react";
import "./Projects.scss";
import Example from "../Example/Example";

export default function Projects() {
  const render = 4;

  const blocks = Array(render).fill(
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
  );
  return (
    <section className="projects scroll-animation" id="project-anchor">
      <div className="wrapper projects-wrapper">
        <h2 className="projects__title text--gray-white">Projects</h2>
        <p className="projects__text text--gray">
          Things I&apos;ve built so far
        </p>
        <div className="projects__my-projects">{blocks}</div>
      </div>
    </section>
  );
}
