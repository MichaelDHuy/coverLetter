// src/components/Skills.js
import React from "react";
import { DiHtml5, DiCss3, DiJavascript1, DiReact } from "react-icons/di";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills-content">
        <h2>Skills</h2>
        <div className="skills-icons">
          <DiHtml5 className="skill-icon" />
          <DiCss3 className="skill-icon" />
          <DiJavascript1 className="skill-icon" />
          <DiReact className="skill-icon" />
        </div>
        <p>
          I have experience in HTML, CSS, JavaScript, and React. I am familiar
          with modern front-end technologies and best practices.
        </p>
      </div>
    </section>
  );
};

export default Skills;
