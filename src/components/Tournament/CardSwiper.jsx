// components/CardSwiper.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Optional Swiper modules
import { Navigation, Scrollbar, A11y } from "swiper/modules";

import Card from "./Card";

const CardSwiper = () => {
  return (
    <div className="w-full  mx-auto py-6 ">
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={15}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {[...Array(5)].map((_, i) => (
          <SwiperSlide key={i}>
            <Card />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSwiper;
