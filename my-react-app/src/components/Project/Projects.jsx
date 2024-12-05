import React from 'react';

const Projects = () => {
  const projects = [
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
    <section id="projects" className='slideIn'>
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
