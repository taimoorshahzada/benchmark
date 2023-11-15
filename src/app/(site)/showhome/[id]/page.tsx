import SlideMenu from "@/app/(site)/components/SlideMenu";
import Header from "@/app/(site)/components/header";
import Layout from "../../layout";
import Footer from "@/app/(site)/components/footer";
import ProjectImages from "@/app/(site)/components/project_images";
import ProjectInfo from "@/app/(site)/components/project_info";
import ShowhomeInfo from "@/app/(site)/components/showhome_info";
import {getAllShowhomes} from "../../../../../sanity/sanity-utils";

export default async function Showhome({ params }: { params: { id: string } }) {
	const showhomes = await getAllShowhomes();

	return (
		<Layout>
			
			<div className="h-screen overflow-scroll top-0 fixed scrollbar-hide">
				<div className="grid grid-cols-12 gap-x-5 text-xs px-5 w-full mt-[10px]">
					<ProjectInfo projects={showhomes.props.showhomes} id={params.id} />
					<ShowhomeInfo showhomes={showhomes.props.showhomes} id={params.id} />
					<ProjectImages projects={showhomes.props.showhomes} id={params.id} />
				</div>
			</div>
			<div className="h-screen"></div>
			
		</Layout>
	);
}

