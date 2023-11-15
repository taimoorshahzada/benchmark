import SlideMenu from "@/app/(site)/components/SlideMenu";
import Header from "@/app/(site)/components/header";
import Footer from "@/app/(site)/components/footer";
import React from "react";
import {
	getAllProcesses,
	getAllUpcomingProjects,
	getAllWalkthroughs,
} from "../../../../sanity/sanity-utils";
import ProcessesList from "@/app/(site)/components/processes_list";

export default async function OurProcess() {
	const processes = await getAllProcesses();
	const walkthroughs = await getAllWalkthroughs();

	return (
		<section>
			<div
				className="h-screen overflow-scroll top-0 fixed scrollbar-hide w-full"
				id="processes-container"
			>
				<ProcessesList
					processes={processes.props.processes}
					walkthroughs={walkthroughs}
				/>
			</div>
			<div className="h-screen"></div>
		</section>
	);
}
