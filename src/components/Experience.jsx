import React from "react";
import "./ExperienceStyle.css";
import ExperienceData from "./ExperienceData";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="experience-container">
      <h1 className="experience-heading">Work Experience</h1>
      <div className="experience">
        {ExperienceData.map((e, i) => (
          <ExperienceCard key={i} event={e} isLeft={i % 2 === 0} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
