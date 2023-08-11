// src/components/Skills.js
import React from "react";
// import { DiHtml5, DiCss3, DiJavascript1, DiReact } from "react-icons/di";
import "./skills.css";

// const Skills = () => {
//   return (
//     <section className="skills">
//       <div className="skills-content">
//         <h2>Skills</h2>
//         <div className="skill-icons">
//           <i className="fab fa-react fa-3x"></i>
//           <i className="fab fa-js-square fa-3x"></i>
//           <i className="fab fa-css3-alt fa-3x"></i>
//           <i className="fab fa-html5 fa-3x"></i>
//         </div>
//         <p>
//           I have experience in HTML, CSS, JavaScript, and React. I am familiar
//           with modern front-end technologies and best practices.
//         </p>
//       </div>
//     </section>
//   );
// };

const Skills = () => {
  return (
    <section className="skills">
      <div className="skill-content">
        <h2>Skills</h2>
        <div className="skill-icons">
          <div className="icon-container">
            <i className="fab fa-react fa-3x"></i>
            <span>React</span>
          </div>
          <div className="icon-container">
            <i className="fab fa-js-square fa-3x"></i>
            <span>JavaScript</span>
          </div>
          <div className="icon-container">
            <i className="fab fa-css3-alt fa-3x"></i>
            <span>CSS</span>
          </div>
          <div className="icon-container">
            <i className="fab fa-html5 fa-3x"></i>
            <span>HTML</span>
          </div>
          <div className="icon-container">
            <i className="fas fa-database fa-3x"></i>
            <span>SQL</span>
          </div>
          {/* <div className="icon-container">
            <i className="fab fa-mysql fa-3x"></i>
            <span>MySQL</span>
          </div> */}
          <div className="icon-container">
            <i className="fab fa-node-js fa-3x"></i>
            <span>Node.js</span>
          </div>
          <div className="icon-container">
            <i className="fab fa-node-js fa-3x"></i>
            <span>TypeScript</span>
          </div>
          {/* <div className="icon-container">
            <i className="fab fa-ruby fa-3x"></i>
            <span>Ruby</span>
          </div> */}
          <div className="icon-container">
            <i className="fas fa-gem fa-3x"></i>
            <span>Rails</span>
          </div>
          <div className="icon-container">
            <i className="fab fa-java fa-3x"></i>
            <span>Java</span>
          </div>
          <div className="icon-container">
            <i className="fab fa-node-js fa-3x"></i>
            <span>Express</span>
          </div>
          {/* <div className="icon-container">
            <i className="fas fa-database fa-3x"></i>
            <span>MongoDB</span>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Skills;
