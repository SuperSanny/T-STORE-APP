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
const ImgSlider = ({ sliderImg }) => {
  return (
    <section className="container mx-auto">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        // pagination={{
        //   dynamicBullets: true,
        // }}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {sliderImg.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="">
              <Link to={item.link}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="rounded-md shadow-md"
                />
                <h3 className="text-center text-md font-semibold mt-2">
                  {item.title}
                </h3>
                {item.customDiv}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImgSlider;
