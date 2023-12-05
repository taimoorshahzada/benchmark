"use client"

import Image from "next/image";

interface ProjectImage {
  imageUrl: string
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
}

export default function ProjectImages({projects, id}: any) {
  const project: Project = projects.find((project: any) => project._id === id);
  return (
		<div className="col-span-12 grid grid-cols-12 gap-x-5">
			{project.hero_display == "Landscape" ? (
				<div className="col-span-12 grid grid-cols-12 gap-x-5">
					{project.landscape_hero != null ? (
						<Image
							alt=""
							src={project.landscape_hero.imageUrl}
							className="col-span-12 w-full"
							width={1000}
							height={1000}
						/>
					) : (
						""
					)}
				</div>
			) : (
				<div className="col-span-12 grid grid-cols-12 gap-x-5 gap-y-[100px] md:gap-y-[200px]">
					{project.portrait_hero != null ? (
						<Image
							alt=""
							src={project.portrait_hero.imageUrl}
							className="col-span-12 md:col-span-6 md:col-start-7 w-full"
							width={1000}
							height={1000}
						/>
					) : (
						""
					)}
					{project.landscape_hero != null ? (
						<Image
							alt=""
							src={project.landscape_hero.imageUrl}
							className="col-span-12 w-full"
							width={1000}
							height={1000}
						/>
					) : (
						""
					)}
				</div>
			)}
			<div className="col-span-12 grid grid-cols-12 gap-x-[10px] md:gap-x-5 gap-y-[100px] md:gap-y-[200px] my-[100px] md:my-[200px]">
				{project.images?.map((image: { imageUrl: string }, index: number) => (
					<Image
						key={index}
						alt=""
						src={image.imageUrl}
						className={`${
							(index % 7) % 4 == 0 ? "col-span-6" : "col-span-6 md:col-span-3"
						} ${index % 7 == 6 ? "col-start-7 md:col-start-4" : ""} ${
							index % 7 == 1 ? "col-start-7 md:col-start-10" : ""
						} ${
							[2, 4].includes(index % 7) ? "col-start-7" : "col-start-1"
						} w-full`}
						width={1000}
						height={1000}
					/>
				))}
			</div>
			{project.hero_display == "Landscape" ? (
				<div className="col-span-12 grid grid-cols-12 gap-x-5">
					{project.portrait_hero != null ? (
						<Image
							alt=""
							src={project.portrait_hero.imageUrl}
							className="col-span-6 col-start-7 w-full mb-[200px]"
							width={1000}
							height={1000}
						/>
					) : (
						""
					)}
				</div>
			) : (
				""
			)}
		</div>
	);
}