import React , { useState, useEffect }from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Project/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Skill from './components/Skill/Skill';

function App() {

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null, // Observing the viewport
      threshold: 0.5, // Trigger when 50% of the section is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      // Clean up observer on unmount
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <div className="App">
  <Header activeSection={activeSection} />
      <About id="about" />
      <Experience id="experience" />
      <Projects id="projects" />
      <Skill/>
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default App;
