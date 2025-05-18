import React, { useRef } from "react";
import "./FormStyle.css";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_a6f44ejs", "template_k93c96c", form.current, {
        publicKey: "aSjYVaok8Qj202D_D",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("email sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="contact-container">
      <div className="contact-form-card">
        <h3>Send me a message</h3>
        <p>
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
        <br />
        <form action="" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="text" name="email" />
          <label>Subject</label>
          <input type="text" name="subject" />
          <label>Message</label>
          <textarea
            rows="6"
            placeholder="Type your message here"
            name="message"
          />
          <button className="btn">Submit</button>
        </form>
      </div>
      <div className="contact-links-card">
        <h3>Connect with me</h3>
        <p>
          You can also reach out to me directly through these channelsFill out
          the form below and I'll get back to you as soon as possible.
        </p>
        <Link
          to="https://github.com/nichanunpong"
          className="card"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub className="icon" />
          https://github.com/nichanunpong
        </Link>
        <Link
          to="https://www.linkedin.com/in/nichanun-pong"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <FiLinkedin className="icon" />
          https://www.linkedin.com/in/nichanun-pong
        </Link>
        <Link
          to="mailto:nichanun.luck@gmail.com"
          aria-label="Email"
          target="_blank"
          className="card"
        >
          <FiMail className="icon" />
          nichanun.luck@gmail.com
        </Link>
        <Link className="card" to="tel:+16726991228" aria-label="Phone">
          <FiPhone className="icon" />
          +16726991228
        </Link>
        <h4>Current Location</h4>
        <p>Vancouver, Canada</p>
      </div>
    </div>
  );
};

export default Form;
