import React from "react";

function Experience() {
  const experiences = [
    {
      company: "Uniq Botze Info Tech",
      duration: "Sep 2025 - Present",
      role: "Junior Software Engineer",
      color: "#8e44ad",
      description: "Working as a Junior Software Engineer, contributing to software development projects, collaborating with cross-functional teams, and enhancing technical skills in a dynamic environment."
    },

    {
      company: "Freelance",
      duration: "Ongoing",
      role: "Electrical & Security Systems Technician (Network-related)",
      color: "#4caf50",
      description: "Delivering freelance services in electrical, security, and network infrastructure. Passionate about smart home tech, IoT, and helping clients with custom solutions."
    },

    {
      company: "Condia",
      duration: "6 months",
      role: "Electrical Technician",
      color: "#00bcd4",
      description: "Specialized in security and surveillance system wiring, access control, and smart automation. Collaborated with IT teams for integrated solutions."
    },
    
    {
      company: "MAK Controls & Systems",
      duration: "1.5 years",
      role: "Electrical Technician",
      color: "#ffb300",
      description: "Gained hands-on experience in electrical systems, troubleshooting, and preventive maintenance. Led small teams for installation projects and contributed to safety improvements."
    }
  ];

  return (
    <section className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-item" style={{ animationDelay: `${idx * 0.2 + 0.2}s` }}>
            <h3 className="experience-company">{exp.company}</h3>
            <p className="experience-role">{exp.role} <span className="experience-duration">({exp.duration})</span></p>
            <p className="experience-desc">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
