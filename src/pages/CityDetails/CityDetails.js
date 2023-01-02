import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

function CityDetails() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const cityId = useParams();
  console.log(cityId);

  React.useEffect(() => {
    axios.get(`${baseUrl}cities`).then((res) => {
      console.log(res);
    });
  });

  return;
}

export default CityDetails;
