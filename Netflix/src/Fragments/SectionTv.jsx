import React from "react"

const SectionTv = () => {
	return (
		<div className="md:flex h-3/5 w-auto  px-[12%] md:justify-center md:items-center  mt-[3.5rem] md:mt-0 ">
			<div className="md:w-1/2 text-white flex flex-col justify-center relative bottom-8 opacity-[90%]">
				<h1 className="md:text-5xl md:text-left text-3xl font-black text-center">Nikmati di TV-mu</h1>
				<p className="mt-4 md:text-2xl md:text-left text-center text-1xl  w-full">
					Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak
					lagi.
				</p>
			</div>
			<div className="md:w-1/2 md:bottom-0 relative bottom-[75px] right-1 z-[-1]  flex justify-center items-center">
				<img
					src="images/Tv.gif"
					alt="Gambar"
					className="md:float-right md:ml-4 md:mb-0"
					id="ImagesTv"
				/>
			</div>
		</div>
	)
}

export default SectionTv
