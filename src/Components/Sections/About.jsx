import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LuBoxes } from "react-icons/lu";
import { TbDeviceDesktopCheck } from "react-icons/tb";
import { FaPeopleCarry } from "react-icons/fa";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  return ( <RevealOnScroll>
    <section id="about" className="min-h-screen flex items-center py-20">
      
      <div className="max-w-5xl mx-auto px-4  ">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r  from-blue-800/80 to-cyan-500  bg-clip-text text-transparent ">
          About Us
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className=" mb-3 gap-3">
          <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition " >
          <HiOutlineLightBulb className="text-6xl text-blue-400 " />
          <h3 className="text-xl font-bold mb-2" >We Are Ceative</h3>
          <p className="text-gray-400 mb-4">
            We are masters in innovative, agile creative approaches in producing
            websites. Our refreshing way of working brings the best possible
            results for our clients. We deliver beautifully crafted projects
            with passion{" "}
          </p>
          </div>
        </div>
        <div className=" mb-2 gap-3">
          <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition " >
          <LuBoxes className="text-6xl text-blue-400 " />
          <h3 className="text-xl font-bold mb-2" >Services</h3>
          <p className="text-gray-400 mb-4">
          We love our services,Our approach to the work process, from sketch to development. It’s true magic when the concept comes to life in a pixel-perfect design and fully functional website. 
          </p>
          </div>
        </div>
        <div className=" mb-2 gap-3">
          <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition " >
          <TbDeviceDesktopCheck className="text-6xl text-blue-400 " />
          <h3 className="text-xl font-bold mb-2" >Technology</h3>
          <p className="text-gray-400 mb-4">
          We create highly-usable websites that are powered by an array of technologies and then we analyze performance data to optimize and refine. 
          </p>
          </div>
        </div>
        <div className=" mb-2 gap-3">
          <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition " >
          <FaPeopleCarry className="text-5xl text-blue-400 " />
          <h3 className="text-xl font-bold mb-2" >Best Team</h3>
          <p className="text-gray-400 mb-4">
          Our team provides personal, professional and friendly service which carefully considers your business goals and requirements. Got one? Let’s make outstanding work together! 
          </p>
          </div>
        </div>
      </div>
      </div>
    </section>
      </RevealOnScroll>
  );
};

export default About;
