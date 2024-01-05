import React from "react";
import "./StatisticsSection.css";

const StatisticsSection = () => {
  return (
    <div className="statisticssection-container">
      <p className="statisticssection-intro">
        OUR NUMBERS SPEAK FOR THEMSELVES
      </p>
      <h1 className="statisticssection-title">
        Guests Experience Lasting Benefits
      </h1>

      <div className="stastics-details-container">
        <div className="stastics-details">
          <h1 className="stastics-details-title">30%</h1>
          <p className="stastics-details-description">
            Decrease in anxiety while staying at Dunagiri Retreat.
          </p>
        </div>
        <div className="stastics-details">
          <h1 className="stastics-details-title">26%</h1>
          <p className="stastics-details-description">
          Improvement in sleep during and post visit.
          </p>
        </div>
        <div className="stastics-details">
          <h1 className="stastics-details-title">16%</h1>
          <p className="stastics-details-description">
          Improvement in self-compassion after a 5-night stay.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
