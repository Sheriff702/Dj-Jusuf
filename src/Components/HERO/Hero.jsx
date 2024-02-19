// Hero.jsx
import React from "react";
import "./Hero.css";

function Hero({ variant }) {
  // Determine the button text based on the variant A or B
  const buttonText =
    variant === "A" ? "Press here for some music" : "Discover new beats";
  const buttonVariantClass =
    variant === "A" ? "button-variant-a" : "button-variant-b";

  // Function to handle button clicks
  const handleButtonClick = () => {
    console.log(`Button clicked: ${buttonText}`);
  };

  return (
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
        <div className="button-container">
          <button
            type="button"
            onClick={handleButtonClick}
            className={`button-base ${buttonVariantClass}`}
          >
            <span></span> {/* This span is for the hover effect */}
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
