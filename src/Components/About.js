import React from "react";
import "./About.css";
import about from "../assets/about.svg";
import { FaShippingFast } from "react-icons/fa";
import { BsCurrencyDollar, BsHeadphones } from "react-icons/bs";

const About = () => {
  return (
    <div className="about" id="about">
      <h2 className="special-heading">Why Choose Us?</h2>
      <div className="container">
        <img src={about} alt="" />
        <div className="text">
          <h2>Best Food in The Country</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            sequi corrupti corporis quaerat voluptatem ipsam neque labore modi
            autem, saepe numquam quod reprehenderit rem? Tempora aut soluta odio
            corporis nihil! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Aperiam, nemo. Sit porro illo eos cumque deleniti iste alias,
            eum natus.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            sequi corrupti corporis quaerat voluptatem ipsam neque labore modi
            autem, saepe numquam quod reprehenderit rem? Tempora aut soluta odio
            corporis nihil! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Aperiam, nemo. Sit porro illo eos cumque deleniti iste alias,
            eum natus.
          </p>
          <div className="qualities">
            <div>
              <FaShippingFast size={20} />
              Fast Delivery
            </div>
            <div>
              <BsCurrencyDollar size={20} />
              Esay Payment
            </div>
            <div>
              <BsHeadphones size={20} />
              24/7 Services
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
