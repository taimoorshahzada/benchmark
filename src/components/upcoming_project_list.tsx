"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ProjectImage {
	imageUrl: string;
}

interface Project {
	hero_image: ProjectImage;
	featured_image_1: ProjectImage;
	featured_image_2: ProjectImage;
	images: ProjectImage[];
	suburb: string;
}
export default function UpcomingProjectsList({ projects }: any) {
	const [project, setProject] = useState(projects[0]);
	const [currentIndex, setCurrentIndex] = useState(0);

	const openLightbox = (index: number) => {
		setProject(projects[index]);
		const footer = document.getElementById("footer");
		const header = document.getElementById("header");
		const lightbox = document.getElementById("project-lightbox");
		if (footer) {
			footer.style.display = "none";
		}
		if (lightbox) {
			lightbox.style.display = "flex";
		}
		if (header) {
			header.style.display = "none";
		}
	};

	const closeLightbox = () => {
		setCurrentIndex(0);
		const footer = document.getElementById("footer");
		const header = document.getElementById("header");
		const lightbox = document.getElementById("project-lightbox");
		if (footer) {
			footer.style.display = "block";
		}
		if (lightbox) {
			lightbox.style.display = "none";
		}
		if (header) {
			header.style.display = "block";
		}
	};

	useEffect(() => {
		document.querySelectorAll(".upcoming-project").forEach((project, index) => {
			project.addEventListener("click", () => openLightbox(index));
		});
	}, []);

	return (
		<div className="col-span-12">
			{project ? (
				<div
					className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-20 z-20 backdrop-blur-lg hidden"
					id="project-lightbox"
				>
					<div className="flex fixed top-5 left-5 gap-x-1">
						{project.images.map((_: any, index: number) => (
							<div
								key={index}
								className={`rounded-full w-[10px] h-[10px] ${
									currentIndex == index ? "bg-black" : "bg-white"
								}`}
							></div>
						))}
					</div>
					<button
						onClick={closeLightbox}
						className="flex fixed top-[10px] right-[10px] text-xxs bg-white p-3 rounded-[5px] z-10 border border-black border-solid transition duration-300 hover:bg-opacity-50"
						id={"closeMenuButton"}
					>
						Close <div className="ml-12 rotate-45">+</div>
					</button>
					<div
						className="fixed inset-y-2/4 cursor-pointer left-5 transform -translate-y-1/2 -translate-x-1/2"
						onClick={() =>
							setCurrentIndex(
								currentIndex == 0 ? project.images.length - 1 : currentIndex - 1
							)
						}
					>
						<svg
							width="11"
							height="22"
							viewBox="0 0 11 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M-0.000156224 10.6066L10.6064 0L10.6062 21.2134L-0.000156224 10.6066Z"
								fill="#999999"
							/>
						</svg>
					</div>
					<Image
						alt=""
						className="fixed inset-2/4 transform -translate-y-1/2 -translate-x-1/2"
						src={project.images[currentIndex].imageUrl}
						width={1000}
						height={1000}
					/>
					<div
						className="fixed inset-y-2/4 cursor-pointer right-5 transform -translate-y-1/2 -translate-x-1/2"
						onClick={() =>
							setCurrentIndex(
								currentIndex == project.images.length - 1 ? 0 : currentIndex + 1
							)
						}
					>
						<svg
							width="11"
							height="22"
							viewBox="0 0 11 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.6066 10.6066L0 0L0.000228882 21.2134L10.6066 10.6066Z"
								fill="#999999"
							/>
						</svg>
					</div>
				</div>
			) : (
				""
			)}
			{projects.map((upcomingProject: Project, index: number) => (
				<div
					key={index}
					className="upcoming-project cursor-pointer border-[#999999] border-dashed border-t border-1 mb-[60px] grid grid-cols-12 gap-x-5"
				>
					<div className="col-span-2 mb-9">Suburb</div>
					<div className="col-span-2 col-start-3">
						Test {upcomingProject.suburb}
					</div>
					<Image
						alt=""
						src={upcomingProject.featured_image_1.imageUrl}
						className="col-span-2 col-start-1 w-full"
						width={1000}
						height={1000}
					/>
					<Image
						alt=""
						src={upcomingProject.featured_image_2.imageUrl}
						className="col-span-2 col-start-3 w-full"
						width={1000}
						height={1000}
					/>
					<Image
						alt=""
						src={upcomingProject.hero_image.imageUrl}
						className="col-span-6 col-start-7"
						width={1000}
						height={1000}
					/>
				</div>
			))}
		</div>
	);
}