import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Le Ke Hien</h1>
      <p>Backend Developer | Node.js Expert</p>
      <nav>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
