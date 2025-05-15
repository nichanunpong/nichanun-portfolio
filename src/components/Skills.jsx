import React, { useState } from "react";
import "./SkillsStyle.css";
import { tabs, skills } from "./SkillsData";

const Skills = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="technical-skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          My expertise across various technologies and tools
        </p>

        <div className="tabs-container">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-button${activeTab === tab ? " active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="skills">
          {skills[activeTab].map((name) => (
            <div key={name} className="skill-card">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
