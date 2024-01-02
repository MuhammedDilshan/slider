import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Autoplay, Parallax, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

import Image1 from "../images/img1.jpg";
import Image2 from "../images/img2.jpg";
import Image3 from "../images/img3.jpg";

SwiperCore.use([Autoplay, Parallax, Pagination, Navigation]);

export default function Slider() {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      speed={600}
      parallax={true}
      autoplay={{
        delay: 3000, // Delay between transitions in milliseconds
        disableOnInteraction: false, // Autoplay will not be disabled after user interactions
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <div
          className="parallax-bg"
          data-swiper-parallax="-300"
          style={{
            backgroundImage: `url(${Image1})`,
          }}
        >
          <p data-swiper-parallax="-100">Content for the first slide</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="parallax-bg"
          data-swiper-parallax="-300"
          style={{
            backgroundImage: `url(${Image2})`,
          }}
        >
          <p data-swiper-parallax="-100">Content for the second slide</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="parallax-bg"
          data-swiper-parallax="-300"
          style={{
            backgroundImage: `url(${Image3})`,
          }}
        >
          <p data-swiper-parallax="-100">Content for the third slide</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
