import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Form from "../components/Form";
import BackToTop from "../components/BackToTop";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="Get In Touch"
        text="Have a project in mind or want to collaborate? I'd love to hear from you!"
      />
      <Form />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Contact;
