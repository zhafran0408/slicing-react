import React from "react";
import ilustrasi from "./assets/hero.svg"; 

export default function AboutSection(){
    return(
        <section className="w-full py-20 px-6">
                  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Great <span className="text-purple-600">Product</span> is <br />
            <span className="font-extrabold">
              built by great <span className="text-purple-600">teams</span>
            </span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            We help build and manage a team of world-class developers
            to bring your vision to life
          </p>

          <button className="px-6 py-3 rounded-md text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-500 shadow-md hover:opacity-90 transition">
            Let's get started!
          </button>
        </div>

      
        <div className="flex justify-center lg:justify-end">
          <img
            src={ilustrasi}
            alt="Team Illustration"
            className="w-full max-w-xl"
          />
        </div>

      </div>
    </section>
    );
}
