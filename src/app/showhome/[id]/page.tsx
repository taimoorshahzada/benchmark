import SlideMenu from "@/components/SlideMenu";
import Header from "@/components/header";
import Layout from "../../layout";
import {createClient} from "next-sanity";
import Footer from "@/components/footer";
import ProjectImages from "@/components/project_images";
import ProjectInfo from "@/components/project_info";
import AdjacentProjects from "@/components/adjacent_projects";
import ShowhomeInfo from "@/components/showhome_info";

export default async function Showhome({ params }: { params: { id: string } }) {

  const showhomes = await getAllShowhomes()

  return (
    <Layout>
      <SlideMenu />
      <Header />
      <div className="h-screen overflow-scroll top-0 fixed scrollbar-hide">
        <div className="grid grid-cols-12 gap-x-5 text-xs px-5 w-full mt-[10px]">
          <ProjectInfo projects={showhomes.props.showhomes} id={params.id} />
          <ShowhomeInfo showhomes={showhomes.props.showhomes} id={params.id} />
          <ProjectImages projects={showhomes.props.showhomes} id={params.id}/>
        </div>
      </div>
      <div className="h-screen"></div>
      <Footer />
    </Layout>
  )
}

const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	apiVersion: "2023-11-13",
	useCdn: true,
});

async function getAllShowhomes() {
  const showhomes = await client.fetch(
    `*[_type == "showhome"]{..., landscape_hero{"imageUrl": asset->url}, portrait_hero{"imageUrl": asset->url}, images[]{'imageUrl': asset->url}}`
  );

  return {
    props: {
      showhomes,
    },
    revalidate: 10,
  };
}

