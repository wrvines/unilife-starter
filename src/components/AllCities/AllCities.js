import React from "react";
import { Link } from "react-router-dom";
import "./AllCities.css";

function AllCities({ city, key, btnHeight, btnWidth, brdRadius }) {
  const imageStyle = {
    height: btnHeight,
    width: btnWidth,
    borderRadius: brdRadius,
    border: "1px solid #CED3D8",
  };
  return (
    // <div className="all-cities-container">
    <Link className="all-cities-card" to={`/citydetails/${city?._id}`}>
      <div className="all-cities-wrapper" style={imageStyle}>
        <div className="all-city-text">
          <h3>{city.name}</h3>
          {/* <p>{city._id}</p> */}
        </div>
      </div>
    </Link>
    // </div>
  );
}

export default AllCities;
