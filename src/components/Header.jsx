import './header.css'
import { FaLocationDot } from "react-icons/fa6";
import { PiForkKnifeBold } from "react-icons/pi";


const Header = () => {
  return (
		<section className="block-preview">
			<div className="cover-banner"></div>
			<div className="mx-6">
				<div className="grid grid-cols-4 md:gap-4">	
					<div className="about  md:col-span-2 lg:col-span-3">
						<div className="left-text-b">
							<h1 className="title">Choose, Order and Checkout</h1>
							<h6 className="exeption">Specify your address to suggest you the fast delivery</h6>
							<p>Get our services from 24 hours.</p>
							<a className="bnr-btn btn-link" href="#">Go To Meal</a>
						</div>
					</div>
					<div className="form-cont col-span-4 md:col-span-2 lg:col-span-1">
						<form>
							<div className="form-box">
								<div className="input-group-prepend">
								  <div className="input-group-text"><FaLocationDot /></div>
								</div>
								<input  className="find-address skills" name="search" type="text" placeholder="Choose your location"/>
								<div className="input-group-prepend">
								  <div className="input-group-text-1"><PiForkKnifeBold /></div>
								</div>
								<input  className="find-resto skills" name="search" type="text" placeholder="Choose restaurant"/>
								<button className="search-btn btn-link" type="button">Find Food</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
  )
}

export default Header