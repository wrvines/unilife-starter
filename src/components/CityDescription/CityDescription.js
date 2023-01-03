import React from "react";
import "./CityDescription.css";
import students from "../../assets/students.png";

function CityDescription({ item }) {
  return (
    <div className="city-description-wrapper">
      <div className="city-left">
        <h3>{`Being a student in ${item.name}`}</h3>
        <p>{item.student_life}</p>
        <p>{item.universities}</p>
      </div>
      <div className="city-right">
        <img src={students} alt="" />
      </div>
    </div>
  );
}

export default CityDescription;
