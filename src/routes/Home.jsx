import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import Projects from "../components/Work";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import BackToTop from "../components/BackToTop";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Skills />
      <Experience />
      <Projects />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Home;
