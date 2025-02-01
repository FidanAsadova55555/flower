import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Button from "../button";
import styles from "./style.module.scss";

const SwiperComponent = () => {
  return (
    <Swiper
      className="mySwiper"
      modules={[Navigation, Mousewheel, Keyboard]}
      navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
      allowTouchMove={false}
    >
      <SwiperSlide className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://flone.jamstacktemplates.dev/assets/img/slider/slider-10.jpg')" }}>
        <div className="container max-w-[1200px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-7  p-6  mt-[127px]">
            <h2 className="text-[16px] font-normal">New Arrivals</h2>
            <p className="max-w-[590px] text-[48px] leading-[65px] mt-[17px] mb-[37px]">Fresh Your Mind & Feeling Love</p>
            <Button/>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative flex items-center justify-center h-screen bg-gray-500" style={{ backgroundImage: "url('https://flone.jamstacktemplates.dev/assets/img/slider/slider-10-2.jpg')" }}>
        <div className="container max-w-[1200px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-7  p-6  mt-[127px]">
              <h2 className="text-[16px] font-normal">New Arrivals</h2>
              <p className="max-w-[590px] text-[48px] leading-[65px] mt-[17px] mb-[37px]">Fresh Your Mind & Feeling Love</p>
              <Button/>
              </div>
          </div>
        </div>
      </SwiperSlide>
      <div className={`swiper-button-next ${styles["swiper-button-next"]}`}></div>
      <div className={`swiper-button-prev ${styles["swiper-button-prev"]}`}></div>
    </Swiper>
  );
};

export default SwiperComponent;
