import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
       <div className="countryRow">Philippines</div>
       <div className="infoRow">
           <div className="leftCol">
               <a href="/nothing">Advertising</a>
               <a href="/nothing">Business</a>
               <a href="/nothing">About</a>
               <a href="/nothing">How Search works</a>
           </div>
           <div className="rightCol">
               <a href="/nothing">Privacy</a>
               <a href="/nothing">Terms</a>
               <a href="/nothing">Settings</a>
           </div>
        </div>     
    </div>
  );
};

export default Footer;
