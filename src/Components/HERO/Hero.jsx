import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="content">
        <svg className="front" viewBox="0 0 3200 300">
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            Welcome to DJ JUSUFS WEBSITE
          </text>
        </svg>
        <div className="second">
          <div class="paragraph">
            <p>
              Always the latest hits on this planet! <br />
              <em>Spinning Beats & Keeping the Peace</em>
            </p>
          </div>
          <div class="buttton">
            <button type="button">
              <span></span>
              Press here for some music
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
