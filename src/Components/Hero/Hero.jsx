import React from "react";
import "./Hero.css";
import hero_image from "../assets/wo1.png"; 


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <h1>New Collections</h1>
        <h1>For Everyone</h1>

        <button className="hero-btn">
          Latest Collection →
        </button>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;