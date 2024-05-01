import React from 'react'
import "./FeaturedResturants.css"
import img_01 from "../../assets/homepage/featured-restaurants/logo_01.jpg"
import img_02 from "../../assets/homepage/featured-restaurants/logo_02.jpg"
import img_03 from "../../assets/homepage/featured-restaurants/logo_03.jpg"
import img_04 from "../../assets/homepage/featured-restaurants/logo_04.jpg"
import img_05 from "../../assets/homepage/featured-restaurants/logo_05.jpg"
import img_06 from "../../assets/homepage/featured-restaurants/logo_06.jpg"
import img_07 from "../../assets/homepage/featured-restaurants/logo_07.jpg"


const FeaturedResturants = () => {
  return (
    <section className="featured-restaurants">
		<div className="mx-6">				
			<div className="grid grid-cols-12 gap-4">									
				<div className=" col-span-12 lg:col-span-8">
					<div className="new-heading">
						<h1> Featured Restaurants </h1>
					</div>
					<div className ="bg-resto">
						<div className="resto-item">	
							<div className="grid grid-cols-1 md:grid-cols-3">	
								<div className="">
									<div className="resto-img">
										<img src={img_01} alt="" />
										<div className="resto-name">
											<h4><a href="#"> Food Roster </a></h4>
											<p>Indian Restaurant</p>
										</div>
									</div>
								</div>
								<div className="">															
									<div className="resto-location">
										<span><i className="fas fa-map-marker-alt"></i></span>New York City,1569  
									</div>						
								</div>	
								<div className="">															
									<div className="menu-btn">
										<a className="mn-btn btn-link" href="#"> View Menu</a>  
									</div>						
								</div>
							</div>						
						</div>
						<div className="resto-item">	
							<div className="grid grid-cols-1 md:grid-cols-3">	
								<div className="">
									<div className="resto-img">
										<img src={img_02} alt="" />
										<div className="resto-name">
											<h4><a href="#"> Chef House </a></h4>
											<p>American Restaurant</p>
										</div>
									</div>
								</div>
								<div className="">															
									<div className="resto-location">
										<span><i className="fas fa-map-marker-alt"></i></span>New York City,1569  
									</div>						
								</div>	
								<div className="">															
									<div className="menu-btn">
										<a className="mn-btn btn-link" href="#"> View Menu</a>  
									</div>						
								</div>
							</div>						
						</div>
						<div className="resto-item">	
							<div className="grid grid-cols-1 md:grid-cols-3">	
								<div className="">
									<div className="resto-img">
										<img src={img_03} alt="" />
										<div className="resto-name">
											<h4><a href="#"> Rooster </a></h4>
											<p>Indian Restaurant</p>
										</div>
									</div>
								</div>
								<div className="">															
									<div className="resto-location">
										<span><i className="fas fa-map-marker-alt"></i></span>New York City,1569  
									</div>						
								</div>	
								<div className="">															
									<div className="menu-btn">
										<a className="mn-btn btn-link" href="#"> View Menu</a>  
									</div>						
								</div>
							</div>						
						</div>
						<div className="resto-item">	
							<div className="grid grid-cols-1 md:grid-cols-3">	
								<div className="">
									<div className="resto-img">
										<img src={img_04} alt="" />
										<div className="resto-name">
											<h4><a href="#"> Limon Resto </a></h4>
											<p>Australian Restaurant</p>
										</div>
									</div>
								</div>
								<div className="">															
									<div className="resto-location">
										<span><i className="fas fa-map-marker-alt"></i></span>New York City,1569  
									</div>						
								</div>	
								<div className="">															
									<div className="menu-btn">
										<a className="mn-btn btn-link" href="#"> View Menu</a>  
									</div>						
								</div>
							</div>						
						</div>
						<div className="resto-item">	
							<div className="grid grid-cols-1 md:grid-cols-3">	
								<div className="">
									<div className="resto-img">
										<img src={img_05} alt="" />
										<div className="resto-name">
											<h4><a href="#"> Ramen Bakery </a></h4>
											<p>Canadian Bakery</p>
										</div>
									</div>
								</div>
								<div className="">															
									<div className="resto-location">
										<span><i className="fas fa-map-marker-alt"></i></span>New York City,1569  
									</div>						
								</div>	
								<div className="">															
									<div className="menu-btn">
										<a className="mn-btn btn-link" href="#"> View Menu</a>  
									</div>						
								</div>
							</div>						
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="new-heading treading-sellers">
						<h1> Treading This Week Sellers</h1>
					</div>
					<div className ="bg-resto">
						<div className="treading-item">	
							<div className="grid grid-cols-12 gap-4">	
								<div className="col-span-12 md:col-span-6 lg:col-span-7">
									<div className="resto-img">
										<img src={img_06} alt="" />
										<div className="resto-name">
											<h4><a href="#"> Steak Resto </a></h4>
											<p>Treading</p>
										</div>										
									</div>
									
								</div>	
								<div className="col-span-12 md:col-span-6 lg:col-span-5">
									<div className="menu-btn">
										<a className="mn-btn btn-link" href="#">View Menu</a>  
									</div>
								</div>
							</div>						
						</div>		
						<div className="treading-item">	
							<div className="grid grid-cols-12 gap-4">	
								<div className="col-span-12 md:col-span-6 lg:col-span-7">
									<div className="resto-img">
										<img src={img_02} alt="" />
										<div className="resto-name">
											<h4><a href="#"> Meshi Restaurant </a></h4>
											<p>Treading</p>
										</div>										
									</div>
									
								</div>	
								<div className="col-span-12 md:col-span-6 lg:col-span-5">
									<div className="menu-btn">
										<a className="mn-btn btn-link" href="#"> View Menu</a>  
									</div>
								</div>
							</div>						
						</div>
						<div className="treading-item">	
							<div className="grid grid-cols-12 gap-4">	
								<div className="col-span-12 md:col-span-6 lg:col-span-7">
									<div className="resto-img">
										<img src={img_07} alt="" />
										<div className="resto-name">
											<h4><a href="#"> Momo Resto </a></h4>
											<p>Treading</p>
										</div>										
									</div>
									
								</div>	
								<div className="col-span-12 md:col-span-6 lg:col-span-5">
									<div className="menu-btn">
										<a className="mn-btn btn-link" href="#"> View Menu</a>  
									</div>
								</div>
							</div>						
						</div>	
						<div className="treading-item">	
							<div className="grid grid-cols-12 gap-4">	
								<div className="col-span-12 md:col-span-6 lg:col-span-7">
									<div className="resto-img">
										<img src={img_01} alt="" />
										<div className="resto-name">
											<h4><a href="#"> Rooster </a></h4>
											<p>Treading</p>
										</div>										
									</div>
									
								</div>	
								<div className="col-span-12 md:col-span-6 lg:col-span-5">
									<div className="menu-btn">
										<a className="mn-btn btn-link" href="#"> View Menu</a>  
									</div>
								</div>
							</div>						
						</div>	
						<div className="treading-item">	
							<div className="grid grid-cols-12 gap-4">	
								<div className="col-span-12 md:col-span-6 lg:col-span-7">
									<div className="resto-img">
										<img src={img_03} alt="" />
										<div className="resto-name">
											<h4><a href="#"> Limon Bakery </a></h4>
											<p>Treading</p>
										</div>										
									</div>
									
								</div>	
								<div className="col-span-12 md:col-span-6 lg:col-span-5">
									<div className="menu-btn">
										<a className="mn-btn btn-link" href="#"> View Menu</a>  
									</div>
								</div>
							</div>						
						</div>	
						
					</div>
				</div>
				
			</div>	
		</div>
		
	</section>
  )
}

export default FeaturedResturants