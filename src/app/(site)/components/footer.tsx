"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import SocialIcons from "./social-icons";

export default function Footer() {
	return (
		<footer className="bg-transparent h-screen" id="footer">
			<div className="absolute bottom-0 grid grid-cols-12 gap-x-5 text-xs-medium mx-auto w-full bg-white md:p-5 footer-container ">
				<div className="col-start-10 md:col-start-1 row-start-1 md:col-span-2">
					<svg
						className="mt-[10px] md:mt-0"
						width="80"
						height="20"
						viewBox="0 0 80 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M20 0L0 20V0H20ZM20 0L40 20H80L60 0H20Z"
							fill="black"
						/>
					</svg>
				</div>
				<div className="p-[10px] md:p-0 col-start-1 col-span-9 md:col-start-10 md:col-span-3 md flex flex-col text-base md:mb-[233px]">
					<Link
						href="/"
						className="hover:opacity-50 transition duration-250 w-fit"
					>
						Home
					</Link>
					<Link
						href="/selected-projects"
						className="hover:opacity-50 transition duration-250 w-fit"
					>
						Selected Projects
					</Link>
					<Link
						href="/showhomes"
						className="hover:opacity-50 transition duration-250 w-fit"
					>
						Showhomes
					</Link>
					<Link
						href="/upcoming-projects"
						className="hover:opacity-50 transition duration-250 w-fit"
					>
						Upcoming Projects
					</Link>
					<Link
						href="/our-process"
						className="hover:opacity-50 transition duration-250 w-fit"
					>
						Our Process
					</Link>
					<Link
						href="/about-us"
						className="hover:opacity-50 transition duration-250 w-fit"
					>
						About Us
					</Link>
					<Link
						href="/contact-us"
						className="hover:opacity-50 transition duration-250 w-fit"
					>
						Contact Us
					</Link>
				</div>
				<div className="ml-[10px] md:ml-0 col-span-2 row-start-3 w-fit bg-[#F5F5F5] rounded-[5px]  text-xxs p-[10px] mb-[80px] cursor-pointer hover:opacity-50 flex items-center h-[50px]">
					<a href="https://buildertrend.net/">Login</a>
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
				</div>
				<div className="col-start-10 flex gap-x-1">
					<SocialIcons />
				</div>

				<div className="row-start-4 col-span-12 grid grid-cols-12 gap-x-5 items-end">
					<div className="pl-[10px] md:pl-0 col-span-12 md:col-span-3 flex flex-col text-xxs md:text-xs-medium">
						<span>
							<Link
								href="tel:033438260"
								className="hover:opacity-50 transition duration-250 w-fit"
							>
								+64 3 343 8260
							</Link>
							<br />
							<Link
								href="mailto:info@benchmarkhomes.co.nz"
								className="hover:opacity-50 transition duration-250 w-fit"
							>
								info@benchmarkhomes.co.nz
							</Link>
						</span>
					</div>
					<div className="pr-[10px] md:pr-0 ml-auto md:ml-0 col-span-12 md:col-start-4 md:col-span-3 text-xxs md:text-xs-medium">
						12 Whitburn Ave, Milns Park,
						<br /> Halswell, Christchurch, New Zealand
					</div>
					<div className="pl-[10px]  py-[10px] md:py-0 mt-auto md:mt-0 bg-black md:bg-white text-[#999999]  md:text-black col-span-12 md:col-start-10 md:col-span-3 text-[12px] leading-[14px] md:leading-normal md:text-xxs font-medium">
						Copyright © 2023 Benchmark Homes | All Rights Reserved.{" "}
						<br className="hidden lg:block" />
						View <span className="underline">Privacy Policy</span> &{" "}
						<span className="underline">Email Disclaimer.</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
