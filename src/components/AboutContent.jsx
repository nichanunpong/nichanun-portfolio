import { Link } from "react-router-dom";
import "./AboutContentStyle.css";
import react1 from "../assets/IMG_1951.jpg";
import react2 from "../assets/IMG_1950.jpg";
import { GoDotFill } from "react-icons/go";
import { PiCertificateFill } from "react-icons/pi";
import Education from "./Education";
import Certification from "./Certification";
import AboutSkills from "./AboutSkills";
import ProfileImage from "./ProfileImage";

const AboutContent = () => {
  return (
    <section className="about">
      <div className="left">
        <Intro />
        <Education />
        <Certification />
      </div>
      <div className="right">
        <ProfileImage src={react2} alt="working" />
        <AboutSkills />
      </div>
    </section>
  );
};

function Intro() {
  return (
    <article className="info">
      <h1>Who Am I?</h1>
      <div className="info-detail">
        I’m Nichanun Pongpattarawit (call me Luck). I’ve had a lifelong passion
        for technology—my childhood love of gaming led me to become a software
        developer specializing in JavaScript, React, and MongoDB. I’m currently
        pursuing a Post-Degree Diploma in Data Analytics at Douglas College in
        Vancouver.
      </div>
    </article>
  );
}

export default AboutContent;
