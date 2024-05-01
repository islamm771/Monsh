import { Swiper, SwiperSlide } from 'swiper/react';
import img_01 from '../../assets/homepage/resto-book/img_1.jpg'
import img_02 from '../../assets/homepage/resto-book/img_2.jpg'
import img_03 from '../../assets/homepage/resto-book/img_3.jpg'
import img_04 from '../../assets/homepage/resto-book/img_4.jpg'
import img_05 from '../../assets/homepage/resto-book/img_5.jpg'
// import img_06 from '../../assets/homepage/resto-book/img_6.jpg'
import {  Navigation, Pagination } from 'swiper/modules';
// import img_02 from '../../assets/homepage/browse_places/02.svg'
// import img_03 from '../../assets/homepage/browse_places/03.svg'
// import img_04 from '../../assets/homepage/browse_places/04.svg'
// import img_05 from '../../assets/homepage/browse_places/05.svg'
// import img_06 from '../../assets/homepage/browse_places/06.svg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const RestuarantSwiper = () => {
  return (
    <div className="mx-6">
      <Swiper className="mySwiper"
      slidesPerView={4}
      spaceBetween={5}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
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
    </div>
  )
}

export default RestuarantSwiper
