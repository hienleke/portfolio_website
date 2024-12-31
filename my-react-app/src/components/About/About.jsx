import React, {  useRef } from 'react';
import './About.css'
import useVisibility from '../custom_hook/useVisibility';

const About = () => {
  const currentRef = useRef(null);
  useVisibility(currentRef, 'About');

  return (
    <section id="about" className="about bounds box-card "  ref={currentRef}>
      <div className="infor" style={ { flex : 2 }}>
        <h1 style={{ color: 'white' }}>Hello,</h1>  
        <h1 className='text-about' style={{ color: 'white' }}>My name is Le Ke Hien (Tony)</h1>
      </div>
      
      
    </section>
  );
};

export default About;
