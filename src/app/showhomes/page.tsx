import SlideMenu from "@/components/SlideMenu";
import Header from "@/components/header";
import Layout from "../layout";
import {createClient} from "next-sanity";
import Footer from "@/components/footer";
import React from "react";

interface ProjectImage {
  imageUrl: string
}

interface DateTimeOccurrence {
  day_range: string;
  time_range: string;
}

interface Showhome {
  landscape_hero: ProjectImage;
  portrait_hero: ProjectImage;
  title: string;
  description: string;
  features: string[];
  interest_points: string[];
  images: ProjectImage[];
  hero_display: string;
  _id: string;
  showhome_times: DateTimeOccurrence[];
}

export default async function Project({ params }: { params: { id: string } }) {
  const showhomes = await getAllShowhomes()

  return (
    <Layout>
      <SlideMenu />
      <Header />
      <div className="h-screen overflow-scroll top-0 fixed scrollbar-hide">

        <div className="grid grid-cols-12 gap-x-5 text-xs px-5 w-full mt-[10px] mb-[200px]">
          <h1 className="font-medium text-xl lg:text-2xl xl:text-3xl col-span-11 mb-large">
            Showhomes
          </h1>
          <div className="border-[#999999] col-span-12 border-dashed border-t border-1 w-full"></div>
          {showhomes.props.showhomes.map((showhome: Showhome, index: number) => (
            <div key={index} className={`${index % 2 == 0 ? "col-start-1" : "col-start-7"} col-span-6 grid grid-cols-6 gap-x-5 mt-[10px]`}>
              <div className="col-span-2">
                {showhome.title}
              </div>
              <div className="col-span-3 col-start-3 grid grid-cols-3 gap-x-5">
                {showhome.showhome_times.map((occurrence: DateTimeOccurrence, index: number) => (
                  <div key={index} className="col-span-3 grid grid-cols-3 gap-x-5">
                    <div className="col-span-1">
                      {occurrence.day_range}
                    </div>
                    <div className="col-span-2 col-start-2">
                      {occurrence.time_range}
                    </div>
                  </div>
                ))}
              </div>
              <img className="w-full mt-4 col-span-6" alt="" src={showhome.hero_display == "Landscape" ? showhome.landscape_hero.imageUrl : showhome.portrait_hero.imageUrl}/>
              <a href={`/showhome/${showhome._id}`} className="mt-[10px] w-fit bg-[#F5F5F5] rounded-[5px] flex text-xs p-3 cursor-pointer hover:opacity-50 col-span-6">
                Learn more
                <div className="ml-[50px] flex items-center">
                  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.3131 5.65685L0.65625 0L0.656372 11.3138L6.3131 5.65685Z" fill="black"/>
                  </svg>
                </div>
              </a>
            </div>
          ))}
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
	apiVersion: "2023-11-12",
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

