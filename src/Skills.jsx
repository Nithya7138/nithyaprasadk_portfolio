import React from "react";

function Skills() {
  const skills = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/javascript.svg", color: "#f7df1e" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/react.svg", color: "#61dafb" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/html5.svg", color: "#e34f26" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/css3.svg", color: "#1572b6" },
    { name: "Bootstrap 5", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/bootstrap.svg", color: "#7952b3" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/java.svg", color: "#007396" },
    { name: "JDBC", icon: null, color: "#006666", customIcon: (
      <svg width="2.2em" height="2.2em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="24" cy="24" rx="20" ry="12" fill="#006666" />
        <text x="24" y="29" textAnchor="middle" fontSize="13" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">JDBC</text>
      </svg>
    ) },
    { name: "Servlet", icon: null, color: "#ff9800", customIcon: (
      <svg width="2.2em" height="2.2em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="36" height="28" rx="8" fill="#ff9800" />
        <text x="24" y="32" textAnchor="middle" fontSize="13" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">Servlet</text>
      </svg>
    ) },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mysql.svg", color: "#00758f" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/git.svg", color: "#f05032" },
    { name: "Electrical", icon: null, color: "#ffeb3b", customIcon: (
      <svg width="2.2em" height="2.2em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="#ffeb3b" stroke="#fbc02d" strokeWidth="3" />
        <polygon points="24,12 28,24 22,24 26,36 18,24 24,24" fill="#fbc02d" />
      </svg>
    ) },
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">Skillset</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <span className="skill-icon" style={{ background: skill.color }}>
              {skill.icon ? (
                <img src={skill.icon} alt={skill.name} />
              ) : (
                skill.customIcon
              )}
            </span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
