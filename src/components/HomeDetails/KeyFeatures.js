import React from "react";
import "./HomeDetails.css";
import { FaCheck } from "react-icons/fa";

function KeyFeatures({ keyfeatures }) {
  return (
    <div>
      <h3>Key Features</h3>
      {keyfeatures.map((item) => (
        <p>
          <FaCheck /> {item}
        </p>
      ))}
    </div>
  );
}

export default KeyFeatures;
