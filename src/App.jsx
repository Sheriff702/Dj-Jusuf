import * as React from "react";
import "./App.css";
import Hero from "./Components/HERO/Hero.jsx";
import logo from "./Wiggle_logo.png";

function App() {
  return (
    <>
      <div className="navbar">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="#">BOOKINGS</a>
            </li>
            <li>
              <a href="#">CONTACT</a>{" "}
            </li>
          </ul>
        </div>
      </div>
      <Hero />
    </>
  );
}

export default App;
