import React from 'react';
import './About.css'
import lekehien from '../../asset/Lekehien.jpg'
const About = () => {
  return (
    <section className="about">
      <div class="infor" style={ { flex : 2 }}>
        <h1 style={{ color: 'var(--tony-color1)' }}>Hello,</h1>  
        <h1 style={{ color: 'var()' }}>My name is Le Ke Hien (Tony)</h1>
        <button style={{ marginTop: '10rem' ,  border : "none" ,   width : '20rem' , height : '8rem'  , fontSize : '3rem' , backgroundColor : 'var(--tony-color1)'}}>Get in touch</button>
      </div>
      <div class="person-image" style={{  flex : 1  }} >
       <img src={lekehien}></img>
      </div>
      
    </section>
  );
};

export default About;
