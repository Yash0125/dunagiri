import React from "react";
import "./LifeDiscoverySection.css";

const LifeDiscoverySection = () => {
    const item =[
        {
            image:"https://static.wixstatic.com/media/9c6671_a88146a9668348fb80e5477f9a5f74e4~mv2.png/v1/fill/w_56,h_56,al_c,lg_1,q_85,enc_auto/9c6671_a88146a9668348fb80e5477f9a5f74e4~mv2.png",
            title:"Searching for something greater in life?",
            description:"Immerse yourself in a period of reflection and self-discovery to uncover your desires and purpose."
        },
        {
            image:"https://static.wixstatic.com/media/9c6671_12c31c7bd338465282ff16ceb70d3791~mv2.png/v1/fill/w_56,h_56,al_c,lg_1,q_85,enc_auto/9c6671_12c31c7bd338465282ff16ceb70d3791~mv2.png",
            title:"In need of a mind-body reset?",
            description:"Discover an approach to wellness tailored to your unique constitution that gives your mind and body what it needs to thrive."
        },
        {
            image:"https://static.wixstatic.com/media/9c6671_60a998a1332e40dfa7b93e96f2362163~mv2.png/v1/fill/w_56,h_56,al_c,lg_1,q_85,enc_auto/9c6671_60a998a1332e40dfa7b93e96f2362163~mv2.png",
            title:"Experiencing a life transition?",
            description:"Gain tools to move through periods of unease with purpose and clarity."
        },
        {
            image:"https://static.wixstatic.com/media/9c6671_27850f48618449b082b44252a260e174~mv2.png/v1/fill/w_56,h_56,al_c,lg_1,q_85,enc_auto/9c6671_27850f48618449b082b44252a260e174~mv2.png",
            title:"Looking for a spiritual awakening?",
            description:"Experience profound shifts as you reconnect to the divine through daily meditation and yoga practices."
        },
        {
            image:"https://static.wixstatic.com/media/9c6671_1d87223f662647c8b967b1387cd38708~mv2.png/v1/fill/w_56,h_56,al_c,lg_1,q_85,enc_auto/9c6671_1d87223f662647c8b967b1387cd38708~mv2.png",
            title:"Ready to refill your cup?",
            description:"Step away from that to-do list to nourish and replenish yourself in a lasting way."
        },
        {
            image:"https://static.wixstatic.com/media/9c6671_ae511500a13b4b7bbfea2e1c92b542c2~mv2.png/v1/fill/w_56,h_56,al_c,lg_1,q_85,enc_auto/9c6671_ae511500a13b4b7bbfea2e1c92b542c2~mv2.png",
            title:"Wanting to live a healthier, happier life?",
            description:"Uncover Kriya Yoga's secrets to thriving wellbeing and awaken the eternal source of joy within."
        },
    ]
  return (
    <div className="lifediscoverysection-container">
      <div className="lifediscoverysection-left-container">
        <img
          className="lifediscoverysection-left-img"
          src="https://static.wixstatic.com/media/9c6671_c8b4a2787f4748eaa228ab6f5196253f~mv2.png/v1/fill/w_490,h_810,al_c,q_90,enc_auto/are-you.png"
          alt=""
        />
      </div>
      <div className="lifediscoverysection-right-container">
        <p className="lifediscoverysection-right-description">
          NO MATTER YOUR MOTIVATION, WE CAN HELP
        </p>
        <h1 className="lifediscoverysection-right-title">Are you...</h1>

        <div className="lifediscoverysection-right-card-container">
        {item.map((item,index)=>(
            <div className="lifediscoverysection-right-card">
            <img className="lifediscoverysection-right-card-image" src={item.image} alt="" />
            <p className="lifediscoverysection-right-card-title" >{item.title}</p>
            <p className="lifediscoverysection-right-card-description">{item.description}</p>
            </div>
        ))}
            
        </div>
      </div>
    </div>
  );
};

export default LifeDiscoverySection;
