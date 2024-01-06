import React from 'react';
import './Map.css'

const Map = () => {
  return (
    <div className='map-container'>
     {/*eslint-disable-next-line */}
      <iframe 
      className='map'
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.4280355693804!2d79.4459564758722!3d29.823064329025232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a7547b97e9c3b5%3A0xeed550edee305a4b!2sDunagiri%20Retreat!5e0!3m2!1sen!2sin!4v1704550118576!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map
