import React, { useState, useRef } from "react";

// IMPORT AVATAR
import avatar1 from "./assets/profile.png";
import avatar2 from "./assets/profile.png";
import avatar3 from "./assets/profile.png";
import avatar4 from "./assets/profile.png";
import avatar5 from "./assets/profile.png";

export default function TestimonialSection() {
  const data = [
    {
      name: "Romaena De Silva",
      company: "Jomet Cosmetics",
      avatar: avatar1,
      rating: 5,
      text: `Without any doubt I recommend Alcaline Solutions as one of the 
      best web design and digital marketing agencies. One of the best agencies 
      I’ve came across so far.`,
    },
    {
      name: "Romaena De Silva",
      company: "Jomet Cosmetics",
      avatar: avatar2,
      rating: 5,
      text: `Amazing service! Professional and very easy to work with.`,
    },
    {
      name: "Imran Khan",
      company: "Software Engineer",
      avatar: avatar3,
      rating: 5,
      text: `High-quality result with fast delivery. Truly recommended.`,
    },
    {
      name: "Romaena De Silva",
      company: "Jomet Cosmetics",
      avatar: avatar4,
      rating: 5,
      text: `Very talented team. Smooth workflow and great communication.`,
    },
    {
      name: "Romaena De Silva",
      company: "Jomet Cosmetics",
      avatar: avatar5,
      rating: 5,
      text: `Everything delivered was beyond expectation.`,
    },
  ];

  const [index, setIndex] = useState(0);
  const scrollRef = useRef(null);

  // Fix: DETECT CURRENT ITEM BASED ON REAL ITEM WIDTH
  const handleScroll = () => {
    const container = scrollRef.current;
    const scrollX = container.scrollLeft;

    const itemWidth = 140; // FIXED WIDTH: avatar + spacing
    const newIndex = Math.round(scrollX / itemWidth);

    if (newIndex >= 0 && newIndex < data.length) {
      setIndex(newIndex);
    }
  };

  // Desktop arrows
  const prev = () => setIndex(index === 0 ? data.length - 1 : index - 1);
  const next = () => setIndex(index === data.length - 1 ? 0 : index + 1);

  return (
    <div className="w-full flex justify-center py-20">
      <div className="relative w-[95%] md:w-[85%] border border-blue-400 p-10 rounded-xl bg-white">

        {/* Purple top bar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-28 h-1 bg-purple-600 rounded-full"></div>

        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl font-light">Why customers love</h2>
          <h3 className="text-3xl font-bold mt-1">working with us</h3>
        </div>

        {/* Testimonial Text */}
        <p className="max-w-2xl text-center mx-auto mt-10 text-gray-700 leading-relaxed">
          {data[index].text}
        </p>

        {/* ARROW LEFT (desktop) */}
        <button
          onClick={prev}
          className="hidden md:flex absolute left-[-20px] top-1/2 -translate-y-1/2 
          w-10 h-10 rounded-full border border-purple-600 items-center 
          justify-center hover:bg-purple-100 transition"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#7C3AED"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* ARROW RIGHT (desktop) */}
        <button
          onClick={next}
          className="hidden md:flex absolute right-[-20px] top-1/2 -translate-y-1/2 
          w-10 h-10 rounded-full border border-purple-600 items-center 
          justify-center hover:bg-purple-100 transition"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#7C3AED"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* AVATARS */}
        <div className="mt-12 md:mt-16">

          {/* MOBILE: horizontal scroll */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex md:hidden gap-6 overflow-x-auto px-2 pb-4 scroll-smooth"
          >
            {data.map((p, i) => (
              <div
                key={i}
                className="flex flex-col items-center min-w-[140px] snap-center"
              >
                <img
                  src={p.avatar}
                  className={`w-20 h-20 rounded-full object-cover transition
                  ${i === index ? "ring-4 ring-purple-600 shadow-xl scale-105" : ""}`}
                />

                <div className="text-yellow-400 mt-2 flex gap-1 text-lg">
                  {[...Array(p.rating)].map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>

                <p className="font-semibold text-sm mt-1">{p.name}</p>
                <p className="text-xs text-gray-500">{p.company}</p>
              </div>
            ))}
          </div>

          {/* DESKTOP */}
          <div className="hidden md:grid grid-cols-5 gap-6 place-items-center">
            {data.map((p, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className="cursor-pointer flex flex-col items-center"
              >
                <img
                  src={p.avatar}
                  className={`w-20 h-20 rounded-full object-cover transition
                  ${i === index ? "ring-4 ring-purple-600 shadow-xl scale-105" : ""}`}
                />

                <div className="text-yellow-400 mt-2 flex gap-1 text-lg">
                  {[...Array(p.rating)].map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>

                <p className="font-semibold text-sm mt-1">{p.name}</p>
                <p className="text-xs text-gray-500">{p.company}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}









