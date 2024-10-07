import Styled from "./Gallery_9.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import slide_img_1 from "/Gallery/gs_img_1.jpg";
import slide_img_2 from "/Gallery/gs_img_2.jpg";
import slide_img_3 from "/Gallery/gs_img_3.jpeg";
import slide_img_4 from "/Gallery/gs_img_4.jpg";
import slide_img_5 from "/Gallery/gs_img_5.jpg";
import slide_img_6 from "/Gallery/gs_img_6.jpg";
import slide_img_7 from "/Gallery/gs_img_7.jpg";

const Gallery_9 = () => {
  return (
    <div className={Styled.Gallery_9}>
      <div className="container">
        <h1 className="heading">Georges Seurat's Gallery</h1>
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
            <div class="hover-text">
              Sunday Afternoon on the Island of La Grande Jatte
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_img_2} alt="slide_image" />
            <div class="hover-text">Circus Sideshow</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_img_3} alt="slide_image" />
            <div class="hover-text">The Eiffel Tower</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_img_4} alt="slide_image" />
            <div class="hover-text">The Circus</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_img_5} alt="slide_image" />
            <div class="hover-text">Portrait of Paul Signac</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_img_6} alt="slide_image" />
            <div class="hover-text">Young Woman Powdering Herself</div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_img_7} alt="slide_image" />
            <div class="hover-text">Chahut</div>
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

export default Gallery_9;
