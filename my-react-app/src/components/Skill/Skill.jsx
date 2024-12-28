import React from "react";
import "./Skill.css";
const Skill = () => {
  const skills =
  {
    programming_languages: [
      "Java", "TypeScript", "JavaScript", "HTML" ,"CSS"
    ],
    frameworks: [
      "Express", "React", "Nextjs", "Redux", "Jquery", "Sequelize"
    ],
    tools: [
      "Git", "BitBucket", "GitHub", "Docker", "Jest", "GraphQL", "RabbitMQ"
    ],
    cloud : ["AWS", "Azure", "GCP"],
    databases: [
      "MySQL", "MongoDB", "PostgreSQL", "Redis", "SQLite"
    ],
    systems: [
      "Linux", "Windows"
    ],
    other: [
      "Nginx", "Postman", "Notion"
    ]
  };

	return (
		<div className="skill-section">
      {Object.entries(skills).map(([category, skillArray]) => (
        <div key={category} className="skill-category">
          <div className="skills" style={{animation: 'scroll_animate  10s  linear  infinite' , animationDelay : `${Math.random() * 6 - 3}s`}}>
            {skillArray.map((skill) => (
              <div key={skill} className="skill-item">
                <img
                  src={`https://skillicons.dev/icons?i=${skill.toLowerCase()}`}
                  alt={skill}
                  style={{ width: "50px", height: "50px" }}
                />
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
		</div>
	);
};

export default Skill;
