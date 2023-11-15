import Image from "next/image";
import Photo from "../assets/images/Home-Benchmark-Homes-1000-x-1000-High-Res-560x400.jpg";
import CountUp from "react-countup";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../components/ui/accordion";
import { useRef, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

function AboutSection() {
	const [countersOn, setCountersOn] = useState([false, false, false]);

	const handleEnterViewport = (index) => {
		setCountersOn((prev) => {
			const newState = [...prev];
			newState[index] = true;
			return newState;
		});
	};

	return (
		<section className="col-span-12 ml-5">
			<div className="font-medium text-sm mb-5 h-[300px] relative">
				<p className="absolute bottom-0">About Us</p>
			</div>

			<div className="grid grid-cols-2 min-h-screen relative">
				<div className="mr-5 ">
					<div className="pinned border-b border-dotted border-grey pt-3 pb-24 h-screen">
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

				<div className="bg-black sticky top-0 h-screen">
					<Image src={Photo} alt="Richard and Sam" width={2000} height={1000} />
				</div>
			</div>
		</section>
	);
}

export default AboutSection;