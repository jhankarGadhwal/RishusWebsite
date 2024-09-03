import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  // State to track whether the menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu open/closed
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/services" onClick={toggleMenu}>Services</Link>
          </li>
          <li>
            <Link to="/projects" onClick={toggleMenu}>Projects</Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
        <div className="contact-info">
          <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
          <a
            href="https://api.whatsapp.com/send/?phone=%2B918959409296&text&type=phone_number&app_absent=0"
            target="_blank"
            className="contact-number"
          >
            91+ 8959409296
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
