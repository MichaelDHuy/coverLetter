// src/components/Education.js
import React from "react";
import "./education.css";

const Education = () => {
  return (
    <section className="education">
      <div className="education-content">
        <h2>Why should company hire me?</h2>
        <div className="education-item-container">
          <h3>Passionate for design and UX</h3>
          <p>I am fueling my passion for web/ software development. So excited to bring creativity and problem solving skills to create seamless user experiences that leave a lasting impact.</p>
          <p>Let's craft the future together through technologies!</p>
        </div>
        <div className="education-item-container">
          <h3>Quickly adopt and learn</h3>
          <p>I can be called as an enthusiastic and adaptive learner in the world of web/software development, embracing every challenge as an opportunity to grow and expand my skills. I am committed to staying ahead of the curve and exploring new technologies.</p>
          <p>Let's embark on a journey of continuous learning and innovation!</p>
        </div>
        <div className="education-item-container">
          <h3>Teamwork and Collaboration</h3>
          <p> I believe in the power of teamwork to create extraordinary results. So... I am a collaborative and team-oriented web/software developer, committed to achieving shared goals. Let's join forces to build  exceptional digital experiences together!</p>
          <p>Graduated in May 2018</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
