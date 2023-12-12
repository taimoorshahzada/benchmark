"use client";


import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import Benchmark from "./assets/images/Benchmark.svg";
import Mortimer from "./assets/images/Projects-Mortimer-1500-x-1000-High-Res-2.jpg";
import Container from "./components/container";
import Project from "./components/project";
import AboutSection from "./components/about-us";
import LatestProjects from "./components/latestProjects";


gsap.registerPlugin(ScrollTrigger);
export default function Home() {
	return (
		<>
			<Container>
				<h1 className="font-medium text-sm-3xl lg:text-2xl xl:text-3xl col-span-12 md:col-span-11 m-translate-x-[10px] md:-translate-x-5 mb-large mt-24 md:mt-3 -translate-y-3 ">
					{/* <Image
						className="md:pl-5"
						src={Benchmark}
						alt="Benchmark Homes"
						width={3000}
						height={1000}
						priority
					/> */}
					Benchmark <br />
					Homes
				</h1>

				<p className="col-span-6 md:col-span-2  font-medium text-sm mb-3 md:mb-0">
					Design and build architecture
				</p>
				<div className="col-start-1 col-span-12 md:col-start-7 md:col-span-6">
					<Image
						className="aspect-[3/2] object-cover"
						src={Mortimer}
						alt="Mortimer Kitchen"
						width={1200}
						height={600}
					/>
				</div>

				<p className="font-medium text-sm md:text-lg col-span-12 my-medium">
					While the simple definition of home is the four walls and roof within
					which you live, the true meaning is found in the spaces you inhabit.
					Home is a place where you can laugh, experience and enjoy the day
					to-day. It is a space you love, you care for and that ultimately you
					have created. At Benchmark, we pride ourselves on helping you achieve
					this. Working with you to turn your wants and needs into a tangible
					reality is what inspires and drives us to do what we do.
				</p>
			</Container>

			<LatestProjects />

			<AboutSection />
		</>
	);
}
