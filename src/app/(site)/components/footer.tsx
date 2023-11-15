import Link from "next/link";
import Container from "./container";
import React from "react";
import SocialIcons from "./social-icons";

export default function Footer() {
	return (
		<footer
			className="bg-white bg-opacity-20 backdrop-blur-xl h-screen relative"
			id="footer"
		>
			<div className="absolute bottom-0 grid grid-cols-12 gap-x-5 text-xs-medium mx-auto w-full bg-white p-5">
				<div>
					<svg
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
				<div className="col-start-10 col-span-3 flex flex-col text-base mb-[233px]">
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
						href=""
						className="hover:opacity-50 transition duration-250 w-fit"
					>
						Showhomes
					</Link>
					<Link
						href=""
						className="hover:opacity-50 transition duration-250 w-fit"
					>
						Upcoming Projects
					</Link>
					<Link
						href=""
						className="hover:opacity-50 transition duration-250 w-fit"
					>
						Our Process
					</Link>
					<Link
						href=""
						className="hover:opacity-50 transition duration-250 w-fit"
					>
						About Us
					</Link>
					<Link
						href=""
						className="hover:opacity-50 transition duration-250 w-fit"
					>
						Contact Us
					</Link>
				</div>
				<div className="col-span-2 w-fit bg-[#F5F5F5] rounded-[5px] flex text-xs p-3 mb-[80px] cursor-pointer hover:opacity-50">
					Login
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

				<div className="col-span-3 flex flex-col text-xs-medium">
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
				<div className="col-start-4 col-span-3 text-xs-medium">
					12 Whitburn Ave, Milns Park,
					<br /> Halswell, Christchurch, New Zealand
				</div>
				<div className="col-start-10 col-span-3 text-xxs font-medium">
					Copyright © 2023 Benchmark Homes | All Rights Reserved. View{" "}
					<span className="underline">Privacy Policy</span> &{" "}
					<span className="underline">Email Disclaimer.</span>
				</div>
			</div>
		</footer>
	);
}
