import React from "react";
import "./Dishes.css";
import { FaCartPlus } from "react-icons/fa";
import dishe01 from "../assets/dishe-01.png";
import dishe02 from "../assets/dishe-02.png";
import dishe03 from "../assets/dishe-03.png";
import dishe04 from "../assets/dishe-04.png";
import dishe05 from "../assets/dishe-05.png";
import dishe06 from "../assets/dishe-06.png";
import dishe07 from "../assets/dishe-07.png";
import dishe08 from "../assets/dishe-08.png";
import dishe09 from "../assets/dishe-09.png";
import dishe10 from "../assets/dishe-10.png";
import { FaStar, FaRegStar } from "react-icons/fa";

const Dishes = () => {
  return (
    <div className="dishes" id="dishes">
      <h2 className="special-heading">Popular Dishes</h2>
      <div className="container">
        <div className="box">
          <div className="cart-favorit">
            <a href="#">
              <FaCartPlus size={20} />
            </a>
            <a href="#">
              <i className="fa-regular fa-heart"></i>
            </a>
          </div>
          <img src={dishe01} alt="dishe-01" />
          <h3>Big Mac</h3>
          <div className="rate-price">
            <div className="rate">
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <FaRegStar size={15} className="regular" />
            </div>
            <p className="price">$ 3</p>
          </div>
        </div>
        <div className="box">
          <div className="cart-favorit">
            <a href="#">
              <FaCartPlus size={20} />
            </a>
            <a href="#">
              <i className="fa-regular fa-heart"></i>
            </a>
          </div>
          <img src={dishe02} alt="" />
          <h3>Double Cheeseburger</h3>
          <div className="rate-price">
            <div className="rate">
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <FaRegStar size={15} className="regular" />
            </div>
            <p className="price">$ 5</p>
          </div>
        </div>
        <div className="box">
          <div className="cart-favorit">
            <a href="#">
              <FaCartPlus size={20} />
            </a>
            <a href="#">
              <i className="fa-regular fa-heart"></i>
            </a>
          </div>
          <img src={dishe03} alt="" />
          <h3>Cheeseburger</h3>
          <div className="rate-price">
            <div className="rate">
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <FaRegStar size={15} className="regular" />
            </div>
            <p className="price">$ 5</p>
          </div>
        </div>
        <div className="box">
          <div className="cart-favorit">
            <a href="#">
              <FaCartPlus size={20} />
            </a>
            <a href="#">
              <i className="fa-regular fa-heart"></i>
            </a>
          </div>
          <img src={dishe04} alt="" />
          <h3>Sausage Biscuit</h3>
          <div className="rate-price">
            <div className="rate">
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <FaRegStar size={15} className="regular" />
            </div>
            <p className="price">$ 2</p>
          </div>
        </div>
        <div className="box">
          <div className="cart-favorit">
            <a href="#">
              <FaCartPlus size={20} />
            </a>
            <a href="#">
              <i className="fa-regular fa-heart"></i>
            </a>
          </div>
          <img src={dishe05} alt="" />
          <h3>Sausage Burrito</h3>
          <div className="rate-price">
            <div className="rate">
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <i className="fa-solid fa-star-half-stroke solid"></i>
            </div>
            <p className="price">$ 3</p>
          </div>
        </div>
        <div className="box">
          <div className="cart-favorit">
            <a href="#">
              <FaCartPlus size={20} />
            </a>
            <a href="#">
              <i className="fa-regular fa-heart"></i>
            </a>
          </div>
          <img src={dishe06} alt="" />
          <h3>Bacon, Egg & Cheese Biscuit Meal</h3>
          <div className="rate-price">
            <div className="rate">
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <i className="fa-solid fa-star-half-stroke solid"></i>
            </div>
            <p className="price">$ 3</p>
          </div>
        </div>
        <div className="box">
          <div className="cart-favorit">
            <a href="#">
              <FaCartPlus size={20} />
            </a>
            <a href="#">
              <i className="fa-regular fa-heart"></i>
            </a>
          </div>
          <img src={dishe07} alt="" />
          <h3>Crispy Chicken Sandwich</h3>
          <div className="rate-price">
            <div className="rate">
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <i className="fa-solid fa-star-half-stroke solid"></i>
            </div>
            <p className="price">$ 3</p>
          </div>
        </div>
        <div className="box">
          <div className="cart-favorit">
            <a href="#">
              <FaCartPlus size={20} />
            </a>
            <a href="#">
              <i className="fa-regular fa-heart"></i>
            </a>
          </div>
          <img src={dishe08} alt="" />
          <h3>Mocha</h3>
          <div className="rate-price">
            <div className="rate">
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <i className="fa-solid fa-star-half-stroke solid"></i>
            </div>
            <p className="price">$ 2</p>
          </div>
        </div>
        <div className="box">
          <div className="cart-favorit">
            <a href="#">
              <FaCartPlus size={25} />
            </a>
            <a href="#">
              <i className="fa-regular fa-heart"></i>
            </a>
          </div>
          <img src={dishe09} alt="" />
          <h3>Cappuccino</h3>
          <div className="rate-price">
            <div className="rate">
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <FaStar size={15} className="solid" />
              <i className="fa-solid fa-star-half-stroke solid"></i>
            </div>
            <p className="price">$ 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dishes;
