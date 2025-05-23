import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";
import BackToTop from "../components/BackToTop";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECT" text="Some of my most recent works" />
      <Work />
      {/* <PricingCard /> */}
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Projects;
