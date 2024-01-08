import React from "react";
import "./ChooseUs.css";

const ChooseUs = () => {
  return (
    <div className="chooseus-container">
      <div className="chooseus-title-container">
        <h1 className="chooseus-title">Why Choose Us</h1>
      </div>

      <div className="chooseus-card-container">
        <div className="chooseus-card">
          <img
            className="chooseus-card-img-1"
            src="https://static.wixstatic.com/media/9c6671_f5cbab3b21a240bfa896655c281f7938~mv2.jpeg/v1/fill/w_1798,h_724,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c6671_f5cbab3b21a240bfa896655c281f7938~mv2.jpeg"
            alt=""
          />

          <div className="chooseus-card-feature">
            <h1 className="chooseus-card-feature-title">1. Elevated Living</h1>
            <p className="chooseus-card-feature-description">
              A "playground of well-being" nestled in the heart of the
              Himalayas, Dunagiri Retreat is devoted entirely to wellbeing. The
              campus offers a vast array of accommodations, yoga halls,
              meditation rooms, and experiences, such as hikes, yoga, sound
              healing, wilderness exploration, and more.
            </p>
            <p className="chooseus-card-feature-footer">Read More</p>
          </div>
        </div>

        <div className="chooseus-card-2">
          <div className="chooseus-card-feature-2">
            <h1 className="chooseus-card-feature-title">2. Yoga & Meditation Near Babaji's Cave</h1>
            <p className="chooseus-card-feature-description">
            Retreat leaders and participants get access to our main Yoga Hall, which can host up to 40 people, our Pyramid Meditation Hall, a capacity of 20 people, and Babaji Temple, a capacity of 20 people.
            </p>
            <p className="chooseus-card-feature-footer">Read More</p>
          </div>

          <img
            className="chooseus-card-img-2"
            src="https://static.wixstatic.com/media/9c6671_494b2f709514485b8004b95fb66652ed~mv2.jpg/v1/fill/w_1798,h_724,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c6671_494b2f709514485b8004b95fb66652ed~mv2.jpg"
            alt=""
          />
        </div>

        <div className="chooseus-card">
          <img
            className="chooseus-card-img-1"
            src="https://static.wixstatic.com/media/9c6671_8e2794c148c149879d1ae7c411f4c54e.jpg/v1/fill/w_1798,h_724,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c6671_8e2794c148c149879d1ae7c411f4c54e.jpg"
            alt=""
          />
          <div className="chooseus-card-feature">
            <h1 className="chooseus-card-feature-title">
              3. Farm-Fresh Ayurvedic Meals
            </h1>
            <p className="chooseus-card-feature-description">
              Nourish your body with clean, locally sourced vegan meals
              developed by our local Chef. Our light and savory meals are
              included (at no extra charge) with each stay and are specially
              designed using Ayurvedic principles to support the multi-step
              detoxification process so you can leave feeling better than ever.
            </p>
            <p className="chooseus-card-feature-footer">Read More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;

