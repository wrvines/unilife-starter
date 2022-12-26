import React from "react";
import { useNavigate } from "react-router-dom";
import "./Promo.css";
import student from "../../assets/students.png";

function SearchPromo() {
  let navigate = useNavigate();
  return (
    <div className="search-container">
      <h4>Best selection</h4>
      <h4>Your favorite</h4>
      <button onClick={() => navigate(`/`)}>Search & Compare</button>
    </div>
  );
}

export default SearchPromo;
