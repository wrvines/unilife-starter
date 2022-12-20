import axios from "axios";
import React from "react";
import Banner from "../../components/Banner/Banner";

function HomePage() {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [cities, setCities] = React.useState([]);

  React.useEffect(() => {
    axios
      //   .get(`${baseUrl}/cities`)
      .get(`https://unilife-server.herokuapp.com/cities`)
      .then((res) => {
        // setCities(res.cities)
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Banner />
    </div>
  );
}

export default HomePage;
