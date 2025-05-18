import React from "react";
import "./WorkCardStyle.css";
import { NavLink } from "react-router-dom";
import { FiExternalLink, FiGithub } from "react-icons/fi";
const WorkCard = ({ imgsrc, title, text, techno, view, source }) => {
  return (
    <div className="project-card">
      <img src={imgsrc} alt="image" />
      <h2 className="project-title">{title}</h2>
      <div className="pro-details">
        <p>{text}</p>
        <div className="techno">
          {techno.map((val) => {
            return <div className="techno-list">{val}</div>;
          })}
        </div>
        <div className="pro-btns">
          <NavLink to={view} className="btn" target="_bank">
            View &nbsp;
            <FiExternalLink
              size={15}
              style={{
                marginBottom: "-0.1rem",
              }}
            />
          </NavLink>
          <NavLink
            to={source}
            className="btn"
            target="_blank"
            aria-label="GitHub"
          >
            Source&nbsp;
            <FiGithub
              size={15}
              style={{
                marginBottom: "-0.1rem",
              }}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
