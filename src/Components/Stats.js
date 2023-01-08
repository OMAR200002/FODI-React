import React from "react";
import "./Stats.css";

const Stats = () => {
  return (
    <div className="stats" id="stats">
      <h2 className="special-heading">Our Stats</h2>
      <div className="container">
        <div className="box">
          <i className="fa-regular fa-face-smile fa-3x"></i>
          <p className="number">5000</p>
          <p className="text">Happy Customers</p>
        </div>
        <div className="box">
          <i className="fa-regular fa-user fa-3x"></i>
          <p className="number">3000</p>
          <p className="text">Happy Customers</p>
        </div>
        <div className="box">
          <i className="fa-solid fa-cart-shopping fa-3x"></i>
          <p className="number">125</p>
          <p className="text">Available Products</p>
        </div>
        <div className="box">
          <i className="fa-solid fa-check-double fa-3x"></i>
          <p className="number">7000</p>
          <p className="text">Completed Orders</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
