import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contactus-container">
      <div className="contactus-left-container">
        <h1 className="contactus-left-title">Contact Us</h1>

        <div className="contactus-left-address-container">
          <img
            className="contactus-left-address-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&usqp=CAU"
            alt=""
          />
          <p className="contactus-left-address-details">
            Dunagiri Retreat, Village Chari, Near Mahavatar Babaji's Cave,
            Block, Dwarahat, Uttarakhand 263653 India
          </p>
        </div>
        <div className="contactus-left-phone-container">
          <img
            className="contactus-left-phone-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTIbWSq41aDHiH27q60BHpS1bX2dmRcEQVow&usqp=CAU"
            alt=""
          />
          <p className="contactus-left-phone-details">+91 98102 67719 </p>
        </div>
        <div className="contactus-left-mail-container">
          <img
            className="contactus-left-mail-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdo7nC1oMQocAkylM_9QNMW4SlP4iShruvRA&usqp=CAU"
            alt=""
          />
          <p className="contactus-left-mail-details">delighted@dunagiri.com</p>
        </div>
        <div className="contactus-left-mail-container">
          <img
            className="contactus-left-mail-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNO1vmANlBQ-lxuycbjewip5pZUQXHjf2FOw&usqp=CAU"
            alt=""
          />
          <div className="social-app-logo-contact">
            <img
              className="social-app"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6qCnUXb7BctXIoEgr1QkcE2iWq9XN1qsHEQ&usqp=CAU"
              alt=""
            />
            <img
              className="social-app"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXymD1N8AWo5pq35KfYdmWsFDlN-5uZJsg1g&usqp=CAU"
              alt=""
            />
            <img
              className="social-app"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ47LzJxNPwTX3dIdKomuh7ptOPtXGSP5rLg&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="contactus-right-container">
        <div className="name-container">
          <div className="firstname">
            <label>First Name : </label>
            <input className="firstname-input" type="text" />
          </div>
          <div className="lastname">
            <label>Last Name : </label>
            <input className="firstname-input" type="text" />
          </div>
        </div>

        <label>Email*</label>
        <input className="lastname-input" type="text" />
        <label>Phone*</label>
        <input className="lastname-input" type="text" />

        <label>Message: </label>
        <textarea
          name="description"
          className="message-input"
          id="description"
          cols="26"
          rows="8"
          required
        ></textarea>

        <button className="send-btn">SEND</button>
      </div>
    </div>
  );
};

export default ContactUs;
