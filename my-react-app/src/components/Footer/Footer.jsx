import React, { useRef } from 'react';
import Contact from '../Contact/Contact';
import './Footer.css';
import useVisibility from '../custom_hook/useVisibility';

const Footer = () => {
  const currentRef = useRef(null);
  useVisibility(currentRef, 'Footer');

  return (
    <footer className="footer" ref={currentRef}>
      <Contact />
      <p>&copy; 2024 Le Ke Hien. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
