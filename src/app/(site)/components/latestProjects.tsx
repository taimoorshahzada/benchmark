import { useRef, useEffect } from "react";
import Project from "./project";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

function LatestProjects() {
	return (
		<section className="scroll-section-outer overflow-x-hidden col-span-12 pb-10 pt-6">
			<p className="font-medium text-sm mb-5 col-span-12 pl-[10px] md:pl-5">
				Latest Projects
			</p>
			<div className="swipe-section w-[400vw] flex flex-row relative md:h-[90vh]">
				<Project />
				<Project />
				<Project />
				<Project />
			</div>
		</section>
	);
}

export default LatestProjects;
