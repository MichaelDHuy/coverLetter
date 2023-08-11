// src/components/Hero.js
import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Huy Nguyen</h1>
        <h3>Full Stack Developer</h3>
        <p>
          Passionate web developer with experience in building web
          applications. Skilled in front-end and back-end development, and
          proficient in various programming languages and frameworks.
        </p>
        {/* <button>Contact Me</button> */}
      </div>
    </section>
  );
};

export default Hero;
