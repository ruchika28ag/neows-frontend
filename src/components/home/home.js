import React, { useState } from "react";
import Search from "../Search/Search";
import "./home.css";
import AsteroidArray from "../asteroidArray/AsteroidArray";
import Header from "../Header/Header";

const Home = () => {
  const [asteroids, setAsteroids] = useState([]);
  const [isToday, setIsToday] = useState(true);

  return (
    <div className="home">
      <Header />
      <div className="searchContainer">
        <Search setAsteroids={setAsteroids} setIsToday={setIsToday} />
      </div>
      <div className="astContainer">
        <AsteroidArray
          asteroids={asteroids}
          setAsteroids={setAsteroids}
          isToday={isToday}
          setIsToday={setIsToday}
        />
      </div>
    </div>
  );
};

export default Home;
