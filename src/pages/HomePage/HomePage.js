import axios from "axios";
import React from "react";
import Banner from "../../components/Banner/Banner";
import CityCard from "../../components/CityCard/CityCard";
import InclusivePromo from "../../components/Promo/InclusivePromo";
import SearchPromo from "../../components/Promo/SearchPromo";
import Social from "../../components/Social/Social";
import { Link, useNavigate } from "react-router-dom";
import "./HomePage.css";
import CityDetails from "../CityDetails/CityDetails";

function HomePage() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  //   console.log(baseUrl);
  let navigate = useNavigate();

  const [cities, setCities] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${baseUrl}cities?`)
      //   .get(`https://unilife-server.herokuapp.com/cities`)
      .then((res) => {
        // console.log(res.data.response);
        // console.log(res.data.response.name);
        setCities(res.data.response.slice(0, 9));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Banner />
      <div className="city-container">
        <div className="search-bar-wrapper">
          <input placeholder="Search by City" />
          <input placeholder="Any Bedroom" />
          <button>Find Homes</button>
        </div>
        <h3>Student accommodations in our top cities</h3>
        <Link to={`/citydetails/${cities?._id}`}>
          <div className="city-wrapper">
            {cities.map((item) => (
              <CityCard
                city={item}
                key={item._id}
                imageUrl={item.image_url}
                imgHeight="300px"
                imgWidth="400px"
                cardStyle="city-card"
                brdRadius="24px"
              />
            ))}
          </div>
        </Link>

        <button className="city-btn" onClick={() => navigate(`/allcities`)}>
          See All Cities
        </button>
      </div>
      <InclusivePromo />
      <SearchPromo />
    </div>
  );
}

export default HomePage;
