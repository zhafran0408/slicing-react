import React from "react";

// IMPORT ICONS (ganti sesuai filenya)
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/code.png";
import icon3 from "./assets/icon2.png";
import icon4 from "./assets/icon3.png";
import icon5 from "./assets/icon5.png";
import icon6 from "./assets/icon4.png";



export default function ApproachSection() {
  const items = [
    {
      icon: icon1,
      title: "UX Driven Engineering",
      desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      bg: "bg-purple-100",
    },
    {
      icon: icon2,
      title: "Developing Shared Understanding",
      desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      bg: "bg-blue-100",
    },
    {
      icon: icon3,
      title: "Proven Experience and Expertise",
      desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      bg: "bg-green-100",
    },
    {
      icon: icon4,
      title: "Security & Intellectual Property (IP)",
      desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      bg: "bg-yellow-100",
    },
    {
      icon: icon5,
      title: "Code Reviews",
      desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      bg: "bg-pink-100",
    },
    {
      icon: icon6,
      title: "Quality Assurance & Testing",
      desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      bg: "bg-indigo-100",
    },
  ];

  return (
    <>
      {/* APPROACH SECTION */}
      <section className="w-full px-6 md:px-16 lg:px-32 py-20 bg-[#f8fafc]">
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <div className="w-12 h-1 bg-purple-500 rounded-full mb-4"></div>
          </div>
          <p className="text-gray-700 text-sm">Our design and</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            development <span className="text-black">approach</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-2">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              {/* ICON */}
              <div
                className={`mb-4 w-16 h-16 flex items-center justify-center ${item.bg} rounded-full`}
              >
                <img src={item.icon} alt="" className="w-8 h-8" />
              </div>

              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION (tanpa garis) */}
      <section className="w-full px-6 md:px-16 lg:px-32 py-12">
        <div
          className="
            w-full flex flex-col md:flex-row items-center justify-between
            bg-gradient-to-r from-[#E8F0FF] to-[#F4F7FC]
            rounded-2xl md:rounded-3xl
            p-8 md:p-12
          "
        >
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 leading-snug mb-6 md:mb-0">
            Hire the best developers and <br className="hidden md:block" />
            designers around!
          </h2>

          {/* BUTTON ONLY */}
          <button
            className="
              px-6 py-3 
              text-white font-semibold text-sm
              rounded-lg
              bg-gradient-to-r from-[#FF5F6D] to-[#FFC371]
              shadow-md hover:shadow-lg transition
            "
          >
            Hire Top Developers
          </button>
        </div>
      </section>
    </>
  );
}

