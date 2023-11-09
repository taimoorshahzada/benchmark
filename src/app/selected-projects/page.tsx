import {createClient} from "next-sanity";
import Layout from "@/components/layout";
import SlideMenu from "@/components/SlideMenu";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { getData } from "../../../sanity/sanity-utils";
import { SelectedProject } from "../../../types/SelectedProject";

interface ProjectImage {
	imageUrl: string;
}

interface ProjectReference {
	_ref: string;
	_type: string;
}



export default async function SelectedProjects() {
	const selectedProjectsSections = await getProjects();
	return (
		<Layout>
			<SlideMenu />
			<Header />
			<div className="h-screen w-full overflow-scroll top-0 fixed scrollbar-hide">
				<h1 className="font-medium text-xl lg:text-2xl xl:text-3xl mb-large">
					Selected <br /> Projects
				</h1>
				<div className="col-span-12 selected-projects w-full">
					{selectedProjectsSections.props.selectedProjectsSections.map(
						(project: SelectedProject) => (
							<div key={project._id} className="mx-5 mb-[200px]">
								<div className="grid grid-cols-12 gap-x-5 text-xs-medium mx-auto w-full border-[#999999] border-dashed border-t border-1">
									<div
										className={`col-span-6 row-start-1 flex-col flex ${
											project.mainImageCol == "First"
												? "col-start-1"
												: project.mainImageCol == "Second"
												? "col-start-4"
												: "col-start-7"
										}`}
									>
										<div className="mb-9 mt-2">{project.mainImageTitle}</div>
										{project.mainProject ? (
											<a
												href={`project/${project.mainProject._ref}`}
												className="selected-projects-image-container relative"
											>
												<Image
													className="selected-projects-image"
													src={project.mainImage.imageUrl}
													alt={project.mainImageTitle}
												/>
												<div className="selected-projects-image-blur absolute w-full h-full top-0 left-0"></div>
											</a>
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
										className={`col-span-3 row-start-1 flex-col flex ${
											project.mainImageCol == "First"
												? "col-start-7"
												: "col-start-1"
										}`}
									>
										<div className="mb-9 mt-2">{project.Image1Title}</div>
										{project.firstProject ? (
											<a
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
											</a>
										) : (
											<div className="selected-projects-image-container relative">
												<Image
													className="selected-projects-image"
													src={project.image1.imageUrl}
													alt={project.Image1Title}
													width={1000}
													height={1000}
												/>
												<div className="selected-projects-image-blur absolute w-full h-full top-0 left-0"></div>
											</div>
										)}
									</div>
									<div
										className={`col-span-3 row-start-1 flex-col flex ${
											project.mainImageCol == "Third"
												? "col-start-4"
												: "col-start-10"
										}`}
									>
										<div className="mb-9 mt-2">{project.Image2Title}</div>
										{project.secondProject ? (
											<a
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
											</a>
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
			<div className="h-screen"></div>
			<Footer />
		</Layout>
	);
}

const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	apiVersion: "2023-11-04",
	useCdn: true,
});

async function getProjects() {
  const selectedProjectsSections = await client.fetch(
    `*[_type == "selected-projects"]{..., mainImage{'imageUrl': asset->url}, image1{'imageUrl': asset->url}, image2{'imageUrl': asset->url}}`
  );

  return {
    props: {
      selectedProjectsSections,
    },
    revalidate: 10,
  };
}

