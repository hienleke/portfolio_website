import React from 'react';
import './Skill.css';
const Skill = () => {
  const skills = [
    {
      name: 'File Transfer System Migration',
      description: 'Migrated to a web platform with cloud integration (AWS, Azure, Google Storage).',
      link: 'https://innorix.com/en/exacoola/product/7',
    },
    {
      name: 'ERP Notification System',
      description: 'Developed a robust notification system for an ERP.',
      link: '#',
    },
    {
      name: 'Chatbot for Support',
      description: 'Designed a Coze API-based chatbot for software sales and support.',
      link: '#',
    },
  ];

  return (
    <section className='skill-section' id="projects">
      <h2>Skill</h2>
        {skills.map((project, index) => (
          <div className='skill-card' key={index}>
            <h3>{project.name}</h3>
          </div>
        ))}
    </section>
  );
};

export default Skill;
