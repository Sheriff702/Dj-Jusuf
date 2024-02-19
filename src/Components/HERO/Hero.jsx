import React, { useState, useEffect } from "react";
import "./Hero.css";

function Hero() {
  // State to manage which variant of the button text to display
  const [buttonVariant, setButtonVariant] = useState("");

  // Effect hook to randomly choose a button text variant when the component mounts
  useEffect(() => {
    // Randomly set the button variant to A or B
    const variant =
      Math.random() < 0.5 ? "Press here for some music" : "Discover new beats";
    setButtonVariant(variant);
  }, []);

  // Function to handle button clicks
  const handleButtonClick = () => {
    console.log(`Button clicked: ${buttonVariant}`);
    // In a real scenario, replace console.log with tracking code/logic
  };

  return (
    <>
      <div className="content">
        <svg className="front" viewBox="0 0 3200 300">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            Welcome to DJ JUSUFS WEBSITE
          </text>
        </svg>
        <div className="second">
          <div className="paragraph">
            <p>
              Always the latest hits on this planet! <br />
              <em>Spinning Beats & Keeping the Peace</em>
            </p>
          </div>
          <div className="buttton">
            <button type="button" onClick={handleButtonClick}>
              <span></span>
              {buttonVariant}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
