import React from 'react';
import './About.css'
import setCurrentComponent from '../../redux/action';
import { useSelector, useDispatch } from 'react-redux';
const About = () => {
  const dispatch = useDispatch();

  dispatch(setCurrentComponent("About"))
  return (
    <section className="about moveUp-fadeIn ">
      <div className="infor" style={ { flex : 2 }}>
        <h1 style={{ color: 'var(--tony-color1)' }}>Hello,</h1>  
        <h1 style={{ color: 'var()' }}>My name is Le Ke Hien (Tony)</h1>
        <button style={{ marginTop: '1rem' ,  border : "none" ,   width : '10rem' , height : '7rem'  , fontSize : '1.5rem' , backgroundColor : 'var(--tony-color1)'}}>Get in touch</button>
      </div>
      
      
    </section>
  );
};

export default About;
