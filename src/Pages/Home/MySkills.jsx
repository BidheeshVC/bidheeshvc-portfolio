import React from "react";

export default function MySkills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React.js", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "HTML5/CSS3", level: "Advanced" },
        { name: "Tailwind CSS", level: "Intermediate" },
        { name: "Bootstrap", level: "Advanced" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "RESTful APIs", level: "Advanced" },
        { name: "SQL", level: "Intermediate" }
      ]
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git/GitHub", level: "Advanced" },
        { name: "VS Code", level: "Advanced" },
        { name: "Postman", level: "Intermediate" },
        { name: "npm/yarn", level: "Advanced" },
        { name: "Webpack", level: "Intermediate" }
      ]
    }
  ];

  return (
    <section className="skills-section" id="mySkills">
      <div className="skills-container">
        <div className="skills-header">
          <p className="skills-subtitle">My Skills</p>
          <h2 className="skills-heading">Technical Expertise</h2>
        </div>
        
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div key={index} className="skills-card">
              <h3 className="skills-card-title">{category.category}</h3>
              <div className="skills-list">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <span className={`skill-level ${skill.level.toLowerCase()}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}