"use client";

import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import React, { useEffect } from "react";

function ProcessText() {
	const processes = [
		"Meeting/ Design",
		"Concept Plan",
		"Formal Drafting",
		"Price Presentation",
		"Contract Signing",
		"Build",
		"Virtual Reality",
	];

	return (
		<div
			className={`process h-screen bg-black w-1/2 text-white  flex flex-col justify-end z-[5] pl-3 pb-10 col-span-2 md:col-span-1 md:row-start-6 border-r border-grey border-dotted md:sticky top-0 row-span-6 `}
		>
			<p className="absolute top-5 left-5">Our Process</p>

			{processes.map((process, index) => (
				<div
					className={`process-text absolute bottom-40  ${
						index == 0 ? "" : "invisible"
					}`}
					key={process}
				>
					<h1 className="font-medium text-sm-xl md:text-xl mb-medium">
						{index == processes.length - 1 ? "+" : index + 1}
					</h1>
					<h1 className="font-medium text-sm-xl md:text-xl text-wrap">
						{process}
					</h1>
				</div>
			))}

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
	);
}

export default ProcessText;
