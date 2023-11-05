import React from "react";
import Image from "next/image";
import Wilson from "@/app/assets/images/Projects-Wilson-1500x1000-High-Res-1.jpg";

function Project() {
	return (
		<div className="scroll-section h-screen pr-5">
			<Image
				className="aspect-video object-cover w-full"
				src={Wilson}
				width={3000}
				height={1080}
				alt="Wilson House"
			/>
			<div className="flex justify-between">
				<p>Wilson</p>
				<p>View Home</p>
				<p>Area, Rooms and Bathrooms</p>
			</div>
		</div>
	);
}

export default Project;
