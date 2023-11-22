"use client";

import Image from "next/image";
import Header from "./components/header";
import Layout from "./components/layout";
import FancyLink from "./components/fancyLink";
import { fade } from "@/app/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Container from "./components/container";
import Footer from "./components/footer";
import Lenis from "@studio-freight/lenis";
import Mortimer from "./assets/images/Projects-Mortimer-1500-x-1000-High-Res-2.jpg";
import { createClient } from "next-sanity";
import { useEffect, useRef } from "react";
import LatestProjects from "@/app/(site)/components/latestProjects";
import SlideMenu from "@/app/(site)/components/SlideMenu";
import AboutSection from "@/app/(site)/components/about-us";
import Benchmark from "./assets/images/Benchmark.svg";
import { getHomepage } from "../../../sanity/sanity-utils";

export default function Home() {
  return (
		<>
			<Container>
				<h1 className="font-medium text-sm-3xl md:text-3xl col-span-11 -translate-x-[10px] md:-translate-x-5 mb-large mt-24 md:mt-3">
					<Image
						className="pl-[10px] md:pl-5"
						src={Benchmark}
						alt="Benchmark Homes"
						width={3000}
						height={1000}
					/>
				</h1>

				<p className="col-span-6 md:col-span-12  font-medium text-sm mb-3 md:mb-0">
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
