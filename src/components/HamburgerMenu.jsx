import React from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  return (
    <div>
      <input type="checkbox" id="active" />

      <label htmlFor="active" className="menu-btn">
        <span></span>
      </label>
      {/* <label for="active" class="close"></label> */}
      <div className="wrapper">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
