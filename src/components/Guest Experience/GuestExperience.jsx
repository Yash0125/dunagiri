import React, { useEffect, useState } from "react";
import "./GuestExperience.css";

const GuestExperience = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const items = [
    {
      image:
        "https://static.wixstatic.com/media/9c6671_4588634ebfff4608a7d721bfb22a70fa~mv2.jpg/v1/crop/x_1572,y_0,w_2855,h_4000/fill/w_788,h_1104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/DSC_0343_JPG.jpg",
      description: `"“Everything contributed to the full success of our Qi Gong retreat: the location, the superb rooms, the billions of flowers, the delicious food and all the staff.""`,
      author: "Pragata, Portugal",
    },
    {
      image:
        "https://static.wixstatic.com/media/9c6671_3e07df29286c4f3b897ab0f1383cc63f~mv2.jpg/v1/crop/x_1572,y_0,w_2855,h_4000/fill/w_788,h_1104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/DSC_0398_JPG.jpg",
      description: `“"They say when the gods want to meet they do so in the Himalayas. And I've experienced that...”`,
      author: "Miriam, Netherlands",
    },
    {
      image:
        "https://static.wixstatic.com/media/9c6671_7f45a7afd42f49128374d5555fca84f3~mv2.jpg/v1/crop/x_72,y_0,w_2855,h_4000/fill/w_788,h_1104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/20230510_174347.jpg",
      description: `
      “I traveled to the Himalayas where I can be absorbed in spiritual life...A natural rhythm evolved as relaxation and rejuvenation transpired.”`,
      author: "Mokshananda, USA",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);
  return (
    <div className="guestexperience-container">
      <h1 className="guestexperience-title">Guest Experiences</h1>
      <div className="guestexperience-card-container">
        <div className="guestexperience-card">
          {items.map(
            (item, index) =>
              activeIndex === index && (
                <>
                  <div key={index} className="guestexperience-image-container">
                    <img
                      className="guestexperience-image-1"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="guestexperience-review-card">
                    <p className="guestexperience-review-description">
                      {item.description}
                    </p>

                    <div className="guestexperience-review-dash"></div>
                    <p className="guestexperience-review-author">
                      {item.author}
                    </p>
                  </div>
                </>
              )
          )}
          <div className="Carousel-indicators-card">
            {items.map((_, index) => (
              <div
                key={index}
                className={`Carousel-indicator-card ${
                  activeIndex === index ? "active" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
         
    </div>
  );
};

export default GuestExperience;

