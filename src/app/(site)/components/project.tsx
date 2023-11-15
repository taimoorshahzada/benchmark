import React from "react";
import Image from "next/image";
import Wilson from "../assets/images/Projects-Wilson-1500x1000-High-Res-1.jpg";

function Project() {
	return (
		<div className="w-full flex flex-col relative h-[90vh] scroll-section px-5">
			<div className="w-full">
				<Image
					className="object-cover w-full "
					src={Wilson}
					alt="Wilson House"
				/>
			</div>

			<div className="flex justify-between">
				<p>Wilson</p>
				<p>View Home</p>
				<p>Area, Rooms and Bathrooms</p>
			</div>
		</div>
	);
}

export default Project;
