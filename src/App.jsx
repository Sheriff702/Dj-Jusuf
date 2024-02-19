import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/HERO/Hero.jsx";
import "./App.css";

function App() {
  const [variant, setVariant] = useState("A"); // Standardinställning till 'A' för att säkerställa att den initiala renderingen har ett definierat tillstånd

  useEffect(() => {
    // Slumpmässigt välj en variant vid komponentens montering
    const selectedVariant = Math.random() < 0.5 ? "A" : "B";
    setVariant(selectedVariant);
  }, []);

  return (
    <>
      <Navbar variant={variant} />
      <Hero variant={variant} />
    </>
  );
}

export default App;
