/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

const ImgLoopSlider = ({ loopSliderImg }) => {
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
          {loopSliderImg.map((item, index) => (
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
    </>
  );
};

export default ImgLoopSlider;
