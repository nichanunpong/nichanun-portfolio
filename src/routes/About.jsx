import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";
import BackToTop from "../components/BackToTop";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="ABOUT"
        text="Get to know more about my background and skills"
      />
      <AboutContent />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default About;
