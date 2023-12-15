"use client"

import Image from "next/image";
import { SelectedProject } from "../../../../types/SelectedProject";
import Link from "next/link";
import { getProjects } from "../../../../sanity/sanity-utils";
import LenisScroll from "../components/lenis-provider";

export default async function SelectedProjects() {
	const selectedProjectsSections = await getProjects();

	return (
		<>
		<LenisScroll>
		<div className="pt-6 bg-white pb-5 grid">
			<h1 className="mx-[10px] font-medium text-sm-3xl md:text-3xl my-24 md:mt-0 md:mb-large">
				Selected <br /> Projects
			</h1>
			<div className="col-span-12 selected-projects w-full">
				{selectedProjectsSections.props.selectedProjectsSections.map(
					(project: SelectedProject) => (
						<div
							key={project._id}
							className="mx-[10px] md:mx-5 mb-12 md:mb-[200px]"
						>
							<div className="grid grid-cols-12 gap-x-[10px] md:gap-x-5 text-xs-medium mx-auto w-full border-grey border-dashed border-t border-1">
								<div
									className={`col-span-12 md:col-span-6 md:row-start-1 flex-col flex ${
										project.mainImageCol == "First"
											? "md:col-start-1"
											: project.mainImageCol == "Second"
											? "md:col-start-4"
											: "md:col-start-7 row-start-2 md:row-start-1"
									}`}
								>
									<Link
										href={`project/${project.mainProject._ref}`}
										className="mb-9 mt-2"
									>
										{project.mainImageTitle}
									</Link>

									{project.mainProject ? (
										<Link
											href={`project/${project.mainProject._ref}`}
											className="selected-projects-image-container relative"
										>
											<Image
												className="selected-projects-image w-full object-cover"
												src={project.mainImage.imageUrl}
												alt={project.mainImageTitle}
												width={1000}
												height={1000}
											/>
											<div className="selected-projects-image-blur absolute w-full h-full top-0 left-0"></div>
										</Link>
									) : (
										<div className="selected-projects-image-container relative">
											<Image
												className="selected-projects-image"
												src={project.mainImage.imageUrl}
												alt={project.mainImageTitle}
												width={1000}
												height={1000}
											/>

											<div className="selected-projects-image-blur absolute w-full h-full top-0 left-0"></div>
										</div>
									)}
								</div>
								<div
									className={`col-span-6 md:col-span-3  flex-col flex ${
										project.mainImageCol == "First"
											? "md:col-start-7 sm:row-start-2 md:row-start-1"
											: "md:col-start-1 md:row-start-1"
									}`}
								>
									<Link
										href={`project/${project.firstProject._ref}`}
										className="mb-9 mt-2"
									>
										{project.Image1Title}
									</Link>
									{project.firstProject ? (
										<Link
											href={`project/${project.firstProject._ref}`}
											className="selected-projects-image-container relative"
										>
											<Image
												className="selected-projects-image"
												src={project.image1.imageUrl}
												alt={project.Image1Title}
												width={1000}
												height={1000}
											/>

											<div className="selected-projects-image-blur absolute w-full h-full top-0 left-0"></div>
										</Link>
									) : (
										<div className="selected-projects-image-container relative">
											<Image
												className="selected-projects-image "
												src={project.image1.imageUrl}
												alt={project.Image1Title}
												width={1500}
												height={1500}
											/>
											<div className="selected-projects-image-blur absolute w-full h-full top-0 left-0"></div>
										</div>
									)}
								</div>
								<div
									className={`col-span-6 md:col-span-3 flex-col flex ${
										project.mainImageCol == "Third"
											? "md:col-start-4 md:row-start-1"
											: "md:col-start-10 sm:row-start-2 md:row-start-1"
									}`}
								>
									<Link
										href={`project/${project.secondProject._ref}`}
										className="mb-9 mt-2"
									>
										{project.Image2Title}
									</Link>
									{project.secondProject ? (
										<Link
											href={`project/${project.secondProject._ref}`}
											className="selected-projects-image-container relative"
										>
											<Image
												className="selected-projects-image"
												src={project.image2.imageUrl}
												alt={project.Image2Title}
												width={1000}
												height={1000}
											/>

											<div className="selected-projects-image-blur absolute w-full h-full top-0 left-0"></div>
										</Link>
									) : (
										<div className="selected-projects-image-container relative">
											<Image
												className="selected-projects-image"
												src={project.image2.imageUrl}
												alt={project.Image2Title}
												width={1000}
												height={1000}
											/>
											<div className="selected-projects-image-blur absolute w-full h-full top-0 left-0"></div>
										</div>
									)}
								</div>
							</div>
						</div>
					)
				)}
			</div>
		</div>
		</LenisScroll>
		</>
	);
}
