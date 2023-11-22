import Image from "next/image";
import AboutImage from "../assets/images/35ac116a8b1e821cb1bf3bd1e004e6a4-cover-large.jpg";
import React, { useEffect } from "react";
import { getAboutPageInfo } from "../../../../sanity/sanity-utils";

export default async function AboutInfo({ over_the_years, description }: any) {
	const aboutInfo = await getAboutPageInfo;
	return (
		<div className="flex relative">
			<div className="w-1/2 bg-black sticky top-0">
				<Image
					className="w-full h-full object-cover"
					src={AboutImage}
					alt="Staff"
					width={1000}
					height={1000}
				/>
			</div>
			<div className="w-1/2 h-fit">
				<h1 className="font-medium text-sm-xl md:text-xl col-span-11 mb-medium mx-5">
					About Us
				</h1>
				<div className="text-base mb-[450px] mx-5">{description}</div>
				<div className="text-xs-medium mb-7 mx-5">Over the Years</div>
				<div className="text-xs mb-[48px] mx-5 whitespace-pre-line">
					{over_the_years}
				</div>
				<div className="text-xs flex justify-between mb-large mx-5">
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
				<div className="border-grey border-dashed border-t border-1 pt-[10px] mb-[100px] mx-5">
					<div className="text-xs-medium mb-10">Years of Experience</div>
					<div className="text-sm-2xl md:text-2xl">25+</div>
				</div>
				<div className="border-grey border-dashed border-t border-1 pt-[10px] mb-[100px] mx-5">
					<div className="text-xs-medium mb-10">Master Builder Awards</div>
					<div className="text-sm-2xl md:text-2xl">250+</div>
				</div>
				<div className="border-grey border-dashed border-t border-1 pt-[10px] mb-[100px] mx-5">
					<div className="text-xs-medium mb-10">Houses built</div>
					<div className="text-sm-2xl md:text-2xl">1500+</div>
				</div>
				<div className="border-grey border-dashed border-t border-1 text-base mb-[300px] mx-5">
					<div className="accordion mr-2 cursor-pointer flex justify-between items-center py-6">
						Question
					</div>
					<div className="accordion-panel grid grid-rows-[0fr] flex-col">
						<div className="overflow-hidden flex flex-col pl-5 text-xs mb-4">
							Answer
						</div>
					</div>
				</div>
				<div className="bg-gradient-to-b to-black from-white h-[300px]"></div>
				<div className="p-5 bg-black text-white flex flex-col text-xs pb-[200px]">
					<div className="mb-[10px]">Our Team</div>
					<div className="mb-medium">
						Our small team work closely together to ensure continuity and
						personal service for our clients. Our shared goal is an enjoyable
						and stress-free building experience, to create a unique, quality
						home for you.
					</div>
					<div className="ml-[33%] mr-5 flex flex-wrap gap-x-5 gap-y-[47px]">
						<div className="w-1/2 flex flex-col">
							{/* <Image
								className="w-full h-auto mb-5"
								src={Photo}
								alt="Richard and Sam"
								width={500}
								height={500}
							/> */}
							<div className="text-xs-medium">Richard Evans</div>
							<div className="text-xs-medium">Director</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
