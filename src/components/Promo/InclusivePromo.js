import React from "react";
import "./Promo.css";
import search from "../../assets/search.svg";
import compare from "../../assets/compare.svg";
import bills from "../../assets/bills-included.svg";

function InclusivePromo() {
  return (
    <div className="inclusive-container">
      <h3>Compare all inclusive student homes.</h3>
      <div className="inclusive-wrapper">
        <div className="inclusive-body">
          <img src={search} />
          <div>Search</div>
          <p>Find your dream home in the perfect area near your university.</p>
        </div>
        <div className="inclusive-body">
          <img src={compare} />
          <div>Compare</div>
          <p>Compare student accommodation to find the right home for you.</p>
        </div>
        <div className="inclusive-body">
          <img src={bills} />
          <div>Bills Included</div>
          <p>Bills are included in all rent prices. No hidden fees.</p>
        </div>
      </div>
    </div>
  );
}

export default InclusivePromo;
