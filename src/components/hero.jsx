// src/components/Hero.js
import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your Name</h1>
        <h3>Web Developer</h3>
        <p>
          Passionate web developer with experience in building web
          applications. Skilled in front-end and back-end development, and
          proficient in various programming languages and frameworks.
        </p>
        <button>Contact Me</button>
      </div>
    </section>
  );
};

export default Hero;
