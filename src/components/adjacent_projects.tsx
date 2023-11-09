"use client"

import {next} from "slate";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectImage {
	imageUrl: string;
}

interface Project {
	landscape_hero: ProjectImage;
	portrait_hero: ProjectImage;
	title: string;
	description: string;
	features: string[];
	interest_points: string[];
	images: ProjectImage[];
	hero_display: string;
	_id: string;
}

export default function AdjacentProjects({ projects, id }: any) {
	const projectIndex = projects.findIndex((project: any) => project._id === id);
	const project: Project = projects[projectIndex];
	const prevProject: Project =
		projectIndex == 0
			? projects[projects.length - 1]
			: projects[projectIndex - 1];
	const nextProject: Project =
		projectIndex == projects.length - 1
			? projects[0]
			: projects[projectIndex + 1];

	return (
		<div className="col-span-12 grid grid-cols-12 gap-x-5 border-[#999999] border-dashed border-t border-1 text-xs-medium mb-[200px]">
			{project._id != prevProject._id ? (
				<div className="col-span-3 flex flex-col mt-[10px]">
					<div className="flex justify-between w-full mb-9">
						<div>Previous Project</div>
						<div>{prevProject.title}</div>
					</div>
					<Image
						className="w-full mb-5"
						src={
							prevProject.hero_display == "Landscape"
								? prevProject.landscape_hero.imageUrl
								: prevProject.portrait_hero.imageUrl
						}
						alt={prevProject.title}
					/>

					<Link
						href={`/project/${prevProject._id}`}
						className="w-fit bg-[#F5F5F5] rounded-[5px] flex text-xs p-3 cursor-pointer hover:opacity-50"
					>
						View Project
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
			) : (
				""
			)}
			{project._id != prevProject._id ? (
				<div className="col-span-3 col-start-10 flex flex-col mt-[10px]">
					<div className="flex justify-between w-full mb-9">
						<div>Next Project</div>
						<div>{nextProject.title}</div>
					</div>
					<Image
						className="w-full mb-5"
						src={
							nextProject.hero_display == "Landscape"
								? nextProject.landscape_hero.imageUrl
								: nextProject.portrait_hero.imageUrl
						}
						alt={nextProject.title}
					/>

					<Link
						href={`/project/${prevProject._id}`}
						className="w-fit bg-[#F5F5F5] rounded-[5px] flex text-xs p-3 cursor-pointer hover:opacity-50"
					>
						View Project
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
			) : (
				""
			)}
		</div>
	);
}