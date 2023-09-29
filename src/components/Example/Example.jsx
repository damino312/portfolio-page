import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Example.scss";

export default function Example({
  name,
  description,
  stack,
  imgPath,
  linkToLive,
  linkToCode,
}) {
  const desriptionRef = useRef(null);

  const [isExceeded, setIsExceeded] = useState(false);
  const [isLimited, setIsLimited] = useState(true);

  useEffect(() => {
    isNumberOfLettersExceeded();
  }, []);

  // function countLines() {
  //   const element = desriptionRef.current;
  //   const computedStyle = window.getComputedStyle(element);
  //   const lineHeight = computedStyle.getPropertyValue("line-height");
  //   const parsedLineHeight = parseFloat(lineHeight);
  //   const offsetHeight = desriptionRef.current.offsetHeight;
  //   const numberOfLines = offsetHeight / parsedLineHeight;
  //   if (numberOfLines > 5) setIsExceeded(true);
  // }

  function isNumberOfLettersExceeded() {
    if (description.length > 163) setIsExceeded(true);
  }

  return (
    <motion.div className="project" layout>
      <motion.div className="project__img-container" layout="position">
        <a href={linkToLive} target="_blank">
          <img src={imgPath} alt="" className="project__img" />
        </a>
      </motion.div>

      <motion.div className="project__info" layout>
        <motion.h2
          className="project__title text--gray-white"
          layout="position"
        >
          {name}
        </motion.h2>
        <motion.div
          className={"project__description text--gray"}
          ref={desriptionRef}
          layout="position"
          transition={{ duration: 0.4 }}
        >
          {isLimited ? description.substring(0, 163) : description}
          {isExceeded && (
            <>
              {isLimited && <span>... </span>}
              <button
                className="project__see-more"
                onClick={() => setIsLimited(!isLimited)}
              >
                {isLimited ? "See more" : "Hide"}
              </button>
            </>
          )}
        </motion.div>
        <motion.div layout="position">
          <p className="project__tech-stack text--gray-white">
            Tech stack: <span className="project__technologies">{stack}</span>
          </p>
          <div className="project__container">
            <a href={linkToLive} target="_blank" className="project__link">
              Live Preview
            </a>
            <a href={linkToCode} target="_blank" className="project__link">
              View code
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
