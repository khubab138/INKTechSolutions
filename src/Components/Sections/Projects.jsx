import React, { useState, useEffect } from "react";
import OdometerCounter from "../OdometerCounter";
import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  const [branding, setBranding] = useState(0);
  const [webDev, setWebDev] = useState(0);
  const [designing, setDesigning] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    // Simulating fetching or live updates
    const brandTimer = setTimeout(() => setBranding(77), 1000);
    const webDevTimer = setTimeout(() => setWebDev(130), 1300);
    const designnTimer = setTimeout(() => setDesigning(320), 1600);
    const clientsTimer = setTimeout(() => setClients(577), 1900);

    return () => {
      clearTimeout(brandTimer);
      clearTimeout(webDevTimer);
      clearTimeout(designnTimer);
      clearTimeout(clientsTimer);
    };
  }, []);

  return (<RevealOnScroll>
    <section id="project" className="min-h-screen flex items-center">
      <div className="max-w-8xl  mx-auto px-4 ">
        <h2 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r  from-blue-800/80 to-cyan-500  bg-clip-text text-transparent ">
          Projects:
        </h2>
        <p className="text-xl font-thin text-gray-400">
          Let's see some interesting numbers
        </p>

        <div className=" mb-3 grid grid-cols-1  md:grid-cols-2 gap-6">
          <div className=" grid grid-cols-2 justify-between items-center gap-5 p-4 ">
            <h3 className="text-xl font-bold ">Branding:</h3>
            <span className="text-blue-500 text-6xl glow-text "
            >
              <OdometerCounter value={branding} />
            </span>
          </div>
          <div className=" grid grid-cols-2 justify-between items-center gap-5 p-4 ">
            <h3 className="text-xl font-bold "> Web Development:</h3>
            <span className="text-blue-500 text-6xl glow-text">
              <OdometerCounter value={webDev} />
            </span>
          </div>
          <div className=" grid grid-cols-2 justify-between items-center gap-5 p-4 ">
            <h3 className="text-xl font-bold "> Designs:</h3>
            <span className="text-blue-500 text-6xl glow-text">
              <OdometerCounter value={designing} />
            </span>
          </div>
          <div className=" grid grid-cols-2 justify-between items-center gap-5 p-4 ">
            <h3 className="text-xl font-bold "> Clients:</h3>
            <span className="text-blue-500 text-6xl glow-text">
              <OdometerCounter value={clients} />
            </span>
          </div>
        </div>
      </div>
    </section>
    </RevealOnScroll>
  );
};

export default Projects;
