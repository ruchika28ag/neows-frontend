import React from "react";
import Search from "../Search/Search";
import "./home.css";
import AsteroidArray from "../asteroidArray/AsteroidArray";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="searchContainer">
        <Search />
      </div>
      <div className="astContainer">
        <span className="latest">Latest</span>
        <AsteroidArray />
      </div>
    </div>
  );
};

export default Home;
