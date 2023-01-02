import React from "react";
import { useParams } from "react-router-dom";

function CityDetails() {
  const cityId = useParams();
  console.log(cityId);
  return;
}

export default CityDetails;
