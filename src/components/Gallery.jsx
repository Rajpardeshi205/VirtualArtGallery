import Styled from "./gallery.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import slide_img_1 from "/Gallery/img_1.jpg";
import slide_img_2 from "/Gallery/img_2.jpg";
import slide_img_3 from "/Gallery/img_3.jpg";
import slide_img_4 from "/Gallery/img_4.jpg";
import slide_img_5 from "/Gallery/img_5.jpeg";
import slide_img_6 from "/Gallery/img_6.jpg";
import slide_img_7 from "/Gallery/img_7.jpeg";

const Gallery = () => {
  return (
    <div className={Styled.Gallery1}>
      <div className="container">
        <h1 className="heading">Vincent Van Gogh's Gallery</h1>
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
            <div class="hover-text">Starry Night, 1889, MoMA. </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_img_2} alt="slide_image" />
            <div class="hover-text">
              Sunflowers, 1889, Van Gogh Museum, Amsterdam
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_img_3} alt="slide_image" />
            <div class="hover-text">
              Self-portrait, 1889, Musée d'Orsay, Paris.
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_img_4} alt="slide_image" />
            <div class="hover-text">
              The Potato Eaters, 1885. Van Gogh Museum, Amsterdam
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_img_5} alt="slide_image" />
            <div class="hover-text">
              Wheatfield With Crows, 1890, Van Gogh Museum, Amsterdam
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_img_6} alt="slide_image" />
            <div class="hover-text">
              Irises, 1889, J. Paul Getty Museum, Los Angeles, California
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_img_7} alt="slide_image" />
            <div class="hover-text">
              The Bedroom in Arles, 1888, Van Gogh Museum, Amsterdam
            </div>
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

export default Gallery;
