import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/parallax";
import Image1 from "../images/img1.jpg";
import Image2 from "../images/img2.jpg";
import Image3 from "../images/img3.jpg";

function Slider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={true}
    >
      <SwiperSlide>
        <img src={Image1} alt="Image1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image2} alt="Image2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image3} alt="Image3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image2} alt="Image2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image3} alt="Image3" />
      </SwiperSlide>
      ...
    </Swiper>
  );
}

export default Slider;
