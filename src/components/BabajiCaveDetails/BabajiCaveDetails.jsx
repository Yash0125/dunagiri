import React from 'react';
import "./BabajiCaveDetails.css";

const BabajiCaveDetails = () => {

  const images = [
    "https://static.wixstatic.com/media/9c6671_182398a4e9a649dcbb4d32c5a5e12d4f.jpg/v1/fill/w_285,h_284,q_90/9c6671_182398a4e9a649dcbb4d32c5a5e12d4f.jpg",

    "https://static.wixstatic.com/media/9c6671_81be8ee7de1243e5bc3e85f7bbc45b8b~mv2.jpg/v1/fill/w_285,h_284,q_90/9c6671_81be8ee7de1243e5bc3e85f7bbc45b8b~mv2.webp",

    "https://static.wixstatic.com/media/9c6671_ebe54b65e6484b9694126e9ffb50f6c0~mv2.jpg/v1/fill/w_285,h_284,q_90/9c6671_ebe54b65e6484b9694126e9ffb50f6c0~mv2.webp",

    "https://static.wixstatic.com/media/9c6671_af18a6a8dfa14946ac12f6cad421f16a~mv2.jpg/v1/fill/w_285,h_284,q_90/9c6671_af18a6a8dfa14946ac12f6cad421f16a~mv2.webp",

    "https://static.wixstatic.com/media/9c6671_ec940864011e4627a703fe1c3261ab3a.jpg/v1/fill/w_285,h_284,q_90/9c6671_ec940864011e4627a703fe1c3261ab3a.webp",

    "https://static.wixstatic.com/media/9c6671_8b928b68a54546068db6f61a08814f66~mv2.png/v1/fill/w_285,h_284,q_90/9c6671_8b928b68a54546068db6f61a08814f66~mv2.webp",

    "https://static.wixstatic.com/media/9c6671_1e5089fada4740afb1f0bfebf0364132.jpg/v1/fill/w_285,h_284,q_90/9c6671_1e5089fada4740afb1f0bfebf0364132.webp",

    "https://static.wixstatic.com/media/9c6671_9c1cfde49a3e4062a8e083ab8f21718e.jpg/v1/fill/w_285,h_284,q_90/9c6671_9c1cfde49a3e4062a8e083ab8f21718e.webp",

    "https://static.wixstatic.com/media/9c6671_8bac7a15b7f84dfb94df9ee3e8e96ae8.jpg/v1/fill/w_285,h_285,q_90/9c6671_8bac7a15b7f84dfb94df9ee3e8e96ae8.webp",

    "https://static.wixstatic.com/media/9c6671_9556478c10c6478d90b799b7d3b1d53e.jpg/v1/fill/w_285,h_285,q_90/9c6671_9556478c10c6478d90b799b7d3b1d53e.webp",

    "https://static.wixstatic.com/media/9c6671_73e3a14068724ca19f6bac6e13d466e1~mv2.jpg/v1/fill/w_285,h_285,q_90/9c6671_73e3a14068724ca19f6bac6e13d466e1~mv2.webp",

    "https://static.wixstatic.com/media/9c6671_db3f26a04f8f4790a5000dfb177466ea~mv2.jpg/v1/fill/w_285,h_285,q_90/9c6671_db3f26a04f8f4790a5000dfb177466ea~mv2.webp",

    "https://static.wixstatic.com/media/9c6671_99302912127540b887b560c64404fbc8.jpg/v1/fill/w_285,h_285,q_90/9c6671_99302912127540b887b560c64404fbc8.webp",

    "https://static.wixstatic.com/media/9c6671_5d56d012b1ff479ead1e8a4e379c639c.jpg/v1/fill/w_285,h_285,q_90/9c6671_5d56d012b1ff479ead1e8a4e379c639c.webp",

    "https://static.wixstatic.com/media/9c6671_b25b906bc3e9484b8408163d951f8699.jpg/v1/fill/w_285,h_285,q_90/9c6671_b25b906bc3e9484b8408163d951f8699.webp"
  ];

  return (
    <div className='babajicavedetails-container'>
      <h1 className='babajicavedetails-title'>Visit Mahavatar Babaji's Cave </h1>

      <div className="image-container">
        {images.map((img)=>(
          <>
            <img className='image' src={img} alt="" />
          </>
        ))}
      </div>

      <button className='activities-btn'>ACTIVITIES</button>
    </div>
  )
};

export default BabajiCaveDetails

