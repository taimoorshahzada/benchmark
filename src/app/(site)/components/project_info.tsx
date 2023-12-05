"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

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
	slug: string;
	url: string;
}

export default function ProjectInfo({ projects, id }: any) {
  const project: Project = projects.find((project: any) => project._id === id);
  return (
		<div className="col-span-12 grid grid-cols-12 gap-x-5">
			<div className="md:col-start-5 col-span-12 md:col-span-2 mt-[10px] font-medium text-xxs md:text-xs mb-5 md:mb-0">
				Points of interest:
			</div>
			<div className="md:col-start-7 col-span-12 md:col-span-4 mb-[50px] md:mb-[150px] grid grid-cols-6 gap-[10px] md:block">
				<div className="md:flex gap-x-[10px] gap-y-[10px] flex-wrap mb-5 col-span-2">
					{project.features.map((feature: string, index: number) => (
						<div
							key={index}
							className="bg-[#F5F5F5] rounded-[5px] p-[10px] text-sm-xxs md:text-xxs col-span-2 mb-[7px]"
						>
							{feature}
						</div>
					))}
				</div>
				<div className="flex flex-col text-xxs md:text-xs col-start-3 col-span-4">
					{project.interest_points.map((point: string, index: number) => (
						<li className="list-outside" key={index}>
							{point}
						</li>
					))}
				</div>
			</div>
			<div className="row-start-1 md:row-start-3 col-span-12 text-sm-lg md:text-lg mb-20 md:mb-[200px] mt-20 md:mt-0">
				<div className="mb-10">{project.title}</div>
				<div>{project.description}</div>
			</div>
		</div>
	);
}
