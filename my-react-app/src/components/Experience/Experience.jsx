import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Innorix',
      duration: 'Dec 2023 – Oct 2024',
      description: [
        'Migrated file transfer system to a cloud-based platform (AWS, Azure, Google Cloud).',
        'Reduced data loss incidents from 20% to 2-3% by migrating to Redis queues.',
        'Designed a chatbot using Coze API, reducing support staff from 20 to 4.',
        'Implemented real-time logging server with CronJobs.',
      ],
    },
    {
      company: 'An Phu Gia',
      duration: 'Nov 2021 – Nov 2023',
      description: [
        'Developed notification and newsfeed system for an ERP.',
        'Migrated data from Discord to a custom-built chat system, improving performance by 40%.',
        'Optimized business reporting system, reducing report generation time to under 50 seconds.',
      ],
    },
    {
      company: 'Robert Bosch Vietnam',
      duration: 'Jan 2021 – Jun 2021',
      description: [
        'Collaborated on database schema design and backend implementation.',
        'Developed comment, newsfeed, and notification services.',
      ],
    },
  ];

  return (
    <section id="experience"  className='slideIn'  >
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience">
          <h3>{exp.company}</h3>
          <p><strong>{exp.duration}</strong></p>
          <ul>
            {exp.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
