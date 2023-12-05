import ProjectImages from "@/app/(site)/components/project_images";
import ProjectInfo from "@/app/(site)/components/project_info";
import AdjacentProjects from "@/app/(site)/components/adjacent_projects";
import {
	getAllProjects,
	getProjects,
} from "../../../../../sanity/sanity-utils";

export default async function Project({ params }: { params: { id: string } }) {
	const projects = await getAllProjects();
	const selectedProjectsSections = await getProjects();

	return (
		<div className="grid grid-cols-12 gap-x-5 text-xs px-[10px] md:px-5 w-full mt-[10px]">
			<ProjectInfo projects={projects.props.projects} id={params.id} />
			<ProjectImages projects={projects.props.projects} id={params.id} />

			{/* <AdjacentProjects projects={projects.props.projects} id={params.id} /> */}
		</div>
	);
}
