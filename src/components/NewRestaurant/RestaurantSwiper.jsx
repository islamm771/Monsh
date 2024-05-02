import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation, Pagination } from 'swiper/modules';

import img_01 from '../../assets/homepage/resto-book/img_1.png'
import img_02 from '../../assets/homepage/resto-book/img_2.png'
import img_03 from '../../assets/homepage/resto-book/img_3.png'
import img_04 from '../../assets/homepage/resto-book/img_4.png'
import img_05 from '../../assets/homepage/resto-book/img_5.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useSwiper } from 'swiper/react';

import { FaChevronLeft,FaChevronRight } from "react-icons/fa";


const RestuarantSwiper = () => {
  return (
    <div className="mx-6 resto-swiper">
      <Swiper className="mySwiper pb-[35px]"
      slidesPerView={4}
      spaceBetween={5}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl:".swiper-next-btn",
        prevEl:".swiper-prev-btn",
      }}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      modules={[ Pagination, Navigation]}
      >
        <SwiperSlide>
        <div className="item">
            <a href="#"><img src={img_01} alt="" /></a>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item">
            <a href="#"><img src={img_02} alt="" /></a>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item">
            <a href="#"><img src={img_03} alt="" /></a>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item">
            <a href="#"><img src={img_04} alt="" /></a>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item">
            <a href="#"><img src={img_05} alt="" /></a>
        </div>
        </SwiperSlide>
        
      </Swiper>

      <div className="buttons">
        <button className='swiper-prev-btn'><FaChevronLeft /></button>
        <button className='swiper-next-btn'><FaChevronRight /></button>
      </div>
    </div>
  )
}

export default RestuarantSwiper
