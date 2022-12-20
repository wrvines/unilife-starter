import React from "react";
import "./Header.css";
import { IoHeartOutline, IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="" />
        UniLife
      </Link>
      <div className="header-links">
        <div className="shortlist">
          <IoHeartOutline />
          Shortlist
        </div>
        <div className="contact">
          <IoMailOutline />
          Contact Us
        </div>
      </div>
    </div>
  );
}

export default Header;
