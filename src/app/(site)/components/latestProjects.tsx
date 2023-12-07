import { useRef, useEffect } from "react";
import Project from "./project";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

import Wilson from "../assets/images/Projects-Wilson-1500x1000-High-Res-1.jpg";
import Mortimer from "../assets/images/Projects-Mortimer-1500-x-1000-High-Res-6.jpg";
import Marshall from "../assets/images/Projects-Marshall-21500-x-1000-High-Res.jpg";
import Link from "next/link";

function LatestProjects() {
	const sectionRef = useRef(null);
	const triggerRef = useRef(null);

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const pin = gsap.fromTo(
			sectionRef.current,
			{
				translateX: 0,
			},
			{
				translateX: "-300vw",
				ease: "none",
				duration: 1,

				scrollTrigger: {
					trigger: triggerRef.current,
					start: "top top",
					end: "2000 top",
					scrub: 0.1,
					// snap: {
					// 	snapTo: 0.333333,
					// 	duration: 1,
					// 	delay: 0.1,
					// 	ease: "power3.inOut",
					// },
					pin: true,
					onUpdate: (self) => {
						let currentTranslation = self.progress * 300;

						const project2 = document.querySelector(".project-2");
						const project3 = document.querySelector(".project-3");
						const project4 = document.querySelector(".project-4");

						if (currentTranslation >= 80) {
							if (project2) {
								project2.classList.remove("opacity-0");
							}
						} else {
							if (project2) {
								project2.classList.add("opacity-0");
							}
						}

						if (currentTranslation >= 180) {
							if (project3) {
								project3.classList.remove("opacity-0");
							}
						} else {
							if (project3) {
								project3.classList.add("opacity-0");
							}
						}

						if (currentTranslation >= 280) {
							if (project4) {
								project4.classList.remove("opacity-0");
							}
						} else {
							if (project4) {
								project4.classList.add("opacity-0");
							}
						}
					},
				},
			}
		);

	
		return () => {
			pin.kill();
		};
	}, []);

	return (
		<section className="scroll-section-outer overflow-x-hidden col-span-12 pb-10 pt-6 bg-white">
			<div ref={triggerRef} className="pt-5">
				<p className="font-medium text-sm mb-5 col-span-12 pl-[10px] md:pl-5">
					Latest Projects
				</p>
				<div
					id="scroller"
					ref={sectionRef}
					className="scroll-section-inner w-[400vw] flex flex-row relative md:h-[85vh] bg-white"
				>
					<Project
						image={Wilson}
						url={"/project/c32880e8-aa57-4b41-950f-6da501e23ff4"}
					/>
					<Project
						image={Mortimer}
						url={"/project/02e67060-76ee-4276-8723-96c9870ca453"}
					/>
					<Project
						image={Marshall}
						url={"/project/02e67060-76ee-4276-8723-96c9870ca453"}
					/>
					<Project
						image={Wilson}
						url={"/project/c32880e8-aa57-4b41-950f-6da501e23ff4"}
					/>
				</div>
				<div className="bg-white absolute px-[10px] md:px-5  grid grid-cols-12 mt-[10px] md:mt-5 items-start w-full transition duration-500 z-[1]">
					<p id="project-title" className="font-medium">
						Wilson
					</p>
					<Link
						href="/project/c32880e8-aa57-4b41-950f-6da501e23ff4"
						className="col-start-3 col-span-4 flex items-center space-x-5 text-[#999999] "
					>
						<p>View Home</p>
						<svg
							width="7"
							height="12"
							viewBox="0 0 7 12"
							fill="#999999"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6.3131 5.65685L0.65625 0L0.656372 11.3138L6.3131 5.65685Z"
								fill="#999999"
							/>
						</svg>
					</Link>

					<span className="col-start-1 md:col-start-10 col-span-12 md:col-span-3 mt-5 md:mt-0 md:ml-auto flex items-center md:justify-center">
						<div className="flex gap-x-[10px] gap-y-[10px] flex-wrap mb-5">
							<div
								id="area"
								className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs"
							>
								220m2
							</div>
							<div
								id="bedrooms"
								className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs"
							>
								3 Bedrooms
							</div>
							<div
								id="bathrooms"
								className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs"
							>
								2 Bathrooms
							</div>
						</div>
					</span>
				</div>

				<div className="project-2 opacity-0 bg-white absolute px-[10px] md:px-5  grid grid-cols-12 mt-[10px] md:mt-5 items-start w-full transition duration-500 z-[2]">
					<p id="project-title" className="font-medium">
						Mortimer
					</p>
					<Link
						href="/project/c32880e8-aa57-4b41-950f-6da501e23ff4"
						className="col-start-3 col-span-4 flex items-center space-x-5 text-[#999999] "
					>
						<p>View Home</p>
						<svg
							width="7"
							height="12"
							viewBox="0 0 7 12"
							fill="#999999"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6.3131 5.65685L0.65625 0L0.656372 11.3138L6.3131 5.65685Z"
								fill="#999999"
							/>
						</svg>
					</Link>

					<span className="col-start-1 md:col-start-10 col-span-12 md:col-span-3 mt-5 md:mt-0 md:ml-auto flex items-center md:justify-center">
						<div className="flex gap-x-[10px] gap-y-[10px] flex-wrap mb-5">
							<div
								id="area"
								className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs"
							>
								223m2
							</div>
							<div
								id="bedrooms"
								className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs"
							>
								4 Bedrooms
							</div>
							<div
								id="bathrooms"
								className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs"
							>
								2 Bathrooms
							</div>
						</div>
					</span>
				</div>

				<div className="project-3 opacity-0 bg-white absolute px-[10px] md:px-5  grid grid-cols-12 mt-[10px] md:mt-5 items-start w-full transition duration-500 z-[3]">
					<p id="project-title" className="font-medium">
						Marshall
					</p>
					<Link
						href="/project/c32880e8-aa57-4b41-950f-6da501e23ff4"
						className="col-start-3 col-span-4 flex items-center space-x-5 text-[#999999] "
					>
						<p>View Home</p>
						<svg
							width="7"
							height="12"
							viewBox="0 0 7 12"
							fill="#999999"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6.3131 5.65685L0.65625 0L0.656372 11.3138L6.3131 5.65685Z"
								fill="#999999"
							/>
						</svg>
					</Link>

					<span className="col-start-1 md:col-start-10 col-span-12 md:col-span-3 mt-5 md:mt-0 md:ml-auto flex items-center md:justify-center">
						<div className="flex gap-x-[10px] gap-y-[10px] flex-wrap mb-5">
							<div
								id="area"
								className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs"
							>
								220m2
							</div>
							<div
								id="bedrooms"
								className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs"
							>
								4 Bedrooms
							</div>
							<div
								id="bathrooms"
								className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs"
							>
								2 Bathrooms
							</div>
						</div>
					</span>
				</div>

				<div className="project-4 opacity-0 bg-white absolute px-[10px] md:px-5  grid grid-cols-12 mt-[10px] md:mt-5 items-start w-full z-[4] transition duration-500">
					<p id="project-title" className="font-medium">
						Wilson
					</p>
					<Link
						href="/project/c32880e8-aa57-4b41-950f-6da501e23ff4"
						className="col-start-3 col-span-4 flex items-center space-x-5 text-[#999999] hover:opacity-50 duration"
					>
						<p>View Home</p>
						<svg
							width="7"
							height="12"
							viewBox="0 0 7 12"
							fill="#999999"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6.3131 5.65685L0.65625 0L0.656372 11.3138L6.3131 5.65685Z"
								fill="#999999"
							/>
						</svg>
					</Link>
					<span className="col-start-1 md:col-start-10 col-span-12 md:col-span-3 mt-5 md:mt-0 md:ml-auto flex items-center md:justify-center">
						<div className="flex gap-x-[10px] gap-y-[10px] flex-wrap mb-5">
							<div
								id="area"
								className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs"
							>
								220m2
							</div>
							<div
								id="bedrooms"
								className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs"
							>
								3 Bedrooms
							</div>
							<div
								id="bathrooms"
								className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs"
							>
								2 Bathrooms
							</div>
						</div>
					</span>
				</div>
			</div>
		</section>
	);
}

export default LatestProjects;
