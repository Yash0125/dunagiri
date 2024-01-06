import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="contact-details-container">

        <div className="contactus-detail-container">
            <h4 className='contactus-detail-title' >Contact US</h4>
            <p>EL: +91 98102 67719</p>
            <p>+91 96901 32425</p>
            <p>WhatsApp: +91 98102 67719</p>
            <p>E-MAIL: delighted@dunagiri.com</p>
        </div>

        <div className="contactus-address-container">
        <h4 className='contactus-address-title' >Address</h4>
            <p>Village Chari, Near Mahavatar</p>
            <p>Babaji's Cave, PO Dunagiri,</p>
            <p>Block Dwarahat, District</p>
            <p>Almora Uttarakhand, India</p>
        </div>

        <div className="contactus-followus-container">
            <h4 className='contactus-followus-title'>Follow Us</h4>

            <div className="contactus-social-acc-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMz0tavolAEv-unkfbYo3c7j_IIj-_xnsk2A&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0CJXIObVYo1qePdtl-gU6LSoNYYbLVNO_tA&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDSVLHne-QnNwVLCT3o0NQ6o14gq_zIIpDYQ&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsZf9P-H_6IbIdQPJA6xxAg85wNbwoymgqv4uq3mEwMf-Jyce1mo4OJdOd9ElYpJgl-s&usqp=CAU" alt="" />
            </div>
            <h4 className='contactus-followus-title'>We Accept</h4>
            <div className="contactus-social-acc-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqZipoo-UnqLEJ2FRDl95VR7hHVnO3wPQxvw&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8M0DgVBc6GuM18MOy4ejWJ_J2zSBtk95Odw&usqp=CAU" alt="" />
            </div>

        </div>

      </div>

      <div className="pollicy-container">
        <p>Privacy Pollicy</p>
        <p>Cancellation and Refund Policy</p>
        <p>Terms and Conditions</p>
        <p>FAQs</p>
        <p>Contact Us</p>
      </div>

      <div className="copywrite">
        <p>© 2023 by<span>DUNAGIRI RETREAT</span></p>
      </div>
    </div>
  )
}

export default Footer