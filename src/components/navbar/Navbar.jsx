import React from "react";
import { NavLink } from "react-router-dom";
import "../navbar/style.css";

const Navbar = () => {
  return (
    <div className="h12">
      <h2 className="po2">Explore.</h2>

      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/service">Service</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
      </ul>
    </div>
  );
};

export default Navbar;