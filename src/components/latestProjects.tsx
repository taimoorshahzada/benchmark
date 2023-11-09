import { useRef, useEffect, use } from "react";
import Project from "./project";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

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
				translateX: "-200vw",
				ease: "none",
				duration: 1,
				scrollTrigger: {
					trigger: triggerRef.current,
					start: "top top",
					end: "2000 top",
					scrub: 0,
					pin: true,
				},
			}
		);
		console.log("x");
		return () => {
			pin.kill();
		};
	}, []);

	return (
		<section className="scroll-section-outer overflow-hidden col-span-12">
			<div ref={triggerRef} className="pt-2 pb-10">
				<p className="font-medium text-sm mb-5 col-span-12">Latest Projects</p>
				<div
					ref={sectionRef}
					className="scroll-section-inner w-[400%] flex flex-row relative "
				>
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
