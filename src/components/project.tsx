import React from "react";
import Image from "next/image";
import Wilson from "@/app/assets/images/Projects-Wilson-1500x1000-High-Res-1.jpg";

function Project() {
	return (
		<div className="w-full pr-5 relative">
			<div className="w-full scroll-section">
				<Image
					className="object-cover w-full"
					src={Wilson}
					width={1000}
					height={1200}
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
