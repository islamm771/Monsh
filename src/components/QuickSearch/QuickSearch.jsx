import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./QuickSearch.css"

import img_01 from "../../assets/homepage/quick-searches/meal-1.svg"
import img_02 from "../../assets/homepage/quick-searches/meal-2.svg"
import img_03 from "../../assets/homepage/quick-searches/meal-3.svg"
import img_04 from "../../assets/homepage/quick-searches/meal-4.svg"
import img_05 from "../../assets/homepage/quick-searches/meal-5.svg"

const QuickSearch = () => {
  return (
    <section className="quick-searches">			
		<div className="mx-6">		
			<div className="row">	
				<div className="col-md-12">
					<div className="new-heading">
						<h1> Quick Searches </h1>
					</div>
					<div className="sub-title">
						Discover Restauranrs By Type of Meal
					</div>	
				</div>
			</div>
			<div className="">				
				<div className="md:max-w-[36rem] lg:max-w-[40rem] mx-auto">
					<div className="all-meals py-5 px-6">
						<div className="">				
							<div className="">
								<Swiper
                                className="mySwiper"
                                slidesPerView={4}
                                spaceBetween={5}
                                loop={true}
                                // autoplay={{
                                //   delay: 2500,
                                //   disableOnInteraction: false,
                                // }}
                                pagination={{
                                  clickable: true,
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
                                modules={[Autoplay, Pagination]}
                                >
									<SwiperSlide>
										<a href="#">
											<div className="meal-icon">
												<img src={img_01} alt="" />
											</div>
											<div className="meal-title">
												Breakfast
											</div>
										</a>
									</SwiperSlide>										
									<SwiperSlide>
										<a href="#">
											<div className="meal-icon">
												<img src={img_02} alt="" />
											</div>
											<div className="meal-title">
												Lunch
											</div>
										</a>
									</SwiperSlide>										
									<SwiperSlide>
										<a href="#">
											<div className="meal-icon">
												<img src={img_03} alt="" />
											</div>
											<div className="meal-title">
												Dinner
											</div>
										</a>
									</SwiperSlide>										
									<SwiperSlide>
										<a href="#">
											<div className="meal-icon">
												<img src={img_04} alt="" />
											</div>
											<div className="meal-title">
												Cafe's
											</div>
										</a>
									</SwiperSlide>										
									<SwiperSlide>
										<a href="#">
											<div className="meal-icon">
												<img src={img_05} alt="" />
											</div>
											<div className="meal-title">
												Delivery
											</div>
										</a>
									</SwiperSlide>					
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default QuickSearch