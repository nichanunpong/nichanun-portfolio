import "./HeroImgStyles.css";
import introImg from "../assets/flat-lay-workstation-with-copy-space-laptop.jpg";
import React from "react";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={introImg} className="into-img" alt="IntroImg" />{" "}
      </div>
      <div className="content">
        <p>Hi, I'M Nicha</p>
        <h1>React Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            PROJECTS
          </Link>
          <Link to="/contact" className="btn bth-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
