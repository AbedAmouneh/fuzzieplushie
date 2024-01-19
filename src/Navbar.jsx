import React from "react";
import './Navbar.css';
import logo from "./assets/Logo.svg";
import shopCart from "./assets/shopCart.svg"

function Navbar() {

  return (
      <>
          <div className="navbar-container">
              <div className="left-navbar-section">
                  <div className="navbar-text">Home</div>
                  <div className="navbar-text">Shop</div>
                  <div className="navbar-text">About us</div>
              </div>
              <div className="navbar-logo-container">
                  <img src={logo} className="navbar-logo" alt="logo" />
                </div>
              <div className="right-navbar-section">
                  <div className="navbar-text">Customize</div>
                  <div className="navbar-text">Sign Up</div>
                  <div className="navbar-text">Log In</div>
                    <div className="nav-search-container">
                        <input className="nav-search" type="text" placeholder="search..." />
                        <img src={shopCart} className="nav-shop" alt="shopcart" />
                </div>
              </div>
          </div>
    </>
  )
}

export default Navbar
