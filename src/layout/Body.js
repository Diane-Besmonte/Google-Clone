import React from "react";
import "./Body.css";
import Logo from "../Images/google.png";
import {FaSearch} from 'react-icons/fa';
import {BsFillMicFill} from 'react-icons/bs';

const Body = () => {
  return (
    <div className="Body">
        <div className="bodyWrapper">
        <img src={Logo} className="logoSize" id="logo" alt="logo"/>
            <div id="search">
            {/* <FaSearch id="searchIcon" /> */}
            <a href="/nothing"><FaSearch id="searchIcon"/></a>
            <input type="text" />
            <a href="/nothing"><BsFillMicFill id="micIcon"/></a>
            {/* <BsFillMicFill id="micIcon" /> */}
            </div>
            <div className="BtnContainer">
                <button>Google Search</button>
                <button>I'm Feeling Lucky</button>
                <p>Google offered in: <a href="/filipino">Filipino</a> <a href="/cebuano">Cebuano</a></p>
            </div>
        </div>
    </div>
  );
};

export default Body;
