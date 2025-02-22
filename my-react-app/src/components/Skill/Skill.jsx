import React, { useRef, useState, useEffect } from "react";
import "./Skill.css";
import useVisibility from "../custom_hook/useVisibility";
//import useScrollAnimation from "../custom_hook/useScrollAnimation";
const Skill = () => {
  let  currentRef = useRef(null);
  useVisibility(currentRef, 'Skill');

    const [visibleItems, setVisibleItems] = useState(new Set());
    const itemsRef = useRef([])

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
    cloud : ["AWS", "Azure", "GCP"],
    databases: [
      "MySQL", "MongoDB", "PostgreSQL", "Redis", "SQLite" , "Firebase"
    ],
    systems: [
      "Linux", "Windows", "Ubuntu"
    ],
    other: [
       "Postman", "Notion" ,"Figma" , "Vscode"
    ]
  };

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1 }
      );
    
      const items = document.querySelectorAll(".skill-item");
      items.forEach((item) => observer.observe(item));
    
      return () => {
        items.forEach((item) => observer.unobserve(item));
      };
      }, [visibleItems]);

	return (
    <div id="skill" className="skill-section " ref={currentRef}>
      <h2 className="section-title">Skills</h2>
  {Object.entries(skills).map(([category, skillArray]) => (
    <div key={category} className="skill-category">
      <div className="skills">
        {skillArray.map((skill , index) => (
          <div key={skill}  ref={(el) => (itemsRef.current[index] = el)}  className="skill-item" style={{ display: "flex" ,  background : '#3f8ae0', alignItems: "center", gap: "10px" , boxShadow : ' 0px 0px 0px 1px rgba(0, 0, 0, .05);'}}>
           
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
