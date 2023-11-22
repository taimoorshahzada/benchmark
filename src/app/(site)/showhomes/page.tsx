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
      <div>
        <div className="grid grid-cols-12 gap-x-5 text-xs px-5 w-full mt-[10px] mb-[200px]">
          <h1 className="font-medium text-sm-3xl md:text-3xl my-24 md:mt-0 md:mb-large">
            Showhomes
          </h1>
          <div className="border-[#999999] col-span-12 border-dashed border-t border-1 w-full"></div>
          {showhomes.props.showhomes.map(
            (showhome: Showhome, index: number) => (
              <div
                key={index}
                className={`${
                  index % 2 == 0 ? "col-start-1" : "col-start-7"
                } col-span-6 grid grid-cols-6 gap-x-5 mt-[10px]`}
              >
                <div className="col-span-2">{showhome.title}</div>
                <div className="col-span-5 col-start-3 grid grid-cols-3 gap-x-5">
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
                <Image
                  className="w-full mt-4 col-span-6"
                  src={
                    showhome.hero_display == "Landscape"
                      ? showhome.landscape_hero.imageUrl
                      : showhome.portrait_hero.imageUrl
                  }
                  alt={showhome.title}
                  width={2000}
                  height={2000}
                />

                <Link
                  href={`/showhome/${showhome._id}`}
                  className="mt-5 w-fit bg-[#F5F5F5] rounded-[5px] flex text-xxs p-3 cursor-pointer hover:opacity-50 col-span-6"
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
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
