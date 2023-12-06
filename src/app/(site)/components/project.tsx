import React from "react";
import Image from "next/image";
import Wilson from "../assets/images/Projects-Wilson-1500x1000-High-Res-1.jpg";
import { getProjects } from "../../../../sanity/sanity-utils";

function Project() {


	
  return (
		<div
			id="projectImages"
			className=" w-full flex flex-col relative px-[10px] md:px-5 col-span-12"
		>
			<div className="">
				<Image
					className="scroll-section object-cover w-full md:h-[85vh]"
					src={Wilson}
					alt="Wilson House"
				/>
			</div>
		</div>
	);
}

export default Project;
