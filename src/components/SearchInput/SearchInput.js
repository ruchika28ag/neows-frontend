import React, { useState } from "react";
import { ReactComponent as ProLogo } from "../../assets/proceed.svg";
import "./SearchInput.css";
import AsteroidModal from "../AsteroidModal/AsteroidModal";

const SearchInput = () => {
  const [value, setValue] = useState("");
  // const [isOpen, setIsOpen] = useState(false);
  const [asteroid, setAsteroid] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value) {
      fetch(`https://api.nasa.gov/neo/rest/v1/neo/${value}?api_key=DEMO_KEY`)
        .then((res) => res.json())
        .then((aster) => {
          setAsteroid(aster);
          setValue("");
        });
    }
  };

  return (
    <form className="searchInput" onSubmit={handleSubmit}>
      <div className="searchBox">
        <input
          className="inputBox"
          placeholder="Enter Asteroid ID"
          value={value}
          onChange={handleChange}
        ></input>
      </div>
      <button className="proceedBtn" type="submit">
        <span className="proceed">PROCEED</span>
        <ProLogo className="proLogo" />
      </button>
      <AsteroidModal
        setAsteroid={setAsteroid}
        asteroid={asteroid}
      />
    </form>
  );
};

export default SearchInput;
