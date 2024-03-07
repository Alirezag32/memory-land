import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faUser,
  faShoppingCart,
  faHome,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import logo from '../images/logo.jfif'
import '../styles/navbar.css'
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
          const [searchQuery, setSearchQuery] = useState("");

          const handleSearch = () => {
            
            console.log("Searching for:", searchQuery);
          };

          const handleChange = (e) => {
            setSearchQuery(e.target.value);
            handleSearch();
          };

  return (
    <div className="nav-continer">
      <nav>
        <div className="nav-right">
          <div>
            <Link to={"/"}>
              <img className="navbar-logo" src={logo} alt="" />
            </Link>
          </div>

          <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} />
            <input
              maxLength={100}
              type="text"
              placeholder="جستجو..."
              value={searchQuery}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="nav-left">
          <div className="continer-login-button">
            <FontAwesomeIcon icon={faUser} />
            <Link to={"/register"}>ورود به حساب کاربری</Link>
          </div>
          <div className="shoppingCart-icon">
            <a href="#">
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
          </div>
        </div>
      </nav>
      <div className="nav-buttom row">
        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1  ">خانه</div>
        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 ">پنل همکاران</div>
        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 ">درباره ما </div>
        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 ">تماس با ما</div>
        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 ">
          اخبار و وبلاگ
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 ">
          گارانتی و خدمات پس از فروش
        </div>
      </div>
    </div>
  );
};

export default Navbar;
