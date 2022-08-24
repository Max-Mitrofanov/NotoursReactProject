import React from "react";
import "./Header.css";
import LogoTop from "./LogoTop";
import Button from "./Button/Button";
import HeaderTextBox from "./HeaderTextBox/HeaderTextBox";

const Header = () => (
  <header className="header">
    <LogoTop />
    <div className="text-box">
      <HeaderTextBox />
      <Button />
    </div>
  </header>
);

export default Header;
