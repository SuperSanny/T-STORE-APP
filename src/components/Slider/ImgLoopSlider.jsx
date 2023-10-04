/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

const ImgLoopSlider = ({ link, src, alt, title, customDiv }) => {
  return (
    <>
      <section className="mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
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
    </>
  );
};

export default ImgLoopSlider;
