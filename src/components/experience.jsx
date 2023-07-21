// src/components/Experience.js
import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section className="experience">
      <div className="experience-content">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Web Developer</h3>
          <p>Company A</p>
          <p>January 2020 - Present</p>
          <ul>
            <li>Developed and maintained web applications</li>
            <li>Implemented new features and enhancements</li>
            <li>Collaborated with the design team for UI/UX improvements</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Software Engineer</h3>
          <p>Company B</p>
          <p>July 2018 - December 2019</p>
          <ul>
            <li>Worked on backend development for large-scale applications</li>
            <li>Optimized database queries for performance improvement</li>
            <li>Participated in code reviews and team meetings</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
