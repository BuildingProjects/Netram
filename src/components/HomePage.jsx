import React from "react";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import About from "./About ";

function HomePage() {
  return (
    <>
      <HeroSection />
      <div id='about'>
        <About />
      </div>
      <div id='feature'>
        <FeatureSection />
      </div>
    </>
  );
}

export default HomePage;
