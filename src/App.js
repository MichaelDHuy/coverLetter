import React from 'react';
import './App.css';
// import Header from './components/header';
// import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contacts';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <About /> */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;