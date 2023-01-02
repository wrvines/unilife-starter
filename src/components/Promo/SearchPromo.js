import React from "react";
import { useNavigate } from "react-router-dom";
import "./Promo.css";
import person from "../../assets/person.png";
import best from "../../assets/best-selection.svg";
import favorite from "../../assets/your-favorite.svg";

function SearchPromo() {
  let navigate = useNavigate();
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <div className="search-best">
          <img src={best} />
          <div className="search-body">
            <h4>Best selection</h4>
            <p>
              Best selection of student accommodations. Never been easier to
              find a home that's right for you.
            </p>
          </div>
        </div>
        <div className="search-favorite">
          <img src={favorite} />
          <div className="search-body">
            <h4>Your favorite</h4>
            <p>
              Shortlist your favourite properties and send enquiries in one
              click.
            </p>
          </div>
        </div>
        <button onClick={() => navigate(`/`)}>Search & Compare</button>
      </div>
      <div className="search-image">
        <img src={person} />
      </div>
    </div>
  );
}

export default SearchPromo;
