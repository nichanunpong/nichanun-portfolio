import React from 'react';
import './SkillsStyle.css';
import { tabs, skills } from '../data/skillsData';

const AboutSkills = () => {
  return (
    <section className='skills-list'>
      {tabs.map((tab) => (
        <div key={tab} className='skills-category'>
          <h3 className='category-title'>{tab}</h3>

          {/* Grid of skill cards for this category */}
          <div className='skills-grid'>
            {skills[tab].map(({ name }) => (
              <div key={name} className='skill-card detail'>
                {name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutSkills;
