import React from 'react'
import "./QuickSearch.css"
import QuickSlider from './QuickSlider';

const QuickSearch = () => {
  return (
    <section className="quick-searches">			
		<div className="container mx-auto">		
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
				<div className="max-w-[30rem] md:max-w-[36rem] lg:max-w-[40rem] mx-auto">
					<div className="all-meals py-5 px-6">
						<div className="">
							<QuickSlider />				
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default QuickSearch