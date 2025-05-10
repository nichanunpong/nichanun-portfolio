import React, { useRef } from "react";
import "./FormStyle.css";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_a6f44ej", "template_k93c96c", form.current, {
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
    <div className="form">
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
  );
};

export default Form;
