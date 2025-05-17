import React from "react";
import "./FooterStyle.css";
import { Link } from "react-router-dom";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiExternalLink,
} from "react-icons/fi";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <h4>Quick Links</h4>
          <p>About Me</p>
          <p>Projects</p>
          <p>
            Resume &nbsp;
            <a href="/Nichanun_Pongpattarawit_Resume.pdf" target="_blank">
              <FiExternalLink
                size={15}
                style={{
                  color: "#fff",
                  marginRight: "1rem",
                  marginBottom: "-0.1rem",
                }}
              />
            </a>
          </p>
        </div>
        <div className="right">
          <h4>Connect</h4>
          <div className="social-container">
            <Link
              to="https://github.com/nichanunpong"
              className="social-link"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
            </Link>
            <Link
              to="https://www.linkedin.com/in/nichanun-pong/"
              className="social-link"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />
            </Link>
            <Link
              to="mailto:nichanun.luck@gmail.com"
              className="social-link"
              aria-label="Email"
              target="_blank"
            >
              <FiMail />
            </Link>
            <Link
              to="tel:+16726991228"
              className="social-link"
              aria-label="Phone"
            >
              <FiPhone />
            </Link>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <footer className="footer-bottom">
        <div className="footer-bottom left">
          © 2025 Nichanun Pongpattarawit. All rights reserved.
        </div>
        <div className="footer-bottom right"></div>
      </footer>
    </div>
  );
};

export default Footer;
