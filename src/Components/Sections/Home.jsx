import { useState, useEffect } from "react";
import React from "react";
import Typewriter from "../TypeWriter";
import RevealOnScroll from "../RevealOnScroll";


const Home = ({ isLoaded }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (    <RevealOnScroll>
    <section
      id="home"
      className="min-h-screen  min-w-screen flex relative items-center-safe lg:items-center"
    >
   
      <div className=" z-50 text-center w-full px-2 ">
        <h1 className="min-h-30 text-4xl  lg:text-7xl font-bold bg-gradient-to-r from-blue-800/80 to-cyan-500  bg-clip-text text-transparent  flex justify-center items-center">
          {isLoaded &&  <Typewriter/> /*"Hello!,Welcome to INKTech Solutions"*/}
        </h1>
        <p
          className={`lg:text-3xl  text-xl   mb-4   transition-opacity duration-500 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          We blend innovative thinking with technical expertise to bring your
          boldest ideas to life.
        </p>
      </div>
    </section>
      </RevealOnScroll>
  );
};

export default Home;
