import React, { useState } from 'react';
import {ReactComponent as ProLogo} from '../../assets/proceed.svg';
import './SearchInput.css'

const SearchInput = () => {

  const [value, setValue] = useState('');

  const handleChange = event => {
      setValue(event.target.value);
  }

  const handleSubmit = event => {
      event.preventDefault();
      if(value){
          const id= value;
          setValue('');
          fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=DEMO_KEY`)
          .then(res => res.json())
          .then((aster) => console.log(aster));
      }
  }

  return(
    <form className="searchInput" onSubmit={handleSubmit}>
      <div className="searchBox">
        <input className="inputBox" placeholder="Enter Asteroid ID" onChange={handleChange}></input>
      </div>
      <button className="proceedBtn" type="submit">
        <span className="proceed">PROCEED</span>
        <ProLogo className="proLogo" />
      </button>
    </form>
  )
}

export default SearchInput;