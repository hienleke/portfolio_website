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
      <h2 className="section-title">Skills</h2>
  {Object.entries(skills).map(([category, skillArray]) => (
    <div key={category} className="skill-category">
      <div className="skills">
        {skillArray.map((skill) => (
          <div key={skill} className="skill-item" style={{ display: "flex" ,  alignItems: "center", gap: "10px" }}>
           
            <img
              src={`https://skillicons.dev/icons?i=${skill.toLowerCase()}`}
              alt={skill}
              style={{ width: "40px", height: "40px" }}
            />
             <p style={{ color: "white" }}>{skill.toLowerCase()}</p>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

	);
};

export default Skill;
