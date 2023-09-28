import React from "react";
import "./About.scss";
import { motion } from "framer-motion";

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
    <motion.section
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      className="about"
    >
      <div className="wrapper about__wrapper">
        <h2 className="about__title">About me</h2>
        <p className="about__text">
          Hello, I'm Kirill, and I'm 23 years old. Currently, I'm pursuing a
          master's degree in Data Management at Reshetnev University. My career
          aspiration is to grow as a professional in the field of web
          development, with a particular passion for frontend development. While
          I also engage in backend development, I find frontend work to be my
          true calling.
        </p>
        <p className="about__text">
          In addition to my academic pursuits, I've achieved a B2 level of
          proficiency in English and frequently have spoken practise. This not
          only enhances my technical skills but also allows me to effectively
          communicate with fellow developers and clients and learn from various
          sources.
        </p>
        <p className="about__text">
          I'm enthusiastic about creating beautiful and functional user
          interfaces, and I'm committed to continually expanding my skills in
          web development. Welcome to my portfolio, where you can explore some
          of my projects and witness my journey in the world of web development.
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
    </motion.section>
  );
}
