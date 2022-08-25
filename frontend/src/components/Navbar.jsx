import React from "react";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FaInfoCircle } from "react-icons/fa";
import { BsFillFileCodeFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="navbar_container">
      <nav className="navbar">
        <ul className="navbar_ul">
          <li className="navbar_li">
            <Link to="/">
              <FaHome className="nav_icon" />

              <div className="nav_icon_name">Home</div>
            </Link>
          </li>
          <li className="navbar_li">
            <Link to="/about">
              <FaInfoCircle className="nav_icon" />
              <div className="nav_icon_name">About </div>
            </Link>
          </li>
          <li className="navbar_li">
            <Link to="/projects">
              <BsFillFileCodeFill className="nav_icon" />
              <div className="nav_icon_name">Projects </div>
            </Link>
          </li>
          <li className="navbar_li">
            <Link to="/contact">
              <IoMdContact className="nav_icon" />
              <div className="nav_icon_name">Contact </div>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
