import React from "react";
import "./Testimonials.css";
import avatar1 from "../assets/avatar-01.png";
import avatar2 from "../assets/avatar-02.png";
import avatar3 from "../assets/avatar-03.png";
import { FaStar, FaRegStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <h2 className="special-heading">Testimonials</h2>
      <div className="container">
        <div className="box">
          <div className="image">
            <img src={avatar1} alt="" />
          </div>
          <h3>Amaya Bouvet</h3>
          <div className="rate">
            <FaStar size={15} className="solid" />
            <FaStar size={15} className="solid" />
            <FaStar size={15} className="solid" />
            <FaStar size={15} className="solid" />
            <FaRegStar size={15} className="regular" />
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="box">
          <div className="image">
            <img src={avatar2} alt="" />
          </div>
          <h3>Taylor Farrell</h3>
          <div className="rate">
            <FaStar size={15} className="solid" />
            <FaStar size={15} className="solid" />
            <FaStar size={15} className="solid" />
            <FaStar size={15} className="solid" />
            <FaRegStar size={15} className="regular" />
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="box">
          <div className="image">
            <img src={avatar3} alt="" />
          </div>
          <h3>Devan Gillespie</h3>
          <div className="rate">
            <FaStar size={15} className="solid" />
            <FaStar size={15} className="solid" />
            <FaStar size={15} className="solid" />
            <FaStar size={15} className="solid" />
            <FaRegStar size={15} className="regular" />
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="box">
          <div className="image">
            <img src={avatar1} alt="" />
          </div>
          <h3>Adriana Landry</h3>
          <div className="rate">
            <FaStar size={15} className="solid" />
            <FaStar size={15} className="solid" />
            <FaStar size={15} className="solid" />
            <FaStar size={15} className="solid" />
            <FaRegStar size={15} className="regular" />
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="box">
          <div className="image">
            <img src={avatar2} alt="" />
          </div>
          <h3>John Doe</h3>
          <div className="rate">
            <FaStar size={15} className="solid" />
            <FaStar size={15} className="solid" />
            <FaStar size={15} className="solid" />
            <FaStar size={15} className="solid" />
            <FaRegStar size={15} className="regular" />
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="box">
          <div className="image">
            <img src={avatar3} alt="" />
          </div>
          <h3>Owen Bonilla</h3>
          <div className="rate">
            <FaStar size={15} className="solid" />
            <FaStar size={15} className="solid" />
            <FaStar size={15} className="solid" />
            <FaStar size={15} className="solid" />
            <FaRegStar size={15} className="regular" />
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
