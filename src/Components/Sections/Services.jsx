import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const Services = () => {
  const webDev = [
    "Startup",
    "Landings and Promo",
    "E-Commerce",
    "Web Applications",
  ];
  const digitalMarketing = [
    "Conversation",
    "Content",
    "influencer",
    "Email And Cold_DM's",
  ];

  const photoGraphy = ["Products", "Fasion", "Events"];
  const Designing = [
    "Logo",
    "Pakaging",
    "Banners",
    "Bussines Cards",
    "Social Media Poster",
    "Labels",
  ];
  const Printing = [
    "Panaflex",
    "T-Shirts",
    "Visiting Cards",
    "Certificates",
    "Flyer",
    "Bags",
  ];

  return (      <RevealOnScroll>
    <section
      id="services"
      className="min-h-screen flex items-center justify-center "
    >
    
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r  from-blue-800/80 to-cyan-500  bg-clip-text text-transparent ">
          Services
        </h2>
        <div className=" rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            From custom websites to full-scale marketing campaigns, professional
            printing, and visual storytelling, our services are tailored to help
            your business stand out and succeed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Web Development</h3>
              <div className="flex flex-wrap gap-2 ">
                {webDev.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/80 text-blue-200 py-1 px-3 rounded text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Digital Marketing</h3>
              <div className="flex flex-wrap gap-2 ">
                {digitalMarketing.map((mark, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/80 text-blue-200 py-1 px-3 rounded text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {mark}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Designing</h3>
              <div className="flex flex-wrap gap-2 ">
                {Designing.map((des, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/80 text-blue-200 py-1 px-3 rounded text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {des}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Photography</h3>
              <div className="flex flex-wrap gap-2 ">
                {photoGraphy.map((pho, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/80 text-blue-200 py-1 px-3 rounded text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {pho}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Printings</h3>
              <div className="flex flex-wrap gap-2 ">
                {Printing.map((print, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/80 text-blue-200 py-1 px-3 rounded text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {print}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      </RevealOnScroll  >
  );
};

export default Services;
