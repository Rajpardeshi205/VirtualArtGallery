import Styled from "./Gallery_7.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import slide_img_1 from "/Gallery/eh_img_1.jpg";
import slide_img_2 from "/Gallery/eh_img_2.jpg";
import slide_img_3 from "/Gallery/eh_img_3.jpg";
import slide_img_4 from "/Gallery/eh_img_4.jpg";
import slide_img_5 from "/Gallery/eh_img_5.jpg";
import slide_img_6 from "/Gallery/eh_img_6.jpg";
import slide_img_7 from "/Gallery/eh_img_7.jpg";

const Gallery_7 = () => {
  return (
    <div className={Styled.Gallery_7}>
      <div className="container">
        <h1 className="heading">Edward Hopper's Gallery</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={slide_img_1} alt="slide_image" />
            <div class="hover-text">Nighthawks</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_img_2} alt="slide_image" />
            <div class="hover-text">Automat</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_img_3} alt="slide_image" />
            <div class="hover-text">Office at Night</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_img_4} alt="slide_image" />
            <div class="hover-text">Girl at a Sewing Machine</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_img_5} alt="slide_image" />
            <div class="hover-text">Lighthouse at Two Lights</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_img_6} alt="slide_image" />
            <div class="hover-text">Office in a Small City</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_img_7} alt="slide_image" />
            <div class="hover-text">From Williamsburg Bridge</div>
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery_7;
