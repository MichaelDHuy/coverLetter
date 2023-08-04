// src/components/Experience.js
import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section className="experience">
      <div className="experience-content">
        <h2> A little bit about myself</h2>
        <div className="experience-item">
          <h3>2018 - Moving to Canada</h3>
          <p>This is the beginning of a wonderful journey!!!</p>
          {/* <ul>
            <li>Developed and maintained web applications</li>
            <li>Implemented new features and enhancements</li>
            <li>Collaborated with the design team for UI/UX improvements</li>
          </ul> */}
        </div>
        <div className="experience-item">
          <h3>2019 - Graduated from Memorial University of Newfoundland</h3>
          <p>Graduated and moving to BC. I worked at the fishfarm as a technician to achieve my Canada dream</p>
          {/* <ul>
            <li>Worked on backend development for large-scale applications</li>
            <li>Optimized database queries for performance improvement</li>
            <li>Participated in code reviews and team meetings</li>
          </ul> */}
        </div>
        <div className="experience-item">
          <h3>2023 - Graduated from Lighthouse Labs</h3>
          <p>Graduated from one of the best bootcamps in the market. I really can't wait to start the new as a developer</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
