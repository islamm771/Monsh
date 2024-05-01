import img_01 from "../../assets/homepage/how-to-work/img_1.svg"
import img_02 from "../../assets/homepage/how-to-work/img_2.svg"
import img_03 from "../../assets/homepage/how-to-work/img_3.svg"
import "./howToWork.css"
const HowToWork = () => {
  return (
    <section className="how-to-work">
		<div className="mx-6">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<div className="col-md-4 col-sm-12 col-xs-12">
					<div className="work-item">
						<div className="work-img">
							<img src={img_01} alt="" />
						</div>
						<div className="work-text">
							<h4>Choose Your Area Restaurant</h4>
							<p>Donec et tellus sed lorem condimentum maximus. Sed tempor, leo tempus condimentum.</p>
						</div>
					</div>
				</div><div className="col-md-4 col-sm-12 col-xs-12">
					<div className="work-item">
						<div className="work-img">
							<img src={img_02} alt="" />
						</div>
						<div className="work-text">
							<h4>Choose Food</h4>
							<p>Donec et tellus sed lorem condimentum maximus. Sed tempor, leo tempus condimentum.</p>
						</div>
					</div>
				</div>
				<div className="col-md-4 col-sm-12 col-xs-12">
					<div className="work-item">
						<div className="work-img">
							<img src={img_03} alt="" />
						</div>
						<div className="work-text">
							<h4>Delivery</h4>
							<p>Donec et tellus sed lorem condimentum maximus. Sed tempor, leo tempus condimentum.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default HowToWork