import axios from "axios";
import React from "react";
import Banner from "../../components/Banner/Banner";
import "./SeeAllCities.css";

function SeeAllCities() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  //   console.log(baseUrl);
  // let navigate = useNavigate();

  const [allCities, setAllCities] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${baseUrl}cities`)
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
      <div className="all-cities-container">
        <div className="all-cities-btns">
          <p>{allCities?.name}</p>
        </div>
      </div>
    </div>
  );
}

export default SeeAllCities;
