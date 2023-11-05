import { useRef, useEffect } from "react";
import Project from "./project";

function LatestProjects() {
	return (
		<section className="scroll-section-outer overflow-hidden col-span-12">
			<div className="py-10">
				<p className="font-medium text-sm mb-5 col-span-12">Latest Projects</p>
				<div className="max-h-screen scroll-section-inner w-[400vw] h-screen flex flex-row relative">
					<Project />
					<Project />
					<Project />
					<Project />
				</div>
			</div>
		</section>
	);
}

export default LatestProjects;
