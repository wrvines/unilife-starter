import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import BedroomPrices from "../../components/HomeDetails/BedroomPrices";
import HomeDescription from "../../components/HomeDetails/HomeDescription";
import HomePics from "../../components/HomeDetails/HomePics";
import HomeSpecs from "../../components/HomeDetails/HomeSpecs";
import KeyFeatures from "../../components/HomeDetails/KeyFeatures";
import "./HomeDetailPage.css";

function HomeDetailPage() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  //https://unilife-server.herokuapp.com/properties/633d453061f49f86a21caa11
  const { homeId } = useParams();

  const [propertyDetails, setPropertyDetails] = React.useState({});
  const [propertyImages, setPropertyImages] = React.useState([]);
  const [propertyFeatures, setPropertyFeatures] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${baseUrl}properties/${homeId}`)
      .then((res) => {
        console.log(res.data);
        setPropertyDetails(res.data);
        setPropertyImages(res.data.images);
        setPropertyFeatures(res.data.key_features);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home-details-container">
      <HomePics images={propertyImages} />
      <HomeSpecs property={propertyDetails} />
      <HomeDescription description={propertyDetails} />
      <BedroomPrices brdprices={propertyDetails} />
      <KeyFeatures keyfeatures={propertyFeatures} />
    </div>
  );
}

export default HomeDetailPage;
