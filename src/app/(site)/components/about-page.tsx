"use client";

import Image from "next/image";
import Photo from "../assets/images/35ac116a8b1e821cb1bf3bd1e004e6a4-cover-large.jpg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../components/ui/accordion";
import { useRef, useState } from "react";
import AboutAccordions from "./about-accordions";

function AboutSection({ info }: any) {
	const [countersOn, setCountersOn] = useState([false, false, false]);

	const handleEnterViewport = (index: number) => {
		setCountersOn((prev) => {
			const newState = [...prev];
			newState[index] = true;
			return newState;
		});
	};
	return (
		<section className="col-span-12">
			<div className="grid grid-cols-2 min-h-screen relative">
				<div className="bg-black md:sticky top-0 h-screen overflow-hidden col-span-2 md:col-span-1 hidden md:block">
					<Image
						src={Photo}
						alt="Richard and Sam"
						width={2000}
						height={1000}
						priority
					/>
				</div>
				<div className=" mt-6 col-span-2 md:col-span-1">
					<div className="bg-white md:sticky top-6 md:h-screen mx-[10px] md:mx-5">
						<h1 className="font-medium text-sm-xl md:text-xl col-span-11 mb-medium  md:col-span-1 mt-16 md:mt-0">
							About Us
						</h1>
						<div className="text-xs-medium md:text-base mb-5 md:mb-[450px]">
							{info.description}
						</div>
					</div>

					<Image
						src={Photo}
						alt="Richard and Sam"
						width={2000}
						height={1000}
						priority
						className="block md:hidden mb-20 md:mb-32"
					/>

					<div className="bg-white z-[2] sticky top-0 h-screen mx-[10px] md:mx-5 ">
						<div className="text-xxs font-medium md:text-xs-medium my-3 md:my-7 pt-6 ">
							Over the Years
						</div>
						<div className="text-xxs md:text-xs mb-[48px]  whitespace-pre-line">
							{info.over_the_years}
						</div>
						<div className="text-xxs md:text-xs flex justify-between mb-medium md:mb-large">
							<div className="me-5 md:me-0 font-medium">Magazine</div>
							<div className="inline-block">
								Want to learn more about us? Check out our magazine
								<a target="_blank" href="" className="inline-block ms-2">
									{" "}
									here{" "}
									<span className="inline-block">
										<svg
											width="6"
											height="12"
											viewBox="0 0 6 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5.65685 5.65685L0 0L0.00012207 11.3138L5.65685 5.65685Z"
												fill="#999999"
											/>
										</svg>
									</span>
								</a>
							</div>
						</div>
					</div>

					<div className="bg-white sticky top-0 z-[3] border-t border-dotted border-grey pt-3 pb-24 h-screen mx-[10px] md:mx-5">
						<h4 className="pt-3 text-xs-medium">Years of Experience</h4>
						<ScrollTrigger onEnter={() => handleEnterViewport(0)}>
							{countersOn[0] && (
								<CountUp
									start={0}
									end={25}
									duration={2}
									suffix="+"
									className="font-medium text-sm-2xl md:text-2xl mb-24"
								/>
							)}
						</ScrollTrigger>
					</div>

					<div className="bg-white sticky top-0 z-[4] border-t border-dotted border-grey pt-3 pb-24 h-screen mx-[10px] md:mx-5">
						<h4 className="pt-3 text-xs-medium">Master Builders Awards</h4>
						<ScrollTrigger onEnter={() => handleEnterViewport(1)}>
							{countersOn[1] && (
								<CountUp
									start={0}
									end={20}
									duration={2}
									suffix="+"
									className="font-medium text-sm-2xl md:text-2xl mb-24"
								/>
							)}
						</ScrollTrigger>
					</div>

					<div className="bg-white sticky top-0 z-[5] border-t border-dotted border-grey pt-3 pb-24 h-screen mx-[10px] md:mx-5">
						<h4 className="pt-3 text-xs-medium">Houses Built</h4>
						<ScrollTrigger onEnter={() => handleEnterViewport(2)}>
							{countersOn[2] && (
								<CountUp
									start={0}
									end={1500}
									duration={2}
									separator=""
									suffix="+"
									className="font-medium text-sm-2xl md:text-2xl mb-24"
								/>
							)}
						</ScrollTrigger>
					</div>

					<div className="bg-white sticky top-0 z-[6] md:h-screen mb-32 md:mb-0 mx-[10px] md:mx-5">
						<AboutAccordions />
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutSection;
