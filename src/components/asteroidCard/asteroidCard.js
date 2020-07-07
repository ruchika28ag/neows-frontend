import React from "react";
import "./asteroidCard.css";

// const asteroid = {
//   name: "2010 PK9",
//   id: "3542519",
//   estimated_diameter: {
//     kilometers: {
//       estimated_diameter_min: 0.1160259082,
//       estimated_diameter_max: 0.2594418179,
//     },
//     meters: {
//       estimated_diameter_min: 116.0259082094,
//       estimated_diameter_max: 259.4418179074,
//     },
//     miles: {
//       estimated_diameter_min: 0.0720951346,
//       estimated_diameter_max: 0.1612096218,
//     },
//     feet: {
//       estimated_diameter_min: 380.6624406898,
//       estimated_diameter_max: 851.1870938635,
//     },
//   },
// };

const AsteroidCard = ({ asteroid }) => {
  const {
    name,
    id,
    estimated_diameter: {
      meters: { estimated_diameter_max: dmax, estimated_diameter_min: dmin },
    },
    is_potentially_hazardous_asteroid,
  } = asteroid;
  return (
    <div
      className={`asteroidCard ${
        is_potentially_hazardous_asteroid && "hazard"
      }`}
    >
      <span className="astName">{name}</span>
      <span className="astId">ID: {id}</span>
      <span className="astDiam">
        Diameter &asymp; {dmax.toFixed(2)}m - {dmin.toFixed(2)}m
      </span>
    </div>
  );
};

export default AsteroidCard;
