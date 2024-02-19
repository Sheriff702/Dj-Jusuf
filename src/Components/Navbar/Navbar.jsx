import React from "react";
import logo from "./Wiggle_logo.png"; // Ensure the path to your logo is correct
import "./Navbar.css"; // Ensure you have a CSS file for Navbar styles

function Navbar({ variant }) {
  const style =
    variant === "A"
      ? {
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(0, 255, 0, 0))",
        }
      : {
          background:
            "linear-gradient(to bottom, rgba(0, 255, 0, 0.3), rgba(0, 255, 0, 0))",
        };

  return (
    <div className="navbar" style={style}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="nav-links">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">BOOKINGS</a>
          </li>
          <li>
            <a href="/">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
