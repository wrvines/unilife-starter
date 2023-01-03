import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import "./CityDetails.css";
import {
  MdOutlineBed,
  MdBathtub,
  MdOutlineHouse,
  MdOutlinePinDrop,
} from "react-icons/md";
import { FaPoundSign } from "react-icons/fa";
import CityDescription from "../../components/CityDescription/CityDescription";

function CityDetails() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const { cityId } = useParams();
  // console.log(cityId);
  //https://unilife-server.herokuapp.com/properties/city/633a96b96893d471a68cc891
  //https://unilife-server.herokuapp.com/cities/633a96b96893d471a68cc891
  const [properties, setProperties] = React.useState([]);
  const [cityDetails, setCityDetails] = React.useState([]);
  let navigate = useNavigate();

  React.useEffect(() => {
    axios
      .get(`${baseUrl}properties/city/${cityId}`)
      .then((res) => {
        // console.log(res.data.response);
        setProperties(res.data.response);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${baseUrl}cities/${cityId}`)
      .then((res) => {
        // console.log(res.data.data);
        setCityDetails(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Banner />
      <div className="city-detail-container">
        {cityDetails.map((item) => (
          <h1>{`${item.property_count} homes in ${item.name}`}</h1>
        ))}
        <div className="city-detail-wrapper">
          {properties.map((item) => (
            <div className="city-detail-card">
              <img src={item.images[0]} />
              <div className="city-detail-info-top">
                <div className="city-detail-info-price">
                  <FaPoundSign />
                  {item.rent} pppw including bills
                </div>
                <div className="city-detail-info-bedbath">
                  <MdOutlineBed />
                  {item.bedroom_count}
                  <MdBathtub />
                  {item.bathroom_count}
                </div>
              </div>
              <div className="city-detail-info-bottom">
                <div className="city-detail-info-bottom-wrapper">
                  <p>{item.property_type}</p>
                  <p>{item.furnished}</p>
                </div>
                <div>
                  <p>
                    <MdOutlinePinDrop /> {item.address.street},{" "}
                    {item.address.city} {item.address.postcode}
                  </p>
                </div>
              </div>
              <div
                className="city-detail-view-home"
                onClick={() => navigate(`/homedetails/${item._id}`)}
              >
                <MdOutlineHouse />
                View Home
              </div>
            </div>
          ))}
        </div>
        <div className="city-description-container">
          {cityDetails.map((items) => (
            <CityDescription item={items} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CityDetails;
