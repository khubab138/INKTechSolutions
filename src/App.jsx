import React, { useState } from "react";
import LoadingScreen from "./Components/LoadingScreen";
import Navbar from "./Components/Navbar";
import MobileMenu from "./Components/MobileMenu";
import Home from "./Components/Sections/Home";
import Services from "./Components/Sections/Services";
import About from "./Components/Sections/About";
import Contact from "./Components/Sections/Contact";
import Projects from "./Components/Sections/Projects";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        style={{
          backgroundColor: "rgb(29, 29, 29)",
          backgroundImage: `radial-gradient(
      ellipse 80% 80% at 50% -20%,
      rgba(72, 72, 72, 0.726),
      rgba(1, 1, 1, 0)
    )`,
        }}
        className={`min-h-screen max-w-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {menuOpen && (
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        )}
        <Home isLoaded={isLoaded} />
        <Projects />
        <Services />
        <About />
        <Contact />
      
      </div>
    </>
  );
};

export default App;
