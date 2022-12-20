import React from "react";
import "./Footer.css";
import { AiOutlineCopyright } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <div className="about">About</div>
      <div className="terms">Terms & Condidtions</div>
      <div className="privacy">Privacy & Cookie Policies</div>
      <div className="copyright">
        <p>2022</p>
        <AiOutlineCopyright />
        <p>UniLife</p>
      </div>
    </div>
  );
}

export default Footer;
