import React from "react";
import "./HomeDetails.css";

function HomeDescription({ description }) {
  return (
    <div className="description-containter">
      <h3>Description</h3>
      <p>{description.property_description}</p>
    </div>
  );
}

export default HomeDescription;
