import SlideMenu from "@/app/(site)/components/SlideMenu";
import Header from "@/app/(site)/components/header";
import Layout from "../../layout";
import { createClient } from "next-sanity";
import Footer from "@/app/(site)/components/footer";
import ProjectImages from "@/app/(site)/components/project_images";
import ProjectInfo from "@/app/(site)/components/project_info";
import AdjacentProjects from "@/app/(site)/components/adjacent_projects";

export default async function Project({ params }: { params: { id: string } }) {
	const projects = await getAllProjects();

	return (
		<Layout>
			<SlideMenu />
			<Header />
			<div className="h-screen overflow-scroll top-0 fixed scrollbar-hide">
				<div className="grid grid-cols-12 gap-x-5 text-xs px-5 w-full mt-[10px]">
					<ProjectInfo projects={projects.props.projects} id={params.id} />
					<ProjectImages projects={projects.props.projects} id={params.id} />
					<AdjacentProjects projects={projects.props.projects} id={params.id} />
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
	apiVersion: "2023-11-12",
	useCdn: true,
});

async function getAllProjects() {
	const projects = await client.fetch(
		`*[_type == "project"]{..., landscape_hero{"imageUrl": asset->url}, portrait_hero{"imageUrl": asset->url}, images[]{'imageUrl': asset->url}}`
	);

	return {
		props: {
			projects,
		},
		revalidate: 10,
	};
}
