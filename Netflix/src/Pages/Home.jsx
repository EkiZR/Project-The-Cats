import Button from "../Components/Button"
import SectionTv from "../Components/SectionTv"
import SectionHp from "../Components/SectionHp"
import Gallery from "../Components/UploadImages"

const Home = () => {
	return (
		<>
			<section className="SectionImage" id="section1">
				<div className="LeftText">
					<b>THE CATS</b>
					<p className="relative bottom-3">
						Join us and feel the warmth of a close social relationship between fellow cat lovers.
						Make this place a forum for exchanging information, uploading adorable photos, and
						discussing various tips and tricks for caring for cats.
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
			<SectionTv />
			<SectionHp />

			<Gallery id="Gallery" />
		</>
	)
}

export default Home
