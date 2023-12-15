import SlideMenu from "@/app/(site)/components/SlideMenu";
import Header from "@/app/(site)/components/header";

import { createClient } from "next-sanity";
import Footer from "@/app/(site)/components/footer";
import React from "react";
import Image from "next/image";
import { Showhome } from "../../../../types/Showhome";
import { ProjectImage } from "../../../../types/ProjectImage";
import Link from "next/link";
import { getAllShowhomes } from "../../../../sanity/sanity-utils";

interface DateTimeOccurrence {
  day_range: string;
  time_range: string;
}

export default async function Project({ params }: { params: { id: string } }) {
  const showhomes = await getAllShowhomes();

  return (
		<>
			<div className="grid grid-cols-6 md:grid-cols-12 gap-x-5 text-xxstext-xs px-[10px] md:px-5 w-full pt-[10px] bg-white pb-5">
				<h1 className="col-span-12 break-words font-medium text-sm-3xl md:text-3xl my-24 md:mt-0 md:mb-large">
					Show&shy;homes
				</h1>
				<div className="border-[#999999] col-span-12 border-dashed border-t border-1 w-full"></div>
				{showhomes.props.showhomes.map((showhome: Showhome, index: number) => (
					<div
						key={index}
						className={`${
							index % 2 == 0 ? "col-start-1" : "md:col-start-7"
						} col-span-12 md:col-span-6 grid grid-cols-6 gap-x-5 mt-[10px]`}
					>
						<div className="col-span-6 md:col-span-2 font-medium mb-4 md:mb-0">
							<Link href={`/showhome/${showhome._id}`}>{showhome.title}</Link>
						</div>
						<div className="col-span-6 md:col-span-5 md:col-start-3 grid grid-cols-3 gap-x-5">
							{showhome.showhome_times.map(
								(occurrence: DateTimeOccurrence, index: number) => (
									<div
										key={index}
										className="col-span-3 grid grid-cols-3 gap-x-5"
									>
										<div className="col-span-1">{occurrence.day_range}</div>
										<div className="col-span-4 col-start-2">
											{occurrence.time_range}
										</div>
									</div>
								)
							)}
						</div>
						<Link
							href={`/showhome/${showhome._id}`}
							className="w-full mt-4 col-span-7"
						>
							<Image
								src={
									showhome.hero_display == "Landscape"
										? showhome.landscape_hero.imageUrl
										: showhome.portrait_hero.imageUrl
								}
								alt={showhome.title}
								width={2000}
								height={2000}
							/>
						</Link>

						<Link
							href={`/showhome/${showhome._id}`}
							className="mt-5 w-fit bg-[#F5F5F5] rounded-[5px] flex text-xxs p-[10px] cursor-pointer hover:opacity-50 col-span-6 mb-10 md:mb-0"
						>
							Learn more
							<div className="ml-[50px] flex items-center">
								<svg
									width="7"
									height="12"
									viewBox="0 0 7 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6.3131 5.65685L0.65625 0L0.656372 11.3138L6.3131 5.65685Z"
										fill="black"
									/>
								</svg>
							</div>
						</Link>
						<div className="md:hidden border-[#999999] col-span-6 md:col-span-12 border-dashed border-t border-1 w-full"></div>
					</div>
				))}
			</div>
		</>
	);
}
