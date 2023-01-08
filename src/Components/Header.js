import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import { BiLogInCircle, BiSearchAlt2, BiCartAlt } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState(false);

  const dropDownMenuHandler = (event) => {
    setIsDropDownMenuOpen(!isDropDownMenuOpen);
    event.preventDefault();
  };

  return (
    <header>
      <div className="container">
        <a href="#" className="logo">
          <img src={logo} alt="" />
        </a>
        <ul className={isDropDownMenuOpen ? "links open" : "links"}>
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#dishes">Dishes</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#stats">Our Stats</a>
          </li>
        </ul>
        <div className="search">
          <a href="#" className="mode-toggle">
            <div></div>
          </a>
          <a href="#">
            <BiSearchAlt2 size={25} />
          </a>
          <a href="#">
            <BiCartAlt size={25} />
          </a>
          <a href="#" className="login">
            <BiLogInCircle size={25} />
            Login
          </a>
          <a href="#">
            <FaBars size={25} className="bars" onClick={dropDownMenuHandler} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
