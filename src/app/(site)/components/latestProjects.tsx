import { useRef, useEffect } from "react";
import Project from "./project";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import Observer from "gsap/Observer";

function LatestProjects() {
	const sectionRef = useRef(null);
	const triggerRef = useRef(null);

	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(Observer);


	
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
					scrub: 0.6,
					pin: true,
				},
			}
		);

		// Define the panel to observe

		return () => {
			pin.kill();
		};
	}, []);

	return (
		<section className="scroll-section-outer overflow-x-hidden col-span-12 pb-10 pt-6">
			<div ref={triggerRef} className="pt-5">
				<p className="font-medium text-sm mb-5 col-span-12 pl-[10px] md:pl-5">
					Latest Projects
				</p>
				<div
					id="scroller"
					ref={sectionRef}
					className="scroll-section-inner w-[400vw] flex flex-row relative md:h-[85vh]"
				>
					<Project />
					<Project />
					<Project />
					<Project />
				</div>
				<div className="px-[10px] md:px-5  grid grid-cols-12 mt-[10px] items-start w-full">
					<p className="font-medium">Wilson</p>
					<span className="col-start-3 col-span-4 flex items-center space-x-5 text-[#999999] ">
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
					</span>

					<span className="col-start-1 md:col-start-10 col-span-12 md:col-span-3 mt-5 md:mt-0 md:ml-auto flex items-center md:justify-center">
						<div className="flex gap-x-[10px] gap-y-[10px] flex-wrap mb-5">
							<div className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs">
								220m2
							</div>
							<div className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs">
								3 Bedrooms
							</div>
							<div className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs">
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
