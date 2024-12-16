import React from 'react';

const Projects = () => {
  const projects = [ ];

  return (
    <section id="projects" className='slideIn'>
      <h2>History Timeline</h2>
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
