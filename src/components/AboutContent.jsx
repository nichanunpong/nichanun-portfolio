import { Link } from "react-router-dom";
import "./AboutContentStyle.css";
import react1 from "../assets/IMG_1951.jpg";
import react2 from "../assets/IMG_1950.jpg";
import { GoDotFill } from "react-icons/go";
import { FaUserGraduate } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { SiHyperskill } from "react-icons/si";
import { tabs, skills } from "./SkillsData";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <div className="info">
          <h1>Who Am I? </h1>
          <div className="info-detail">
            I ’m Nichanun Pongpattarawit. you can call me Luck. I’ve had a
            lifelong passion for technology. my childhood love of gaming led me
            to become a software developer specializing in JavaScript, React,
            and MongoDB, where I build user-friendly web applications. I’m now
            pursuing a Post-Degree Diploma in Data Analytics at Douglas College
            in Vancouver.
          </div>
        </div>
        <div className="edication">
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
          <div className="edication-card">
            <h3>Post-degree Diploma of Data Analytics </h3>
            <span>Douglas College</span>
            <div className="education-detail">
              <div>Vancouver, Canada</div>
              <div>2024 - Preset </div>
            </div>
          </div>

          <div className="edication-card">
            <h3>Master of Management, Entrepreneurship, and Innovation </h3>
            <span>Mahidol University</span>
            <div className="education-detail">
              <div>Bangkok, Thailand</div>
              <div>2021 – 2022 | GPA 3.62</div>
            </div>
          </div>

          <div className="edication-card">
            <h3>Bachelor of Science, Information Technology </h3>
            <span>Dhurakij Pundit University</span>
            <div className="education-detail">
              <div>Bangkok, Thailand</div>
              <div>2011 – 2012 | GPA 3.07</div>
            </div>
          </div>
        </div>
        <div className="certificate">
          <h2>
            <PiCertificateFill
              size={20}
              style={{
                color: "#fff",
                marginRight: "1rem",
                marginBottom: "-0.1rem",
              }}
            />
            Certification & Tranining
          </h2>
          <div className="certification-tab">
            <div className="certificate-card">
              <div>
                <GoDotFill
                  size={15}
                  style={{
                    color: "#fff",
                    marginRight: "1rem",
                    marginBottom: "-0.1rem",
                  }}
                />
                AppsFlyer Masterclass Certified
              </div>
              <div>Aug 2023</div>
            </div>
            <div className="certificate-card">
              <div>
                <GoDotFill
                  size={15}
                  style={{
                    color: "#fff",
                    marginRight: "1rem",
                    marginBottom: "-0.1rem",
                  }}
                />
                Google UX Design
              </div>
              <div>Mar 2023</div>
            </div>
            <div className="certificate-card">
              <div>
                <GoDotFill
                  size={15}
                  style={{
                    color: "#fff",
                    marginRight: "1rem",
                    marginBottom: "-0.1rem",
                  }}
                />
                AWS Certified Developer – Associate
              </div>
              <div>Dec 2017</div>
            </div>
          </div>
          {/* <Link to="/contact">
          <button className="btn">Contact</button>
        </Link> */}
        </div>
      </div>
      <div className="right">
        <div className="img-container">
          {/* <div className="img-stack top">
            <img src={react1} alt="true" className="img" />
          </div> */}
          <div className="img-stack bottom">
            <img src={react2} alt="true" className="img" />
          </div>
        </div>
        <div className="info">
          <h2>
            <SiHyperskill
              size={15}
              style={{
                color: "#fff",
                marginRight: "1rem",
              }}
            />
            Skills
          </h2>
          <div className="skills-list">
            {tabs.map((tab) => (
              <div key={tab} className="skills-category">
                <h3 className="category-title">{tab}</h3>

                {/* Grid of skill cards for this category */}
                <div className="skills-grid">
                  {skills[tab].map((name) => (
                    <div key={name} className="skill-card detail">
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="skills"> */}
      </div>
    </div>
  );
};

export default AboutContent;
