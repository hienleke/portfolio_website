import React from 'react';
import  './Contact.css'
const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-card">
        <h2>Contact Me</h2>
        <div style={{  width :'100%'  , height :'3px' , background : "white" , marginBottom: "20px"}}></div>
        <p>Email: <a href="mailto:lekehien5431@gmail.com">lekehien5431@gmail.com</a></p>
        <p>Phone: +84 762110602</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/hien-le-ke-9124681a7/" target="_blank" rel="noopener noreferrer">View Profile</a></p>
      </div>
    </section>
  );
  
};

export default Contact;
