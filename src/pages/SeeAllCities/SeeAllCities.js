import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import "./SeeAllCities.css";

function SeeAllCities() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  //   console.log(baseUrl);
  let navigate = useNavigate();

  const [allCities, setAllCities] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${baseUrl}cities?limit=20`)
      //   .get(`https://unilife-server.herokuapp.com/cities`)
      .then((res) => {
        console.log(res.data.response);
        setAllCities(res.data.response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Banner />
      {/* <div className="all-cities-container"> */}
      <div className="all-cities-btns">
        {allCities.map((item) => (
          <button
            className="cities-btns"
            onClick={() => navigate(`/citydetails/${item._id}`)}
          >
            {item.name}
          </button>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}

export default SeeAllCities;
