import React from "react";
import "./Header.css";
import {CgLayoutGridSmall} from 'react-icons/cg';

const Header = () => {
  return (
    <div className="Header">
      <a href="/gmail">Gmail</a>
      <a href="/images">Images</a>
      <a href="/icons"><CgLayoutGridSmall id="gridIcon"/></a> 
      <a href="/account" id="profile"> </a>        
    </div>
  );
};

export default Header;
