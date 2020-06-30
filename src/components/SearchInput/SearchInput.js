import React from 'react';
import {ReactComponent as ProLogo} from '../../assets/proceed.svg';
import './SearchInput.css'

const SearchInput = () => {
  return(
    <div className="searchInput">
      <div className="searchBox">
        <input className="inputBox" placeholder="Enter Asteroid ID"></input>
      </div>
      <button className="proceedBtn">
        <span className="proceed">PROCEED</span>
        <ProLogo className="proLogo" />
      </button>
    </div>
  )
}

export default SearchInput;