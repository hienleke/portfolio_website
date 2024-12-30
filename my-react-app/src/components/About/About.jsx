import React from 'react';
import './About.css'
import setCurrentComponent from '../../redux/action';
import { useSelector, useDispatch } from 'react-redux';
const About = () => {
  const dispatch = useDispatch();

  dispatch(setCurrentComponent("About"))
  return (
    <section className="about moveUp-fadeIn box-card ">
      <div className="infor" style={ { flex : 2 }}>
        <h1 style={{ color: 'white' }}>Hello,</h1>  
        <h1 style={{ color: 'white' }}>My name is Le Ke Hien (Tony)</h1>
      </div>
      
      
    </section>
  );
};

export default About;
