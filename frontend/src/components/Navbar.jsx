import React from "react";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar_container">
      <nav className="navbar">
        <ul className="navbar_ul">
          <li className="navbar_li">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar_li">
            <Link to="/about">About Me</Link>
          </li>
          <li className="navbar_li">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="navbar_li">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
