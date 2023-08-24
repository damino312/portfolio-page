import React from "react";
import "./About.scss";

export default function About() {
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
    <section className="about">
      <div className="wrapper about__wrapper">
        <h2 className="about__title">About me</h2>
        <p className="about__text">
          The Generator App is an online tool that helps you to export
          ready-made templates ready to work as your future website. It helps
          you to combine slides, panels and other components and export it as a
          set of static files: HTML/CSS/JS.
        </p>
        <h2 className="about__title">Work Experience</h2>
        {template(
          "Electronics Engineer",
          "Full Time",
          "Resource and Methodological Center",
          "Sep 2022  -  Current Time"
        )}

        <h2 className="about__title">Education</h2>
        {template(
          "Automated information proccessing and management systems, Bachelor's",
          "Full Time",
          "Reshetnev State Siberian University of Science and Technology",
          "Sep 2018  -  June 2022"
        )}
        {template(
          "Data managment, Master's",
          "Full Time",
          "Reshetnev State Siberian University of Science and Technology",
          "Sep 2023  -  Current Time"
        )}
      </div>
    </section>
  );
}
