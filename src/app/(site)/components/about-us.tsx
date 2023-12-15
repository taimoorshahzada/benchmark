import Image from "next/image";
import Photo from "../assets/images/35ac116a8b1e821cb1bf3bd1e004e6a4-cover-large.jpg";
import CountUp from "react-countup";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../components/ui/accordion";
import { useEffect, useRef, useState } from "react";
import CountTrigger from "react-scroll-trigger";
import Link from "next/link";
import ReviewCards from "./reviewcards";
import AboutAccordions from "./about-accordions";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AboutSection() {
	const [countersOn, setCountersOn] = useState([false, false, false]);

	const handleEnterViewport = (index: any) => {
		setCountersOn((prev) => {
			const newState = [...prev];
			newState[index] = true;
			return newState;
		});
	};

	const [isInView, setIsInView] = useState(false);
	const sectionRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsInView(entry.isIntersecting);
			},
			{ threshold: 0.15 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		const experience = gsap.timeline({
			scrollTrigger: {
				trigger: ".numbers",
				pin: true,
				start: "top-=100 top",
				end: "bottom+=620 top",
				scrub: 1,
				anticipatePin: 1,
				pinSpacing: true,
			},
		});

		const awards = gsap.timeline({
			scrollTrigger: {
				trigger: ".awards",
				pin: true,
				start: "top-=400 top",
				end: "bottom-=675 top",
				scrub: 1,
				anticipatePin: 1,
				pinSpacing: true,
			},
		});

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
			awards.kill();
			experience.kill();
		};
	}, []);

	return (
		<section className={`col-span-12 fade-in-section mt-[300px] `}>
			<div className="grid grid-cols-2 min-h-screen relative">
				<div className={`row-span-4 col-span-2 md:col-span-1`}>
					<div
						className={`hidden md:block md:h-[50vh] bg-white z-[1] pb-32 md:pb-24 mx-[10px] md:mx-5 col-span-2  md:col-span-1 sticky top-0 `}
					>
						<p className="text-black text-xs-medium md:py-5 ">About Us</p>
					</div>

					<div
						className={`numbers md:h-screen bg-white z-[2] border-t md:border-b border-dotted border-grey pt-3 pb-32 md:pb-24 mx-[10px] md:mx-5 col-span-2  md:col-span-1 mt-12   `}
					>
						<h4 className="md:pt-3 text-xs-medium pb-8 md:pb-0">
							Years of Experience
						</h4>
						<CountTrigger onEnter={() => handleEnterViewport(0)}>
							{countersOn[0] && (
								<CountUp
									start={0}
									end={25}
									duration={1}
									suffix="+"
									className="font-medium text-sm-2xl md:text-2xl"
								/>
							)}
						</CountTrigger>
					</div>

					<div
						className={`awards md:h-screen z-[3] relative bg-white border-t border-dotted border-grey pt-3 pb-32 md:pb-24 mx-[10px] md:mx-5 col-span-2 md:col-span-1 ${
							isInView ? "" : ""
						} `}
					>
						<h4 className="md:pt-3 text-xs-medium pb-8 md:pb-0">
							Master Builders Awards
						</h4>
						<CountTrigger onEnter={() => handleEnterViewport(1)}>
							{countersOn[1] && (
								<CountUp
									start={0}
									end={20}
									duration={0.75}
									suffix="+"
									className="font-medium text-sm-2xl md:text-2xl"
								/>
							)}
						</CountTrigger>
					</div>

					<div
						className={`bg-white z-[4]  border-t border-dotted border-grey pt-3 pb-32 md:pb-24 mx-[10px] md:mx-5 col-span-2 md:col-span-1  sticky top-[60vh]`}
					>
						<h4 className="md:pt-3 text-xs-medium pb-8 md:pb-0">
							Houses Built
						</h4>
						<CountTrigger onEnter={() => handleEnterViewport(2)}>
							{countersOn[2] && (
								<CountUp
									start={0}
									end={1500}
									duration={0.5}
									separator=""
									suffix="+"
									className="font-medium text-sm-2xl md:text-2xl"
								/>
							)}
						</CountTrigger>
						<div
							ref={sectionRef}
							className={`bg-white text-black flex flex-col justify-end relative px-[10px] z-[5] md:px-5 col-span-2 md:col-span-1 pb-[60px] md:pb-[300px] md:row-start-5 row-span-1  md:h-screen`}
						>
							<AboutAccordions />
							<Link
								href="/about-us"
								className="mt-[60px] w-fit bg-[#F5F5F5] text-black rounded-[5px] text-xxs flex p-[10px] cursor-pointer hover:opacity-50 col-span-6 mb-6"
							>
								Learn more
								<div className="ml-[50px] flex items-center">
									<svg
										width="7"
										height="12"
										viewBox="0 0 7 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M6.3131 5.65685L0.65625 0L0.656372 11.3138L6.3131 5.65685Z"
											fill="black"
										/>
									</svg>
								</div>
							</Link>
						</div>
					</div>
				</div>

				<div
					className={`bg-black text-white h-screen flex flex-col justify-end z-[5] pl-3 pb-10 col-span-2 md:col-span-1 md:row-start-6 border-r border-grey border-dotted md:sticky top-0 row-span-6 `}
				>
					<p className="absolute top-5 left-5">Our Process</p>
					<h1 className="font-medium text-sm-xl md:text-xl mb-medium">01</h1>
					<h1 className="font-medium text-sm-xl md:text-xl text-wrap">
						Meeting/
						<br />
						Design
					</h1>
					<Link
						href="/about-us"
						className="mt-[60px] w-fit bg-[#F5F5F5] rounded-[5px] flex text-xxs p-[10px] cursor-pointer hover:opacity-50 col-span-6 text-black"
					>
						Learn more
						<div className="ml-[50px] flex items-center">
							<svg
								width="7"
								height="12"
								viewBox="0 0 7 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6.3131 5.65685L0.65625 0L0.656372 11.3138L6.3131 5.65685Z"
									fill="black"
								/>
							</svg>
						</div>
					</Link>
				</div>

				<div className="md:bg-black  col-span-2 row-start-1 md:col-start-2 row-span-5 relative order-1 ">
					<p className="block md:hidden text-black text-xs-medium  md:py-5 p-[10px]">
						About Us
					</p>
					<div className="bg-black md:sticky top-0">
						<Image
							className=" object-cover"
							src={Photo}
							alt="Richard and Sam"
							width={2000}
							height={1000}
						/>
					</div>
				</div>
				<div className="bg-black relative z-[6] md:row-start-6 md:col-start-2 h-screen w-[100vw] md:w-full flex justify-center items-center top-0 row-span-6 ">
					<p className="absolute left-5 top-5 text-white">Reviews</p>
					<ReviewCards />
				</div>
			</div>
		</section>
	);
}

export default AboutSection;