import React from "react";
import "./FounderIntro.css";

const FounderIntro = () => {
  return (
    <div className="founderintro-container">
      <div className="founderintro-card">
        <div className="founderintro-card-left-container">
          <h1 className="founderintro-card-left-title">
            Meet Our Founder Piyush Kumar
          </h1>
          <p className="founderintro-card-left-description">
            Guided by the philosophy that love transcends monetary value, Piyush
            Kumar, a former World Bank professional, established Dunagiri
            Retreat in 2005. His vision was to create a retreat that harmonizes
            with nature and nurtures the local community, fostering a unique
            synergy between guests and villagers under the retreat's guiding
            principles.
          </p>
          <div className="social-app-logo">
            <img className="social-app" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6qCnUXb7BctXIoEgr1QkcE2iWq9XN1qsHEQ&usqp=CAU" alt="" />
            <img className="social-app" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXymD1N8AWo5pq35KfYdmWsFDlN-5uZJsg1g&usqp=CAU" alt="" />
            <img className="social-app" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ47LzJxNPwTX3dIdKomuh7ptOPtXGSP5rLg&usqp=CAU" alt="" />
          </div>
          <button className="aboutus-btn">ABOUT US</button>
        </div>
        <div className="founderintro-card-right-container">
          <img className="founderintro-card-right-img" src="https://static.wixstatic.com/media/9c6671_38312d206be444a8ba09d885b67a3d89~mv2.jpeg/v1/fill/w_273,h_542,al_c,lg_1,q_80,enc_auto/9c6671_38312d206be444a8ba09d885b67a3d89~mv2.jpeg" alt="Founderimage" />
        </div>
      </div>
    </div>
  );
};

export default FounderIntro;
