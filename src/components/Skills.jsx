import React, { useState } from "react";
import "./SkillsStyle.css";
import { tabs, skills } from "../data/skillsData";
const Skills = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="technical-skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          My expertise across various technologies and tools
          <img src="" />
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
          {skills[activeTab].map(({ name, Icon }) => (
            <div key={name} className="skill-card">
              {Icon ? <img src={Icon} alt="" className="icon" /> : ""}

              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
