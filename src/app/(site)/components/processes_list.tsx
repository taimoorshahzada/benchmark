"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function ProcessesList({ processes, walkthroughs }: any) {
	useEffect(() => {
		const processContainer = document.getElementById("processes-container");
		let prevScrollHeight = processContainer?.scrollTop;

		const checkScrollPos = () => {
			const title = document.getElementById("process-title");
			const titleIndex = document.getElementById("process-title-index");
			const processElements = document.querySelectorAll(".process");

			processElements.forEach((process, index) => {
				const processRect = process.getBoundingClientRect();
				if (
					prevScrollHeight &&
					processContainer &&
					processContainer.scrollTop < prevScrollHeight
				) {
					if (processRect.top > 0 && processRect.top < 300) {
						if (titleIndex) {
							titleIndex.innerText = index < 10 ? `0${index + 1}` : `${index}`;
						}
						if (title) {
							title.innerText = processes[index].title;
						}
					}
				} else if (
					prevScrollHeight &&
					processContainer &&
					processContainer.scrollTop > prevScrollHeight
				) {
					if (
						processRect.bottom < window.innerHeight &&
						processRect.bottom > window.innerHeight - 300
					) {
						if (titleIndex) {
							titleIndex.innerText = index < 10 ? `0${index + 1}` : `${index}`;
						}
						if (title) {
							title.innerText = processes[index].title;
						}
					}
				}
			});

			prevScrollHeight = processContainer?.scrollTop;
		};
		if (processContainer) {
			processContainer.addEventListener("scroll", checkScrollPos);
		}
	}, []);

	return (
		<div className="flex">
			<div className="w-1/2 bg-black relative">
				<div className="sticky top-0 h-screen">
					<div className="h-full flex flex-col justify-end pl-3 pb-10">
						<h1
							className="font-medium text-white text-xl  mb-medium"
							id="process-title-index"
						>
							01
						</h1>
						<h1
							className="font-medium text-white text-xl text-wrap"
							id="process-title"
						>
							{processes ? processes[0].title : ""}
						</h1>
					</div>
				</div>
			</div>
			<div className="w-1/2">
				<h1 className="font-medium text-xl  mb-[90px] px-5">
					Our <br /> Process
				</h1>
				{processes.map((process: any, index: number) => (
					<div
						key={index}
						className={`w-full process ${
							index == processes.length - 1 ? "" : "px-5"
						}`}
					>
						{index == processes.length - 1 ? <div className=""></div> : ""}
						<div
							className={`${
								index == processes.length - 1
									? "pt-[450px] bg-black text-white px-5 transition"
									: "mt-large border-grey border-dashed border-t border-1"
							} flex flex-col`}
						>
							{index == processes.length - 1 ? (
								""
							) : (
								<div className="mt-[10px] mb-10 text-xs-medium">
									{index < 10 ? `0${index + 1}` : index}
								</div>
							)}
							<Image
								className="w-full h-auto mb-[10px]"
								src={process.hero_image.imageUrl}
								alt="Process Image"
								width={1000}
								height={1000}
							/>
							<div className="text-xs whitespace-pre-line">
								{process.description}
							</div>
						</div>
					</div>
				))}
				<div className="pt-large  grid grid-cols-2 gap-x-[2px] text-xs-medium text-white gap-y-[60px] pb-[180px]">
					<div className="mb-5 px-5">Virtual walkthroughs</div>
					{walkthroughs.props.walkthroughs.map(
						(walkthrough: any, index: number) => (
							<div
								key={index}
								className={`${
									index % 2 == 0
										? "col-start-1 ml-5 pr-[9px]"
										: "col-start-2 pl-[9px] mr-5"
								} flex flex-col border-grey border-dashed border-t border-1`}
							>
								<div className="mt-[10px]">{walkthrough.title}</div>
								<div>{walkthrough.location}</div>
								<iframe
									allowFullScreen
									src={walkthrough.url}
									title={walkthrough.title}
								></iframe>
							</div>
						)
					)}
					{walkthroughs.props.walkthroughs.length % 2 != 0 ? (
						<div className="border-grey border-dashed border-t border-1 mr-5"></div>
					) : (
						""
					)}
				</div>
				<div className="flex flex-col mx-5 h-screen">
					<h1 className="font-medium text-xl mb-large px-5">Get In Touch</h1>
					<div className="grid grid-cols-2 gap-[10px] text-xxs mb-5">
						<input
							className="bg-[#F5F5F5] outline-none scrollbar-hide resize-none rounded-[5px] p-3"
							placeholder="First Name"
							name="first_name"
						></input>
						<input
							className="bg-[#F5F5F5] outline-none scrollbar-hide resize-none rounded-[5px] p-3 col-start-2"
							placeholder="Last Name"
							name="last_name"
						></input>
						<input
							className="bg-[#F5F5F5] outline-none scrollbar-hide resize-none rounded-[5px] p-3"
							placeholder="Email"
							name="email"
						></input>
						<input
							className="bg-[#F5F5F5] outline-none scrollbar-hide resize-none rounded-[5px] p-3 col-start-2"
							placeholder="Phone"
							name="phone"
						></input>
						<div className="relative h-[100px] col-span-2">
							<textarea
								className="bg-[#F5F5F5] outline-none scrollbar-hide resize-none rounded-[5px] p-3 w-full h-full"
								placeholder="Message"
								name="message"
							></textarea>
							<button
								className="flex absolute items-center right-3 bottom-[10px] bg-white p-3 rounded-[5px] z-10 transition duration-300 hover:bg-opacity-50"
								id={"closeMenuButton"}
							>
								<div className="mr-9">Send</div>
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
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}