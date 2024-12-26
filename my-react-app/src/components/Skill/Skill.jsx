import React from 'react';
import './Skill.css';
const Skill = () => {
  const skills = [
    { skill: 'Java', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/brands/java.svg' },
    { skill: 'TypeScript', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/brands/js-square.svg' },
    { skill: 'JavaScript', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/brands/js.svg' },
    { skill: 'NodeJS', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/brands/node-js.svg' },
    { skill: 'Express', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/solid/server.svg' },
    { skill: 'Socket.IO', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/solid/plug.svg' },
    { skill: 'Sails', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/solid/anchor.svg' },
    { skill: 'WebSocket', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/solid/plug.svg' },
    { skill: 'RabbitMQ', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/solid/rabbit.svg' },
    { skill: 'Redis', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/solid/database.svg' },
    { skill: 'Docker', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/brands/docker.svg' },
    { skill: 'Sequelize', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/solid/database.svg' },
    { skill: 'Jest', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/solid/vial.svg' },
    { skill: 'MongoDB', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/solid/database.svg' },
    { skill: 'MySQL', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/solid/database.svg' },
    { skill: 'Git', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/brands/git.svg' },
    { skill: 'BitBucket', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/brands/bitbucket.svg' },
    { skill: 'SVN', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/solid/code-branch.svg' },
    { skill: 'GitHub Actions', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/brands/github.svg' },
    { skill: 'AWS (RDS, EC2, Lambda, S3)', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/brands/cloud.svg' },
    { skill: 'Azure (Blob Storage)', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/brands/cloud.svg' },
    { skill: 'Google Cloud (Google Storage)', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/brands/cloud.svg' },
    { skill: 'CronJob', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/solid/clock.svg' },
    { skill: 'PM2', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/solid/cogs.svg' },
    { skill: 'Schedule', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/solid/calendar-alt.svg' },
    { skill: 'GraphQL', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/solid/cogs.svg' },
    { skill: 'Microservices', icon: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/solid/cogs.svg' }
  ];
  

  return (<div className='skill-section'>
    {skills.map((skill) => (
        <div  style={{ margin: '10px', textAlign: 'center' }}>
        <img
          src={skill.icon}
          alt={skill.skill}
          style={{ width: '50px', height: '50px' }}
        />
        <p>{skill.skill}</p>
      </div>
    ))}

  </div>

  )
};

export default Skill;
