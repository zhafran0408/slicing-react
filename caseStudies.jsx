import React from "react";

import case1 from "./assets/case1.jpg";
import case2 from "./assets/case2.jpg";
import case3 from "./assets/case3.jpg";

const caseStudies = [
  {
    id: 1,
    title: "Website Design for SCFC Canada",
    desc: "Born out of a vision, a simple-minded objective that puts user comfortability and user experience in the spotlight.",
    img: case1,
    bg: "bg-[#EEF3FF]",
  },
  {
    id: 2,
    title: "Website Design for SCFC Canada",
    desc: "Born out of a vision, a simple-minded objective that puts user comfortability and user experience in the spotlight.",
    img: case2,
    bg: "bg-[#E2FFF4]",
  },
  {
    id: 3,
    title: "Website Design for SCFC Canada",
    desc: "Born out of a vision, a simple-minded objective that puts user comfortability and user experience in the spotlight.",
    img: case3,
    bg: "bg-[#FFECEC]",
  },
];

export default function CaseStudies() {
  return (
    <section className="w-full py-16 px-4 md:px-16">
     
      <div className="text-center mb-14">
        <p className="text-sm text-gray-500">Our recent</p>
        <h2 className="text-3xl md:text-4xl font-semibold">Case studies</h2>
      </div>

      
      <div className="flex flex-col gap-10">
        {caseStudies.map((item) => (
          <div
            key={item.id}
            className={`${item.bg} p-6 md:p-10 rounded-2xl flex flex-col md:flex-row gap-8 shadow-sm`}
          >
           
            <div className="w-full md:w-1/2">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-auto rounded-xl"
              />
            </div>

           
            <div className="w-full md:w-1/2 flex flex-col gap-3">
              <h3 className="text-xl md:text-2xl font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>

              <button className="text-purple-600 font-medium hover:gap-3 transition-all flex items-center gap-2 mt-2">
                Read more →
              </button>
            </div>
          </div>
        ))}
      </div>



<div className="w-full flex justify-center md:justify-end mt-10">
  <button className="text-purple-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
    Read more case studies →
  </button>
</div>


    </section>
  );
}


