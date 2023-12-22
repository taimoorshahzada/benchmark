/** @format */

import React from "react";
import Image from "next/image";
import Wilson from "../assets/images/Projects-Wilson-1500x1000-High-Res-1.jpg";
import { getProjects } from "../../../../sanity/sanity-utils";
import Link from "next/link";

function Project(props: any) {
  return (
    <div
      id="projectImage"
      className={
        props.translateX
          ? `w-full panelSwipe absolute px-[10px] md:px-5  x-100`
          : `w-full panelSwipe absolute px-[10px] md:px-5 `
      }
    >
      <Link href={props.url} className="">
        <Image
          className="scroll-section object-cover w-full md:h-[85vh]"
          src={props.image}
          alt="Wilson House"
        />
      </Link>
    </div>
  );
}

export default Project;
