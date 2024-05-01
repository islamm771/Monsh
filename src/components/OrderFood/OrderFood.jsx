import React from 'react'
import "./OrderFood.css"
import { FaStar } from "react-icons/fa6";
import { MdGpsFixed } from "react-icons/md";

// Import Images
import img_01 from "../../assets/homepage/meals/img-1.jpg"
import img_02 from "../../assets/homepage/meals/img-2.jpg"
import img_03 from "../../assets/homepage/meals/img-3.jpg"
import img_04 from "../../assets/homepage/meals/img-4.jpg"
import img_05 from "../../assets/homepage/meals/img-5.jpg"
import img_06 from "../../assets/homepage/meals/img-6.jpg"
import img_07 from "../../assets/homepage/meals/img-7.jpg"
import img_08 from "../../assets/homepage/meals/img-8.jpg"

// Import Logos
import imgLogo_01 from "../../assets/homepage/meals/logo-1.jpg"
import imgLogo_02 from "../../assets/homepage/meals/logo-2.jpg"
import imgLogo_03 from "../../assets/homepage/meals/logo-3.jpg"
import imgLogo_04 from "../../assets/homepage/meals/logo-4.jpg"
import imgLogo_05 from "../../assets/homepage/meals/logo-5.jpg"
import imgLogo_06 from "../../assets/homepage/meals/logo-6.jpg"
import imgLogo_07 from "../../assets/homepage/meals/logo-7.jpg"
import imgLogo_08 from "../../assets/homepage/meals/logo-8.jpg"



const OrderFood = () => {
  return (
    <section className="order-food-online">		
		<div className="mx-6">
			<div className="row">
				<div className="">
					<div className="new-heading">
						<h1> Order Food Online In Your Area </h1>
					</div>
					<div className="your-location">
						<span><i className="fas fa-map-marker-alt"></i>New York</span>Change Location
					</div>
					<div className="all-items">
						<div className="search col-lg-4 col-md-6 col-sm-12 col-xs-12 md:max-w-96  lg:max-w-80">
							<form>
								<input  className="search-location" name="search" type="search" placeholder="Enter Your Location"/>
								<div className="icon-btn">
									<div className="cross-icon">
									<MdGpsFixed />
									</div>
									<div className="s-m-btn">
										<button className="search-meal-btn btn-link">Search</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
				<div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
					<div className="all-meal">
						<div className="top">
							<a href="meal_detail.html"><div className="bg-gradient"></div></a>
							<div className="top-img">
								<img src={img_01} alt=""/>
							</div>
							<div className="logo-img">
								<img src={imgLogo_01} alt=""/>
							</div>
							<div className="top-text">
								<div className="heading"><h4><a href="meal_detail.html">Bonn Burgur</a></h4></div>
								<div className="sub-heading">
								<h5><a href="restaurant_detail.html">Rooster</a></h5>
								<p>$5.00</p>
								</div>
							</div>
						</div>
						<div className="bottom">
							<div className="bottom-text">
								<div className="delivery"><i className="fas fa-shopping-cart"></i>Delivery Free : Free</div>
								<div className="time"><i className="far fa-clock"></i>Delivery Time : 30 Min</div>
								<div className="star">
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />							
									<span>4.5</span> 
									<div className="comments"><a href="#"><i className="fas fa-comment-alt"></i>05</a></div>
								</div>								
							</div>
						</div>
					</div>					
				</div>
				<div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
					<div className="all-meal">
						<div className="top">
							<a href="meal_detail.html"><div className="bg-gradient"></div></a>
							<div className="top-img">
								<img src={img_02} alt=""/>
							</div>
							<div className="logo-img">
								<img src={imgLogo_02} alt=""/>
							</div>
							<div className="top-text">
								<div className="heading"><h4><a href="meal_detail.html">Two Burgurs</a></h4></div>
								<div className="sub-heading">
								<h5><a href="restaurant_detail.html">Chef House</a></h5>
								<p>$5.00</p>
								</div>
							</div>
						</div>
						<div className="bottom">
							<div className="bottom-text">
								<div className="delivery"><i className="fas fa-shopping-cart"></i>Delivery Free : Free</div>
								<div className="time"><i className="far fa-clock"></i>Delivery Time : 30 Min</div>
								<div className="star">
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />								
									<span>4.5</span> 
									<div className="comments"><a href="#"><i className="fas fa-comment-alt"></i>05</a></div>
								</div>								
							</div>
						</div>
					</div>					
				</div>
				<div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
					<div className="all-meal">
						<div className="top">
							<a href="meal_detail.html"><div className="bg-gradient"></div></a>
							<div className="top-img">
								<img src={img_03} alt=""/>
							</div>
							<div className="logo-img">
								<img src={imgLogo_03} alt=""/>
							</div>
							<div className="top-text">
								<div className="heading"><h4><a href="meal_detail.html">Large Cheese Pizza...</a></h4></div>
								<div className="sub-heading">
								<h5><a href="restaurant_detail.html">Limon Resto</a></h5>
								<p>$12.00</p>
								</div>
							</div>
						</div>
						<div className="bottom">
							<div className="bottom-text">
								<div className="delivery"><i className="fas fa-shopping-cart"></i>Delivery Free : Free</div>
								<div className="time"><i className="far fa-clock"></i>Delivery Time : 30 Min</div>
								<div className="star">
									<FaStar />							
									<FaStar />							
									<FaStar />							
									<FaStar />							
									<FaStar />							
									<span>4.5</span> 
									<div className="comments"><a href="#"><i className="fas fa-comment-alt"></i>05</a></div>
								</div>								
							</div>
						</div>
					</div>					
				</div>
				<div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
					<div className="all-meal">
						<div className="top">
							<a href="meal_detail.html"><div className="bg-gradient"></div></a>
							<div className="top-img">
								<img src={img_04} alt="" />
							</div>
							<div className="logo-img">
								<img src={imgLogo_04} alt="" />
							</div>
							<div className="top-text">
								<div className="heading"><h4><a href="meal_detail.html">Hakka Noodles</a></h4></div>
								<div className="sub-heading">
								<h5><a href="restaurant_detail.html">Ledbery</a></h5>
								<p>$5.00</p>
								</div>
							</div>
						</div>
						<div className="bottom">
							<div className="bottom-text">
								<div className="delivery"><i className="fas fa-shopping-cart"></i>Delivery Free : Free</div>
								<div className="time"><i className="far fa-clock"></i>Delivery Time : 30 Min</div>
								<div className="star">
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />								
									<span>4.5</span> 
									<div className="comments"><a href="#"><i className="fas fa-comment-alt"></i>05</a></div>
								</div>								
							</div>
						</div>
					</div>					
				</div>
				<div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
					<div className="all-meal">
						<div className="top">
							<a href="meal_detail.html"><div className="bg-gradient"></div></a>
							<div className="top-img">
								<img src={img_05} alt="" />
							</div>
							<div className="logo-img">
								<img src={imgLogo_05} alt="" />
							</div>
							<div className="top-text">
								<div className="heading"><h4><a href="meal_detail.html">Cappuccino Coffee</a></h4></div>
								<div className="sub-heading">
								<h5><a href="restaurant_detail.html">Organice cafe</a></h5>
								<p>$5.00</p>
								</div>
							</div>
						</div>
						<div className="bottom">
							<div className="bottom-text">
								<div className="delivery"><i className="fas fa-shopping-cart"></i>Delivery Free : Free</div>
								<div className="time"><i className="far fa-clock"></i>Delivery Time : 30 Min</div>
								<div className="star">
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />								
									<span>4.5</span> 
									<div className="comments"><a href="#"><i className="fas fa-comment-alt"></i>05</a></div>
								</div>								
							</div>
						</div>
					</div>					
				</div>
				<div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
					<div className="all-meal">
						<div className="top">
							<a href="meal_detail.html"><div className="bg-gradient"></div></a>
							<div className="top-img">
								<img src={img_06} alt="" />
							</div>
							<div className="logo-img">
								<img src={imgLogo_06} alt="" />
							</div>
							<div className="top-text">
								<div className="heading"><h4><a href="meal_detail.html">Choclate Cake</a></h4></div>
								<div className="sub-heading">
								<h5><a href="restaurant_detail.html">Chef House</a></h5>
								<p>$8.00</p>
								</div>
							</div>
						</div>
						<div className="bottom">
							<div className="bottom-text">
								<div className="delivery"><i className="fas fa-shopping-cart"></i>Delivery Free : Free</div>
								<div className="time"><i className="far fa-clock"></i>Delivery Time : 30 Min</div>
								<div className="star">
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />								
									<span>4.5</span> 
									<div className="comments"><a href="#"><i className="fas fa-comment-alt"></i>05</a></div>
								</div>								
							</div>
						</div>
					</div>					
				</div>
				<div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
					<div className="all-meal">
						<div className="top">
							<a href="meal_detail.html"><div className="bg-gradient"></div></a>
							<div className="top-img">
								<img src={img_07} alt="" />
							</div>
							<div className="logo-img">
								<img src={imgLogo_07} alt="" />
							</div>
							<div className="top-text">
								<div className="heading"><h4><a href="meal_detail.html"> Indian Dosa </a></h4></div>
								<div className="sub-heading">
								<h5><a href="restaurant_detail.html">Indian Resto</a></h5>
								<p>$10.00</p>
								</div>
							</div>
						</div>
						<div className="bottom">
							<div className="bottom-text">
								<div className="delivery"><i className="fas fa-shopping-cart"></i>Delivery Free : Free</div>
								<div className="time"><i className="far fa-clock"></i>Delivery Time : 30 Min</div>
								<div className="star">
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />								
									<span>4.5</span> 
									<div className="comments"><a href="#"><i className="fas fa-comment-alt"></i>05</a></div>
								</div>								
							</div>
						</div>
					</div>					
				</div>
				<div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
					<div className="all-meal">
						<div className="top">
							<a href="meal_detail.html"><div className="bg-gradient"></div></a>
							<div className="top-img">
								<img src={img_08} alt="" />
							</div>
							<div className="logo-img">
								<img src={imgLogo_08} alt="" />
							</div>
							<div className="top-text">
								<div className="heading"><h4><a href="meal_detail.html">Double Tikki Burgur</a></h4></div>
								<div className="sub-heading">
								<h5><a href="restaurant_detail.html">Rooster</a></h5>
								<p>$5.00</p>
								</div>
							</div>
						</div>
						<div className="bottom">
							<div className="bottom-text">
								<div className="delivery"><i className="fas fa-shopping-cart"></i>Delivery Free : Free</div>
								<div className="time"><i className="far fa-clock"></i>Delivery Time : 30 Min</div>
								<div className="star">
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />								
									<span>4.5</span> 
									<div className="comments"><a href="#"><i className="fas fa-comment-alt"></i>05</a></div>
								</div>								
							</div>
						</div>
					</div>					
				</div>
			</div>
			<div className="meal-btn">
				<a href="#" className="m-btn btn-link">Show All</a>
			</div>
		</div>
	</section>
  )
}

export default OrderFood