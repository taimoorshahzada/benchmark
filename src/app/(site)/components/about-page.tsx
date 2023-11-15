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
				<div className="bg-black sticky top-0 h-screen">
					<Image
						src={Photo}
						alt="Richard and Sam"
						width={2000}
						height={1000}
						priority
					/>
				</div>
				<div className="mx-5">
					<h1 className="font-medium text-xl col-span-11 mb-medium ">
						About Us
					</h1>
					<div className="text-base mb-[450px] ">{info.description}</div>
					<div className="text-xs-medium mb-7 ">Over the Years</div>
					<div className="text-xs mb-[48px]  whitespace-pre-line">
						{info.over_the_years}
					</div>
					<div className="text-xs flex justify-between mb-large ">
						<div>Magazine</div>
						<div>
							Want to learn more about us? Check out our magazine
							<a target="_blank" href="">
								{" "}
								here{" "}
								<span>
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
					<div className="border-b border-dotted border-grey pt-3 pb-24 h-screen">
						<h4 className="pt-3 text-xs-medium">Years of Experience</h4>
						<ScrollTrigger onEnter={() => handleEnterViewport(0)}>
							{countersOn[0] && (
								<CountUp
									start={0}
									end={25}
									duration={2}
									suffix="+"
									className="font-medium text-2xl mb-24"
								/>
							)}
						</ScrollTrigger>
					</div>

					<div className="border-y border-dotted border-grey pt-3 pb-24 h-screen">
						<h4 className="pt-3 text-xs-medium">Master Builders Awards</h4>
						<ScrollTrigger onEnter={() => handleEnterViewport(1)}>
							{countersOn[1] && (
								<CountUp
									start={0}
									end={20}
									duration={2}
									suffix="+"
									className="font-medium text-2xl mb-24"
								/>
							)}
						</ScrollTrigger>
					</div>

					<div className="border-y border-dotted border-grey pt-3 pb-24 h-screen">
						<h4 className="pt-3 text-xs-medium">Houses Built</h4>
						<ScrollTrigger onEnter={() => handleEnterViewport(2)}>
							{countersOn[2] && (
								<CountUp
									start={0}
									end={1500}
									duration={2}
									separator=""
									suffix="+"
									className="font-medium text-2xl mb-24"
								/>
							)}
						</ScrollTrigger>
					</div>

					<div className="h-screen">
						<Accordion type="single" collapsible>
							<AccordionItem value="item-1">
								<AccordionTrigger>Experts in Design & Build</AccordionTrigger>
								<AccordionContent>
									Lorem ipsum dolor sit amet finibus. Nec mus nisl mi diam
									vivamus si. Nisi egestas per orci vel id adipiscing dictum
									tempus dolor sollicitudin dui.
								</AccordionContent>
							</AccordionItem>
						</Accordion>

						<Accordion type="single" collapsible>
							<AccordionItem value="item-1">
								<AccordionTrigger>Experience & Diverse Team</AccordionTrigger>
								<AccordionContent>
									Lorem ipsum dolor sit amet finibus. Nec mus nisl mi diam
									vivamus si. Nisi egestas per orci vel id adipiscing dictum
									tempus dolor sollicitudin dui.
								</AccordionContent>
							</AccordionItem>
						</Accordion>

						<Accordion type="single" collapsible>
							<AccordionItem value="item-1">
								<AccordionTrigger>Comprehensive process</AccordionTrigger>
								<AccordionContent>
									Lorem ipsum dolor sit amet finibus. Nec mus nisl mi diam
									vivamus si. Nisi egestas per orci vel id adipiscing dictum
									tempus dolor sollicitudin dui.
								</AccordionContent>
							</AccordionItem>
						</Accordion>

						<Accordion type="single" collapsible>
							<AccordionItem value="item-1">
								<AccordionTrigger>Showhomes</AccordionTrigger>
								<AccordionContent>
									Lorem ipsum dolor sit amet finibus. Nec mus nisl mi diam
									vivamus si. Nisi egestas per orci vel id adipiscing dictum
									tempus dolor sollicitudin dui.
								</AccordionContent>
							</AccordionItem>
						</Accordion>

						<Accordion type="single" collapsible>
							<AccordionItem value="item-1">
								<AccordionTrigger>Virtual Reality</AccordionTrigger>
								<AccordionContent>
									Lorem ipsum dolor sit amet finibus. Nec mus nisl mi diam
									vivamus si. Nisi egestas per orci vel id adipiscing dictum
									tempus dolor sollicitudin dui.
								</AccordionContent>
							</AccordionItem>
						</Accordion>

						<Accordion type="single" collapsible>
							<AccordionItem value="item-1">
								<AccordionTrigger>Registered Master Builder</AccordionTrigger>
								<AccordionContent>
									Lorem ipsum dolor sit amet finibus. Nec mus nisl mi diam
									vivamus si. Nisi egestas per orci vel id adipiscing dictum
									tempus dolor sollicitudin dui.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutSection;
