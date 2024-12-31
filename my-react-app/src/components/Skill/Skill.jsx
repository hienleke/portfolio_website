import React from "react";
import "./Skill.css";
const Skill = () => {
  const skills =
  {
    programming_languages: [
      "Java", "TypeScript", "JavaScript", "HTML" ,"CSS"
    ],
    frameworks: [
      "Express", "React", "Nextjs", "Redux", "Jquery", "Sequelize" , "Prisma" , "Jest" , 
    ],
    tools: [
      "Nginx", "Npm",
      "Git", "BitBucket", "GitHub", "Docker", "Kubernetes", "Gitlab", "GraphQL", "RabbitMQ"
    ],
    cloud : ["AWS", "Azure", "GCP" , "AWS S3"],
    databases: [
      "MySQL", "MongoDB", "PostgreSQL", "Redis", "SQLite" , "Firebase"
    ],
    systems: [
      "Linux", "Windows" ,"Debian" , "Ubuntu"
    ],
    other: [
       "Postman", "Notion" ,"Figma" , "Vscode"
    ]
  };

	return (
    <div className="skill-section bounds">
      <h2 className="section-title">Skills</h2>
  {Object.entries(skills).map(([category, skillArray]) => (
    <div key={category} className="skill-category">
      <div className="skills">
        {skillArray.map((skill) => (
          <div key={skill} className="skill-item" style={{ display: "flex" ,  background : '#3f8ae0', alignItems: "center", gap: "10px" , boxShadow : ' 0px 0px 0px 1px rgba(0, 0, 0, .05);'}}>
           
            <img
              src={`https://skillicons.dev/icons?i=${skill.toLowerCase()}`}
              alt={skill}
              style={{ width: "40px", height: "40px" }}
            />
             <p style={{padding: '0.3rem 0.7rem', }}>{skill.toLowerCase()}</p>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

	);
};

export default Skill;
