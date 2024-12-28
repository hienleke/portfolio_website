import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener('load',  setIsLoaded(true));
    return () => {
      window.removeEventListener('load',  setIsLoaded(true));
    };
  }, []);
  return (
    <header className ="header">
      <div className={`header-image ${`header ${isLoaded ? 'loaded' : ''}`}`}>
        <img
          src="./favicon.png" // Replace with your image URL
          alt="Header"
          className="header-img"
        />
      </div>
      <div className='social'>
        <img src={'https://skillicons.dev/icons?i=github'} />
        <img src='https://skillicons.dev/icons?i=gmail' />
        <img src='https://skillicons.dev/icons?i=linkedin' />
      </div>
      <nav className='slideUp'>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
