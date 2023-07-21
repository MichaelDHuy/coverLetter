// src/components/Header.js
import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;

