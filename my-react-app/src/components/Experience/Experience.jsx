import React from 'react';
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      company: "INNORIX",
      location: "Binh Thanh District, HCM city, Viet Nam",
      role: "Fullstack Software Engineer",
      duration: "Dec 2023 – Oct 2024",
      techstack: [
        "Node.js (Express, Sails)", 
        "MySQL", 
        "Sequelize", 
        "AWS (RDS, EC2, Lambda, S3)", 
        "Azure (Blob Storage)", 
        "Google (Google Storage)", 
        "Redis", 
        "Sequelize", 
        "CronJob", 
        "Socket", 
        "CI/CD with GitHub Action", 
        "React"
      ],
      responsibilities: [
        "Migrated file transfer system to a web platform with cloud integration (Azure Blob, Google Storage, Amazon S3), enabling drag-and-drop functionality and file management actions.",
        "Migrated legacy queue system to Redis, reducing data loss from 20% to 2-3% and improving transfer reliability. Developed error detection system with Redis integration.",
        "Optimized transfer times by 20%, implemented monitoring tools to track performance and enhance user satisfaction.",
        "Designed and implemented Coze API-based chatbot for software sales and support, reducing support staff from 20 to 4.",
        "Created logging server to track errors and real-time notifications, utilizing CronJobs to automatically generate error reports."
      ]
    },
    {
      company: "An Phu Gia",
      location: "Binh Thanh District, HCM city, Viet Nam",
      role: "Backend Engineer",
      duration: "Nov 2021 – Nov 2023",
      techstack: [
        "Node.js (Express, Socket.IO)", 
        "MongoDB", 
        "Redis", 
        "RabbitMQ", 
        "MySQL", 
        "Postgres", 
        "GraphQL", 
        "Jest", 
        "CI/CD", 
        "S3", 
        "PM2", 
        "Schedule", 
        "Docker", 
        "Microservices"
      ],
      responsibilities: [
        "Designed and implemented a notification system and newsfeed for ERP system, replacing outdated module.",
        "Migrated data from Discord chat system to custom-built chat system, improving real-time communication by 40%.",
        "Optimized business reporting system using RabbitMQ, reducing report generation time from 3 minutes to under 50 seconds.",
        "Developed core module for real-time updates on product discounts, integrated with RabbitMQ for seamless operation."
      ]
    },
    {
      company: "Robert Bosch Engineering & Business Solutions Vietnam",
      location: "Tan Binh District, HCM city, Viet Nam",
      role: "Software Engineer Intern",
      duration: "Jan 2021 – Jun 2021",
      responsibilities: [
        "Researched and developed web services, coding conventions, style guides, and design patterns for backend systems.",
        "Collaborated with team leader to design database schema and implement backend services, including comment, newsfeed, and notification systems."
      ]
    }
  ];
  
  return (
    <section className="experience"    >
      <h2 className='headLine'> <span className='red-color'>History work</span>  <span></span>Timeline</h2>
      <div className='wrap-line'></div>
      <div className='experience-content'>
        {experiences.map((ex) => {
          return (<div key={ex.company} className='experience-item'> {/* Using a unique key for each experience */}
            <h4>{ex.company}</h4>
            <p>{ex.location}</p>
            <p><strong>Role:</strong> {ex.role}</p>
            <p><strong>Duration:</strong> {ex.duration}</p>
            <p><strong>Techstack:</strong></p>
            <p>
              {ex.techstack?.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </p>
            
            <p><strong>Responsibilities:</strong></p>
            <ul>
              {ex.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        );
    })}
      </div>
    </section>
  );
};

export default Experience;


const year = ()=> {
  return (
    <div className='year'>
      
  </div>
)
}

const experience = () => {
  return (
    <div className='experience-item'>

    </div>
  )
}

const dot = () => {
  return <div className='dot'>
    
  </div>
}