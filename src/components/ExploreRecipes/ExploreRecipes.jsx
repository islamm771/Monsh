import React from 'react'
import "./ExploreRecipes.css"

import img_01 from "../../assets/homepage/recipes/recipe_01.jpg"
import img_02 from "../../assets/homepage/recipes/recipe_02.jpg"
import img_03 from "../../assets/homepage/recipes/recipe_03.jpg"
import img_04 from "../../assets/homepage/recipes/recipe_04.jpg"
import img_05 from "../../assets/homepage/recipes/recipe_05.jpg"
import img_06 from "../../assets/homepage/recipes/recipe_06.jpg"



const ExploreRecipes = () => {
  return (
    <section className="explore-recipes">			
		<div className="container mx-auto">		
			<div>	
				<div>
					<div className="new-heading">
						<h1> Explore Your Favorite Recipes </h1>
					</div>	
				</div>
			</div>
			<div className="b-recipes">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<div className="col-lg-4 col-md-6">
						<a href="#">
						<div className="recipe-item">
							<img src={img_01} alt="" />
							 <div className="overlay">
								<div className="recipes-title">	
									<h6>North Indian</h6>
									<p>75 Videos</p>
								 </div>
							 </div>
						</div>
						</a>
					</div>
					<div className="col-lg-4 col-md-6">
						<a href="#">
						<div className="recipe-item">
							<img src={img_02} alt="" />
							 <div className="overlay">
								<div className="recipes-title">	
									<h6>Fast Food</h6>
									<p>105 Videos</p>
								 </div>
							 </div>
						</div>
						</a>
					</div>
					<div className="col-lg-4 col-md-6">
						<a href="#">
						<div className="recipe-item">
							<img src={img_03} alt="" />
							 <div className="overlay">
								<div className="recipes-title">	
									<h6>Italian Food</h6>
									<p>35 Videos</p>
								 </div>
							 </div>
						</div>
						</a>
					</div>
					<div className="col-lg-4 col-md-6">
						<a href="#">
						<div className="recipe-item">
							<img src={img_04} alt="" />
							 <div className="overlay">
								<div className="recipes-title">	
									<h6>Chinese Food</h6>
									<p>60 Videos</p>
								 </div>
							 </div>
						</div>
						</a>
					</div>
					<div className="col-lg-4 col-md-6">
						<a href="#">
						<div className="recipe-item">
							<img src={img_05} alt="" />
							 <div className="overlay">
								<div className="recipes-title">	
									<h6>Street Food</h6>
									<p>45 Videos</p>
								 </div>
							 </div>
						</div>
						</a>
					</div>
					<div className="col-lg-4 col-md-6">
						<a href="#">
						<div className="recipe-item">
							<img src={img_06} alt="" />
							 <div className="overlay">
								<div className="recipes-title">	
									<h6>Bakery</h6>
									<p>20 Videos</p>
								 </div>
							 </div>
						</div>
						</a>
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

export default ExploreRecipes