import React from "react";
import { motion } from "framer-motion";

// HERO IMAGE (thumbnail video)
import heroImage from "./assets/team.png";

// LOGO IMPORT
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.png";

export default function HeroSection() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <section className="w-full bg-white overflow-hidden">

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid grid-cols-1 lg:grid-cols-2 gap-14">
        
        {/* LEFT TEXT */}
        <div className="flex flex-col">
          <div className="w-12 h-1 bg-purple-600 mb-6"></div>

          <h1 className="text-3xl lg:text-4xl font-semibold leading-snug text-gray-900">
            Leading companies trust us <br />
            <span className="font-bold">to develop software</span>
          </h1>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-md">
            We{" "}
            <span className="text-purple-600 font-medium">
              add development capacity
            </span>{" "}
            to tech teams. Our value isn’t limited to building teams but is
            equally distributed across the project lifecycle. We are a custom
            software development company that guarantees the successful delivery
            of your project.
          </p>

          <button className="mt-8 flex items-center gap-2 text-purple-700 font-semibold hover:underline">
            See more Informations →
          </button>
        </div>

        {/* RIGHT IMAGE + PLAY BUTTON */}
        <div className="relative w-full">
          <img
            src={heroImage}
            alt="hero"
            className="rounded-2xl w-full object-cover shadow-md"
          />

          {/* PLAY BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 flex items-center justify-center 
              bg-white/70 backdrop-blur-lg rounded-full shadow-xl cursor-pointer">

              <div className="w-0 h-0 
                border-t-[12px] border-t-transparent 
                border-b-[12px] border-b-transparent 
                border-l-[18px] border-l-purple-600 ml-1">
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MEET THE PEOPLE */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-10">
        <div className="w-12 h-1 bg-purple-600 mb-4"></div>

        <h2 className="text-2xl lg:text-3xl font-medium">Meet the People</h2>

        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
          We are Working With
        </h3>
      </div>

      {/* AUTO LOGO SLIDER */}
      <div className="w-full overflow-hidden py-12 mt-6 bg-white">
        <motion.div
          className="flex gap-20 items-center"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition"
            />
          ))}
        </motion.div>
      </div>

    </section>
  );
}

