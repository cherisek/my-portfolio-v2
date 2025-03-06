import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import hamburger from "../../images/hamburger.svg";
import close from "../../images/close.svg";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <div className="navigation-container">
        <img src={logo} alt="logo" className="logo" />
        <img 
          src={isOpen ? close : hamburger}
          alt="menu" 
          className={`menu-icon ${isOpen ? "close" : "hamburger"}`}
          onClick={() => setIsOpen(!isOpen)}
        />
        <div className={`navigation-links ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink to="/" 
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio"  
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                  Portfolio
              </NavLink>
            </li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
  )
}; 
