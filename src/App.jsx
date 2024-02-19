import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx"; // Adjust the import path as necessary
import Hero from "./Components/HERO/Hero.jsx";
import "./App.css"; // Assuming your global styles are here

function App() {
  const [variant, setVariant] = useState("A"); // Default to 'A' to ensure initial render has a defined state

  useEffect(() => {
    // Randomly select a variant on component mount
    const selectedVariant = Math.random() < 0.5 ? "A" : "B";
    setVariant(selectedVariant);
  }, []);

  return (
    <>
      <Navbar variant={variant} />
      <Hero variant={variant} />
      {/* Insert other components that might need the variant */}
    </>
  );
}

export default App;
