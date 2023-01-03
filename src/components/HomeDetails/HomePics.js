import React from "react";
import "./HomeDetails.css";

function HomePics({ images }) {
  return (
    <div className="home-pics-wrapper">
      <img className="main-pic" src={images[0]} />

      <div className="home-pics-card">
        <img className="small-pics" src={images[1]} />
        <img className="small-pics" src={images[2]} />
        <img className="small-pics" src={images[3]} />
      </div>
    </div>
  );
}

export default HomePics;
