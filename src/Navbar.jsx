import React from "react";
import './Navbar.css';
import logo from "./assets/Logo.svg";

function Navbar() {

  return (
      <>
          <div className="navbar-container">
              <div className="left-navbar-section">
                  <div className="navbar-text">Home</div>
                  <div className="navbar-text">Shop</div>
                  <div className="navbar-text">About us</div>
              </div>
              <img src={logo} className="navbar-logo" alt="logo" />
              <div className="right-navbar-section">
                  <div className="navbar-text">Customize</div>
                  <div className="navbar-text">Sign Up</div>
                  <div className="navbar-text">Log In</div>
              </div>
          </div>
    </>
  )
}

export default Navbar
