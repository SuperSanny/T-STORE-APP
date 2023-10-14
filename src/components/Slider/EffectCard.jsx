/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
const EffectCard = ({ effectCardImg }) => {
  return (
    <>
      <section className="w-48 h-96">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {effectCardImg.map((item, index) => (
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

export default EffectCard;
