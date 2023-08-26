import React from "react";
import "./Example.scss";

export default function Example({
  name,
  description,
  stack,
  imgPath,
  linkToLive,
  linkToCode,
}) {
  return (
    <div className="project">
      <div className="project__img-container">
        <a href={linkToLive}>
          <img src={imgPath} alt="" className="project__img" />
        </a>
      </div>

      <div className="project__info">
        <h2 className="project__title text--gray-white">{name}</h2>
        <p className="project__description text--gray">{description}</p>
        <p className="project__tech-stack text--gray-white">
          Tech stack: <span className="project__technologies">{stack}</span>
        </p>
        <div className="project__container">
          <a href={linkToLive} className="project__link">
            Live Preview
          </a>
          <a href={linkToCode} className="project__link">
            View code
          </a>
        </div>
      </div>
    </div>
  );
}
