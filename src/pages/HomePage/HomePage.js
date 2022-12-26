import axios from "axios";
import React from "react";
import Banner from "../../components/Banner/Banner";
import CityCard from "../../components/CityCard/CityCard";
import InclusivePromo from "../../components/Promo/InclusivePromo";
import SearchPromo from "../../components/Promo/SearchPromo";
import Social from "../../components/Social/Social";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  //   console.log(baseUrl);
  let navigate = useNavigate();

  const [cities, setCities] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${baseUrl}cities`)
      //   .get(`https://unilife-server.herokuapp.com/cities`)
      .then((res) => {
        console.log(res.data.response);
        setCities(res.data.response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Banner />
      <div className="city-container">
        <h3>Student accommodations in our top cities</h3>
        <div className="city-wrapper">
          {cities.map((item) => (
            <CityCard city={item} />
          ))}
          <button onClick={() => navigate(`/allcities`)}>See All Cities</button>
        </div>
        <InclusivePromo />
        <SearchPromo />
      </div>
    </div>
  );
}

export default HomePage;
