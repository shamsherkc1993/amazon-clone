import React from "react";
import HeaderPart from "./HeaderPart.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Header = ({ cart }) => {
  console.log(cart);
  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            src="https://p7.hiclipart.com/preview/134/12/5/united-states-amazon-com-logo-retail-company-book-now-button.jpg"
            alt="logo"
            className="logo"
          />
        </Link>
        <div className="header-search">
          <input type="text" />
          <SearchIcon className="search-icon" />
        </div>
        <div className="header-nav">
          <div className="hearder-option">
            <span className="headerspan-one">Hello kc</span>
            <span className="headerspan-two">sign-in</span>
          </div>
          <div className="hearder-option">
            <span className="headerspan-one">Return</span>
            <span className="headerspan-two">Order</span>
          </div>
          <div className="hearder-option">
            <span className="headerspan-one">Your</span>
            <span className="headerspan-two">Prime</span>
          </div>
          <div className="header-optionbasket">
            <Link to="/cart">
              <ShoppingCartIcon />
              <span>{cart.total_items}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="hearer-bottom">
        <ul>
          <li>All</li>
          <li>Mobile</li>
          <li>Clothes</li>
          <li>Electrobics</li>
          <li>Shoes</li>
          <li>
            <img
              src="https://www.globalconveniencestorefocus.co.uk/wp-content/uploads/2020/09/logo-600x121.png"
              alt="bottomheaderimg"
              className="bottomimg"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
