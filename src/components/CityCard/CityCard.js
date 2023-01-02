import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CityCard.css";

function CityCard({
  city,
  key,
  imageUrl,
  imgHeight,
  cardstyle,
  brdRadius,
  imgWidth,
}) {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  let navigate = useNavigate();

  const imageStyle = {
    backgroundImage: `url("${imageUrl}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: imgHeight,
    width: imgWidth,
    position: "relative",
    borderRadius: brdRadius,
  };

  return (
    <Link className={cardstyle} to={`/citydetails/${city?._id}`}>
      <div style={imageStyle}>
        <div className="city-blur"></div>
        <div className="city-text">
          <h3>{city.name}</h3>
          <p>{city.property_count} properties</p>
        </div>
      </div>
    </Link>
  );
}

export default CityCard;
