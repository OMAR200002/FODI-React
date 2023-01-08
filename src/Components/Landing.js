import React from "react";
import "./Landing.css";
import burgar from "../assets/burgar.png";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaAngleDown,
} from "react-icons/fa";

const Landing = () => {
  return (
    <div className="landing" id="home">
      <div className="container">
        <div className="text">
          <h2>Tasty Food</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit excepturi necessitatibus eius, mollitia ab iste soluta
            distinctio quas debitis! Cumque sequi quo doloremque aperiam
            adipisci neque deserunt ea quod commodi.
          </p>
          <div className="links">
            <a href="#" className="solid">
              Order Now
            </a>
            <a href="#" className="regular">
              Our Menu
            </a>
          </div>
        </div>
        <div className="image">
          <img src={burgar} alt="Buragar" />
          <div className="social-media">
            <a href="#">
              <FaInstagram size={20} />
            </a>
            <a href="#">
              <FaFacebookF size={20} />
            </a>
            <a href="#">
              <FaTwitter size={20} />
            </a>
            <a href="#">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
      <a href="#dishes" className="go-down">
        <FaAngleDown size={20} />
        <FaAngleDown size={20} />
        <FaAngleDown size={20} />
        <FaAngleDown size={20} />
      </a>
    </div>
  );
};

export default Landing;
