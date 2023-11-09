import Layout from "@/app/(site)/layout";
import SlideMenu from "@/components/SlideMenu";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { createClient } from "next-sanity";
import React from "react";
import UpcomingProjectsList from "@/components/upcoming_project_list";

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

const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	apiVersion: "2023-11-13",
	useCdn: true,
});

async function getAllUpcomingProjects() {
	const upcomingProjects = await client.fetch(
		`*[_type == "upcoming_project"]{..., hero_image{"imageUrl": asset->url}, featured_image_1{"imageUrl": asset->url}, featured_image_2{"imageUrl": asset->url}, images[]{'imageUrl': asset->url}}`
	);

	return {
		props: {
			upcomingProjects,
		},
		revalidate: 10,
	};
}
