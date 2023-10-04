/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Scrollbar } from "swiper/modules";
const ImgSlider = ({ link, src, alt, title, customDiv }) => {
  return (
    <section className="container mx-auto">
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        // pagination={{
        //   dynamicBullets: true,
        // }}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {Array.from({ length: 15 }, (_, index) => (
          <SwiperSlide key={index}>
            <div className="">
              <Link to={link}>
                <img src={src} alt={alt} />
                <h3 className="text-center text-md font-semibold mt-2">
                  {title}
                </h3>
                {customDiv}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImgSlider;
