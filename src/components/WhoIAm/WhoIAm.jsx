import React from "react";
import "./WhoIAm.scss";

export default function WhoIAm() {
  return (
    <section className="whoIAm">
      <div className="wrapper whoIAm__wrapper">
        <h1 className="whoIAm__left text--gray-white">
          <span className="whoIAm__text">Hey 👋,</span>
          <span className="whoIAm__text">My name is</span>
          <span className="whoIAm__text text-gradient">Kirill</span>
          <span className="whoIAm__text">And I&apos;m building</span>
          <span className="whoIAm__text">my carrier in web</span>
        </h1>
        <div className="whoIAm__right">
          <div className="whoIAm__photo-container">
            <img
              src="../../../public/my_photo.jpg"
              alt="Here is supposed to be my photo"
              className="whoIAm__photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
