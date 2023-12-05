import { useRef, useEffect } from "react";
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

		return () => {
			pin.kill();
		};
	}, []);

	return (
		<section className="scroll-section-outer overflow-x-hidden col-span-12 pb-10 pt-6">
			<div ref={triggerRef}>
				<p className="font-medium text-sm my-5 col-span-12 pl-[10px] md:pl-5">
					Latest Projects
				</p>
				<div
					ref={sectionRef}
					className="scroll-section-inner w-[400vw] flex flex-row relative md:h-[90vh]"
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
