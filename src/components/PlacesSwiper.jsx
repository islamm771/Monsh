import { Swiper, SwiperSlide } from 'swiper/react';
import img_01 from '../assets/homepage/browse_places/01.svg'
import img_02 from '../assets/homepage/browse_places/02.svg'
import img_03 from '../assets/homepage/browse_places/03.svg'
import img_04 from '../assets/homepage/browse_places/04.svg'
import img_05 from '../assets/homepage/browse_places/05.svg'
import img_06 from '../assets/homepage/browse_places/06.svg'
// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';

const PlacesSwiper = () => {
  return (
    <div className="mx-6">
      <Swiper className="mySwiper"
      slidesPerView={5}
      spaceBetween={5}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
        <div className="places">
          <a href="places_nearby.html">
            <div className="b-icon">
              <img src={img_01} alt="" />
            </div>
            <div className="b-text">
              Near by
            </div>
          </a>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="places">
          <a href="places_cafes.html">
            <div className="b-icon">
              <img src={img_02} alt="" />
            </div>
            <div className="b-text">
              Cafes & More
            </div>
          </a>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="places">
            <a href="places_cafes.html">
              <div className="b-icon">
                <img src={img_03} alt="" />
              </div>
              <div className="b-text">
                Drinks & Nightkise
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="places">
          <a href="places_cafes.html">
            <div className="b-icon">
              <img src={img_04} alt="" />
            </div>
            <div className="b-text">
              Desserts & Bakes
            </div>
          </a>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="places">
          <a href="upcoming_events.html">
            <div className="b-icon">
              <img src={img_05} alt="" />
            </div>
            <div className="b-text">
              Upcoming Events
            </div>
          </a>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="places">
          <a href="places_cafes.html">
            <div className="b-icon">
            <img src={img_06} alt="" />
            </div>
            <div className="b-text">
            Newly Opened
            </div>
          </a>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default PlacesSwiper
