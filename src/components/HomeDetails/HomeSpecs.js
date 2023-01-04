import React from "react";
import { MdOutlineBed, MdBathtub } from "react-icons/md";
import "./HomeDetails.css";
import { FaPoundSign } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";

function HomeSpecs({ property }) {
  //   console.log(item.address);
  // const address =
  // console.log(address);
  return (
    <div className="home-specs-container">
      <div className="home-specs-wrapper">
        <div className="home-specs-top">
          <p>
            {property?.address?.street}, {property?.address?.city}
          </p>
          <p>{property?.address?.postcode}</p>
        </div>
        <div className="home-specs-bottom">
          <p>
            Bedrooms:
            <p className="spec-accent">
              <MdOutlineBed /> {property.bedroom_count}
            </p>
          </p>
          <p>
            Bathrooms:{" "}
            <p className="spec-accent">
              <MdBathtub /> {property.bathroom_count}
            </p>
          </p>
          <p>
            Property Type:{" "}
            <p className="spec-accent">{property.property_type}</p>
          </p>
          <p>
            Price:{" "}
            <p className="spec-accent">
              <FaPoundSign />
              {property.rent}
            </p>
          </p>
          <p>
            Furnished Type: <p className="spec-accent">{property.furnished}</p>
          </p>
          <p>
            Available From:{" "}
            <p className="spec-accent">{property.availability}</p>
          </p>
        </div>
      </div>
      <div className="home-spec-btns">
        <button className="btn-left">
          <IoHeartOutline />
          Shortlist
        </button>
        <button className="btn-right">Book Viewing</button>
      </div>
    </div>
  );
}

export default HomeSpecs;
