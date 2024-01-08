import React from "react";

import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="herosection-container">
      <div className="herosection-background">
        <video className="background-video" autoPlay muted loop>
          <source
            src="https://video.wixstatic.com/video/9c6671_5fe77d56c59b4643af0145e2c6e50c89/1080p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="hero-card-container">
        <div className="hero-card">
          <h1 className="hero-card-title">Dunagiri Retreat</h1>
          <p className="hero-card-description">
            Experience serenity and divinity steps away from Mahavatar Babaji's
            Cave in the Himalayas.
          </p>
          <button className="hero-card-btn">INQUIRE NOW</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

