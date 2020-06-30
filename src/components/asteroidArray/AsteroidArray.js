import React, { useEffect } from "react";
import AsteroidCard from "../asteroidCard/asteroidCard";
import "./asteroidArray.css";

const AsteroidArray = ({ asteroids, setAsteroids, isToday, setIsToday }) => {
  console.log(asteroids);

  useEffect(() => {
    if (asteroids.length === 0) {
      fetch("https://www.neowsapp.com/rest/v1/feed/today?detailed=true")
        .then((res) => res.json())
        .then((res) => setAsteroids(Object.values(res.near_earth_objects)[0]));
        setIsToday(true);
    }
  }, [asteroids, setAsteroids, setIsToday]);

  return (
    <>
      {isToday && <span className="latest">Latest</span>}
      <div className="astArray">
        {asteroids.map((ast) => {
          return <AsteroidCard asteroid={ast} key={ast.id} />;
        })}
      </div>
    </>
  );
};

export default AsteroidArray;
