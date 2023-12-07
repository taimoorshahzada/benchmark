import React from "react";
import Image from "next/image";
import Wilson from "../assets/images/Projects-Wilson-1500x1000-High-Res-1.jpg";
import { getProjects } from "../../../../sanity/sanity-utils";
import Link from "next/link";

function Project(props: any) {
	return (
		<div
			id="projectImage"
			className=" w-full flex flex-col relative px-[10px] md:px-5 col-span-12"
		>
			<Link href={props.url} className="">
				<Image
					className="scroll-section object-cover w-full md:h-[85vh]"
					src={props.image}
					alt="Wilson House"
				/>
			</Link>
		</div>
	);
}

export default Project;
