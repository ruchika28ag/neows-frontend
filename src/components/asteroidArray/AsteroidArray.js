import React, { useEffect, useState } from "react";
import AsteroidCard from "../asteroidCard/asteroidCard";
import "./asteroidArray.css";

const AsteroidArray = () => {
  const [astList, setAstList] = useState([]);

  useEffect(() => {
    fetch("https://www.neowsapp.com/rest/v1/feed/today?detailed=true")
      .then((res) => res.json())
      .then((res) => setAstList(Object.values(res.near_earth_objects)[0]))
  }, []);

  return (
    <div className="astArray">
      {astList.map((ast) => {
        return <AsteroidCard asteroid={ast} key={ast.id} />;
      })}
    </div>
  );
};

export default AsteroidArray;
