import React, { useEffect, useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const item = [
    {
      image:
        "https://static.wixstatic.com/media/9c6671_7b9aa9bf48ef4931b1c4f7385ca8e86b~mv2.png/v1/fill/w_314,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo-cnntravel.png",
      description:
        "Glittering peaks and vivid landscapes create an environment that can calm the most unsettled of hearts.",
      author: "Jini Reddy, CNN Travel",
    },
    {
      image:
        "https://static.wixstatic.com/media/9c6671_5f97ba7f0b6d4585956f85d112b25320~mv2.png/v1/fill/w_314,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/307_Outlook_Traveller_edited.png",
      description:
        "Time and global warming notwithstanding, the stories frame Dunagiri, a place lush with natural and mythological lore.",
      author: "Disha, Outlook Traveller",
    },
    {
      image:
        "https://static.wixstatic.com/media/9c6671_be30236887c54160b5f0deb0ea78c554~mv2.png/v1/fill/w_268,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pngwing_com%20(8).png",
      description:
        "(Dunagiri Retreat) A place of warmth, bliss, solitude, and delicious food!",
      author: "Ri, Tripadvisor",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % item.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [item.length]);
  return (
    <div className="Carousel-container">
      {item.map(
        (card, index) =>
          activeIndex === index && (
            <div key={index} className="Carousel-card-container">
              <img className="Carousel-card-img" src={card.image} alt="" />
              <p className="Carousel-card-description">"{card.description}"</p>
              <h3 className="Carousel-card-author">{card.author}</h3>
              <div className="Carousel-indicators">
                {item.map((_, index) => (
                  <div
                    key={index}
                    className={`Carousel-indicator ${
                      activeIndex === index ? "active" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Carousel;
