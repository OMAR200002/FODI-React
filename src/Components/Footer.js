import React from "react";
import "./Footer.css";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="col">
          <h3>Locations</h3>
          <ul>
            <li>
              <a href="#">Oujda</a>
            </li>
            <li>
              <a href="#">Fes</a>
            </li>
            <li>
              <a href="#">Casablanca</a>
            </li>
            <li>
              <a href="#">Dakhla</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>Contact Infos</h3>
          <ul>
            <li>
              <a href="#">+212 569-5463</a>
            </li>
            <li>
              <a href="#">+212 809-1763</a>
            </li>
            <li>
              <a href="mailto:Kool-tema@gmail.com">Kool-tema@gmail.com</a>
            </li>
            <li>
              <a href="#">Oujda - Morocco - 60000</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
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
        </div>
        <div className="col social-media">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>Instagram
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="heart-container">
        Made With
        <FaHeart size={25} className="heart" />
        By Omar
      </div>
    </footer>
  );
};

export default Footer;
