import React from "react";
import "./Social.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Social() {
  return (
    <div className="social-container">
      <div className="social-wrapper-left">
        <h3>Keep in touch</h3>
        <p>
          Curious about new offerings? Sign up for our weekly newsletter and
          stay informed.
        </p>
        <input placeholder="Your email" />
      </div>
      <div className="social-wrapper-right">
        <h3>Let's Socialize</h3>
        <div className="social-links">
          <FaFacebook />
          <p>Facebook</p>
        </div>
        <div className="social-links">
          <FaTwitter />
          <p>Twitter</p>
        </div>
        <div className="social-links">
          <FaInstagram />
          <p>Instagram</p>
        </div>
      </div>
    </div>
  );
}

export default Social;
