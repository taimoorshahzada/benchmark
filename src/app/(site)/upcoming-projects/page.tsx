import UpcomingProjectsList from "@/app/(site)/components/upcoming_project_list";
import { getAllUpcomingProjects } from "../../../../sanity/sanity-utils";

export default async function UpcomingProjects() {
  const upcomingProjects = await getAllUpcomingProjects();

  return (
		<div>
			<div className="grid grid-cols-12 gap-x-5 text-xs px-[10px] md:px-5 w-full pt-[10px] mb-[60px] bg-white">
				<h1 className="font-medium text-sm-3xl md:text-3xl my-24 md:mt-0 md:mb-large ">
					Upcoming <br /> Projects
				</h1>
				<UpcomingProjectsList
					projects={upcomingProjects.props.upcomingProjects}
				/>
			</div>
		</div>
	);
}
