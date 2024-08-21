import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/css/LogoComponent.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = () => {
    return (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="pt-10"
        >
          <SwiperSlide><img className="carousel-image" src="../src/assets/img/caroule1.png" alt="Slide 1" /></SwiperSlide>
          <SwiperSlide><img className="carousel-image" src="../src/assets/img/caroule2.png" alt="Slide 2" /></SwiperSlide>
          <SwiperSlide><img className="carousel-image" src="../src/assets/img/caroule1.png" alt="Slide 1" /></SwiperSlide>
          <SwiperSlide><img className="carousel-image" src="../src/assets/img/caroule2.png" alt="Slide 2" /></SwiperSlide>
          <SwiperSlide><img className="carousel-image" src="../src/assets/img/caroule1.png" alt="Slide 1" /></SwiperSlide>
          <SwiperSlide><img className="carousel-image" src="../src/assets/img/caroule2.png" alt="Slide 2" /></SwiperSlide>
        </Swiper>
    );
};

export default Carousel;
