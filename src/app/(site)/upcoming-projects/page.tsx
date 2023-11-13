import Layout from "@/app/(site)/layout";
import SlideMenu from "@/app/(site)/components/SlideMenu";
import Header from "@/app/(site)/components/header";
import Footer from "@/app/(site)/components/footer";
import { createClient } from "next-sanity";
import React from "react";
import UpcomingProjectsList from "@/app/(site)/components/upcoming_project_list";
import {getAllUpcomingProjects} from "../../../../sanity/sanity-utils";

export default async function UpcomingProjects() {
	const upcomingProjects = await getAllUpcomingProjects();

	return (
		<Layout>
			<SlideMenu />
			<Header />
			<div className="h-screen overflow-scroll top-0 fixed scrollbar-hide w-full">
				<div className="grid grid-cols-12 gap-x-5 text-xs px-5 w-full mt-[10px] mb-[60px]">
					<h1 className="font-medium text-xl lg:text-2xl xl:text-3xl col-span-11 mb-large">
						Upcoming <br /> Projects
					</h1>
					<UpcomingProjectsList
						projects={upcomingProjects.props.upcomingProjects}
					/>
				</div>
			</div>
			<div className="h-screen"></div>
			<Footer />
		</Layout>
	);
}