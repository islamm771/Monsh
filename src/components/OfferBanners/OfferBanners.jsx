import React from 'react'
import "./OfferBanners.css"

const OfferBanners = () => {
  return (
    <section className="offer-banners">	
		<div className="container mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="">
					<div className="banner">
						<div className="ads-banner ads-banner-01"></div>											
						<div className="banner-items">
							<div className="bnnr-text">
							<h2>Order Food Online</h2>
							<p>Use code to get 50% off upto $5<br /> on your next order.</p>
							</div>
							<div className="offer-button">
								<a href="#" className="of-btn btn-link">Order Now</a>
							</div>
						</div>
					</div>
				</div>
				<div className="">
					<div className="banner">
						<div className="ads-banner ads-banner-02"></div>											
						<div className="banner-items">
							<div className="bnnr-text">
							<h2>Membership<span><i className="fas fa-long-arrow-alt-right"></i></span>Open Now</h2>
							<p>Memberships are now open for<br /> purchases.</p>
							</div>
							<div className="offer-button">
								<a href="#" className="of-btn btn-link">Sign up Now</a>
							</div>
						</div>
					</div>
				</div>				
			</div>
		</div>
	</section>
  )
}

export default OfferBanners