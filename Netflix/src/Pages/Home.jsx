import Button from "../Fragments/Button"
import SectionTv from "../Fragments/SectionTv"
import SectionHp from "../Fragments/SectionHp"
import Gallery from "../Fragments/UploadImages"
import Sign from "../Fragments/Sign"

const Home = () => {
	return (
		<>
			<section className="SectionImage" id="section1">
				<div className="LeftText">
				<b>THE CATS</b>
					<p className="relative bottom-3">
						A cozy online community for cat lovers to connect, share their adorable feline
						companions, exchange tips and tricks, and revel in the warmth and joy that comes with
						being part of the ultimate cat-loving club
					</p>
					<div className="ButtonNext">
						<Button />
					</div>
				</div>
				<div className="ContainerTitle">
					<span>ORIGINAL SERIES BY</span>
					<div className="TextNetflix">
						<img src="images/netflix.png" alt="" />
					</div>
				</div>
			</section>
			
<SectionTv/>
<SectionHp/>

<Sign/>
			<Gallery/>
		


			
		</>
	)
}

export default Home
