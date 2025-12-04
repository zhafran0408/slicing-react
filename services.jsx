import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import imgMobile from "./assets/mobile.png";
import imgWeb from "./assets/code.png";
import imgTesting from "./assets/dashboard.png";
import imgSEO from "./assets/code.png";

export default function Services() {
  const services = [
    {
      title: "Mobile App Development",
      desc: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      icon: imgMobile,
    },
    {
      title: "Web Design & Development",
      desc: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      icon: imgWeb,
    },
    {
      title: "Software Testing Service",
      desc: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      icon: imgTesting,
    },
    {
      title: "SEO Optimization",
      desc: "A Website is an extension of yourself and we can help you to express it properly.",
      icon: imgSEO,
    },
  ];

  return (
    <section className="w-full py-16">
      <h1 className="text-3xl font-bold text-center mb-10">
        Services we offer
      </h1>

      <Swiper
        modules={[Pagination]}
        cssMode={true}                   
        mousewheel={true}              
        keyboard={true}                 
        pagination={{ clickable: true }}
        slidesPerView={1.2}
        centeredSlides={true}
        spaceBetween={40}
        allowTouchMove={false}          
        breakpoints={{
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 2.6 },
        }}
        className="pb-10"
      >
        {services.map((s, i) => (
          <SwiperSlide key={i} className="flex justify-center">
            <div
              className="
                w-[333px] h-[287px]
                rounded-xl p-6 bg-white border border-purple-200
                shadow-[0_5px_25px_rgba(0,0,0,0.06)]
                hover:border-purple-500 hover:shadow-[0_0_25px_rgba(147,51,234,0.25)]
                transition-all duration-300
              "
            >
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <img src={s.icon} alt="" className="w-10 h-10" />
              </div>

              <h2 className="font-semibold text-lg text-gray-900 mb-2">
                {s.title}
              </h2>

              <p className="text-sm text-gray-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}


































