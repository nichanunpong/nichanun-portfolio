import React from "react";
import { education } from "../data/educationData";

import { FaUserGraduate } from "react-icons/fa";
export default function Education() {
  return (
    <section className="edication">
      <h2>
        <FaUserGraduate
          size={20}
          style={{
            color: "#fff",
            marginRight: "1rem",
            marginBottom: "-0.1rem",
          }}
        />
        Education
      </h2>
      {education.map((edu, idx) => (
        <div key={idx} className="education-card">
          <h3>{edu.title}</h3>
          <span>{edu.school}</span>
          <div className="education-detail">
            <div>{edu.location}</div>
            <div>{edu.period}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
