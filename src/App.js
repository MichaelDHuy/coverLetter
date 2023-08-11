import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Education from "./components/education";
import Contact from "./components/contact";
import Footer from "./components/footer"; // Add this line
import Reference from "./components/reference";

import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        {/* <Contact /> */}
        <Reference />
      </main>
      <Footer /> {/* Add this line */}
    </div>
  );
};

export default App;