import React, { useEffect } from 'react';
import './About.css'
import { useSelector, useDispatch } from 'react-redux';
const About = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  useEffect(() => {
  });


  return (
    <section id="about" className="about bounds box-card ">
      <div className="infor" style={ { flex : 2 }}>
        <h1 style={{ color: 'white' }}>Hello,</h1>  
        <h1 style={{ color: 'white' }}>My name is Le Ke Hien (Tony)</h1>
      </div>
      
      
    </section>
  );
};

export default About;
