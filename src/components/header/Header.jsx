import React from 'react';
import './header.css'

const Header = () => {

    const pages = ["ABOUT US","ACCOMODATIONS","RETREATS","ACTIVITIES","GALLERY","BLOGS","CONTACT US"]
  return (
    <header className='header'>
      <div className="logo-container">
        <img className='logo-container-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGY86Ph5QFVxOaEI-r7DJx5Ltket9AhvUSP2ssuX6C9RusHjRp_iwwCgtlt8uxtJNx92s&usqp=CAU" alt="logo" />
        <p className="logo-container-title">DUNAGIRI</p>
      </div>
      <ul className='navigation-items'>
      {pages.map((page)=>(
        <li className='header-navigation-items'>{page}</li>
      ))}
      </ul>
    </header>
  )
}

export default Header
