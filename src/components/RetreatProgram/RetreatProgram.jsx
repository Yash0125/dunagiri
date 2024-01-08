import React from 'react';
import './RetreatProgram.css'

const RetreatProgram = () => {
  return (
    <div className='retreatprogram-container'>
      <h1 className="retreatprogram-title">
      Choose Your Path
      </h1>
      <p className='retreatprogram-description'>Choose your transformational adventure at your own pace — join our dynamic retreat groups or come solo.</p>

      <div className="retreatprogram-card-container">
        <div className='retreatprogram-card'>
            <img className='retreatprogram-card-image' src="https://static.wixstatic.com/media/9c6671_4588634ebfff4608a7d721bfb22a70fa~mv2.jpg/v1/crop/x_1000,y_0,w_4000,h_4000/fill/w_300,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC_0343_JPG.jpg" alt="" />
            <h1 className='retreatprogram-card-title'>Guided Workshop & Retreats</h1>
            <p className='retreatprogram-card-description'>Our Guided Retreats provide an immersive experience that promotes growth, connection, and transformation. Join like-minded individuals in guided sessions focused on self-discovery and collaborative learning. Led by expert facilitators, these workshops blend structured activities with free time, fostering introspection and skill development. Ideal for those seeking personal growth, these retreats offer a supportive space for learning, ensuring you leave feeling enriched and empowered.</p>
            <button className='btn' >GROUP RETREATS</button>
        </div>

        <div className='retreatprogram-card'>
        <img className='retreatprogram-card-image' src="https://static.wixstatic.com/media/9c6671_0069cf199afa4330b1bd451b6cfae207~mv2.jpg/v1/fill/w_300,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/C1DSC03475_edited_edited.jpg" alt="" />
            <h1 className='retreatprogram-card-title'>Self-Guided Explorations</h1>
            <p className='retreatprogram-card-description'>Self-Guided Explorations offer a flexible experience for guests to celebrate, grieve, question, or transition at their own pace. It's a supportive, self-directed journey. This period is about honoring personal rhythms and desires, with healing and discovery at the core. The program, set in a beautiful landscape with a supportive community, nourishing meals, and healing practices, aims to rejuvenate and inspire guests, whether they stay for a weekend or week.</p>
            <button className='btn' >SELF-GUIDED</button>
        </div>

      </div>
    </div>
  )
}

export default RetreatProgram


