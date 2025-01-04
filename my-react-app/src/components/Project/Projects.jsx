import React , {  useRef } from 'react';
import './Projects.css';
import useVisibility from '../custom_hook/useVisibility';
import scape_project  from '../../asset/media_scpae_project.png'
const Projects = () => {
  const projects = [ {
    name : 'ScaperURL',
    detail: 'Scaple image,video from any website with Puppeteer',
    image: scape_project,
    url : 'https://lekehien-mediascraper.onrender.com/',
    informaion: "Login usermame: 'admin' password :'password'",
    skills: [
      "Express",
      "Redux",
      "React",
      "Postgres" , "Puppeteer" ,"Sequelize" ,]
  }];

  const currentRef = useRef(null);
  useVisibility(currentRef, 'projects');

  return (
    <section id="projects" className='projects-section' ref={currentRef}>
      <h3>Personal project</h3>
      <ul className="project-list">
        {projects.map((project, index) => (
          <li key={index} className="project-card">
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.detail}</p>
            <div className='skill-tabs'>{project.skills.map((skill, index) => {
              return (
                <div key={index} className="skill-tab">
                  {skill}
                </div>)
            })
            }</div>

            <p>{project.informaion}</p>
            <div className="project-links" onClick={() => window.open(project.url, '_blank')}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              View Project
              </a>
              </div>
            
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
