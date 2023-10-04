/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
const EffectCard = ({ link, src, alt, title, customDiv }) => {
  return (
    <>
      <section className="w-48 h-96">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
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

export default EffectCard;
