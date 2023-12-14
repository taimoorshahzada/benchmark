"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Page() {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		return () => {
			ScrollTrigger.create({
				trigger: "section.two",
				start: "top top",
				endTrigger: "section.three",
				end: "bottom top",
				pin: ".pin-me",
			});
		};
	}, []);

	return (
		<div className="w-full overflow-x-hidden">
			<section className="one h-[75vh]">
				<h2 className="p-4">Section 1</h2>
			</section>
			<section className="two h-[75vh] bg-gray-50">
				<h1 className="pin-me bg-red-400 p-5">
					Pin Me until Section 3 is scrolled past.
				</h1>
			</section>
			<section className="three h-[75vh]">
				<h2 className="p-4">Section 3</h2>
			</section>
			<section className="four h-[75vh] bg-gray-50">
				<h2 className="p-4">Section 4</h2>
			</section>
			<section className="five h-[75vh]">
				<h2 className="p-4">Section 5</h2>
			</section>
			<section className="six h-[75vh] bg-gray-50">
				<h2 className="p-4">Section 6</h2>
			</section>
		</div>
	);
}

export default Page;
