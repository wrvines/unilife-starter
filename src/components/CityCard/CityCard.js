import React from "react";
import { Link, useNavigate } from "react-router-dom";

function CityCard({ city }) {
  let navigate = useNavigate();
  return (
    <div>
      <Link>{city.name}</Link>
    </div>
  );
}

export default CityCard;
