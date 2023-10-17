/* eslint-disable react/prop-types */
import ImageZoom from "react-image-zooom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

const ThumbSlider = ({ thumbSliderImg }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  return (
    <>
      <div>
        <Swiper
          style={{
            "--swiper-navigation-color": "#272f25",
            "--swiper-pagination-color": "#fff",
            "--swiper-navigation-size": "12px",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {thumbSliderImg.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="">
                {/* <img
                  src={item.src}
                  alt={item.alt}
                  className="rounded-md shadow-md"
                /> */}
                <ImageZoom className="rounded-md" src={item.src} zoom={200} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden md:block">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper mt-2"
        >
          {thumbSliderImg.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="rounded-md shadow-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ThumbSlider;
