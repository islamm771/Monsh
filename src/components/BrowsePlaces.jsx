import React from 'react'
import PlacesSwiper from './PlacesSwiper'
import "./BrowsePlaces.css"

const BrowsePlaces = () => {
  return (
    <section className="browse-places">
        <div className="mx-6">
        <div className="browse-heading">
            <h6> Browse Places </h6>
        </div>
        <PlacesSwiper />
        </div>
    </section>
  )
}

export default BrowsePlaces