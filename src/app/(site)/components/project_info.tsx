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
}

export default function ProjectInfo({ projects, id }: any) {
  const project: Project = projects.find((project: any) => project._id === id);
  return (
		<div className="col-span-12 grid grid-cols-12 gap-x-5">
			<div className="col-start-5 col-span-2 mt-[10px] font-medium">
				Points of interest:
			</div>
			<div className="col-start-7 col-span-4 mb-[150px]">
				<div className="flex gap-x-[10px] gap-y-[10px] flex-wrap mb-5">
					{project.features.map((feature: string, index: number) => (
						<div
							key={index}
							className="bg-[#F5F5F5] rounded-[5px] p-[10px] text-xxs"
						>
							{feature}
						</div>
					))}
				</div>
				<div className="flex flex-col">
					{project.interest_points.map((point: string, index: number) => (
						<li key={index}>{point}</li>
					))}
				</div>
			</div>
			<div className="col-span-12 text-sm-lg md:text-lg mb-[200px]">
				<div className="mb-10">{project.title}</div>
				<div>{project.description}</div>
			</div>
		</div>
	);
}
