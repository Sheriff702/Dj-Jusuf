import React from "react";
import "./Hero.css";

function Hero({ variant }) {
  // Bestäm knappens text baserat på varianten A eller B
  const buttonText =
    variant === "A" ? "Press here for some music" : "Discover new beats";
  const buttonVariantClass =
    variant === "A" ? "button-variant-a" : "button-variant-b";

  // Funktion för att hantera knapptryckningar
  const handleButtonClick = () => {
    console.log(`Button clicked: ${buttonText}`);
  };
  const svgVariantClass = variant === "A" ? "svg-variant-a" : "svg-variant-b";
  return (
    <div className="content">
      <svg className={`front ${svgVariantClass}`} viewBox="0 0 3200 300">
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
            <span></span>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
