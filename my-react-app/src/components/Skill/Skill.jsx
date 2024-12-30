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
          <div className="skills">
            {skillArray.map((skill) => (
                <img
                  src={`https://skillicons.dev/icons?i=${skill.toLowerCase()}`}
                  alt={skill}
                  style={{ width: "40px", height: "40px" }}
                />
            ))}
          </div>
        </div>
      ))}
		</div>
	);
};

export default Skill;
