import React from 'react';
import './Header.css';
import {ReactComponent as Logo} from '../../assets/logo.svg';

const Header = () =>{
  return (
    <div className="header">
      <div className= "title">
        <Logo className="logo" />
        <span className="titleName">AstroSearch</span>
      </div>
      <div className="tagline"> Search Beyond Infinity</div>
    </div>
  )
}

export default Header;