import React from 'react'
import RestuarantSwiper from './RestaurantSwiper'
import './NewRestaurant.css'

const NewRestaurant = () => {
  return (
    <section className="new-restaurants-book-now">		
		<div className="mx-6">
			<div className="row">
				<div className="col-md-12">
					<div className="new-heading">
						<h1> Discover New Restaurants & Book Now </h1>
					</div>
				</div>
			</div>
			<div className="new-resto">
                <RestuarantSwiper />
            </div>
		</div>
	</section>
  )
}

export default NewRestaurant