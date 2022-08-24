import React from "react";
import logowhite from "./logo-white.png";
import "./LogoTop.css";

const LogoTop = () => (
  <div className="logo-box">
    <a href="#">
      <img src={logowhite} alt="logo-image" className="logo" />
    </a>
  </div>
);

export default LogoTop;
