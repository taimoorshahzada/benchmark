"use client";

import { NextSeo } from "next-seo";
import React from "react";
import { getAboutPageInfo } from "../../../../sanity/sanity-utils";
import AboutSection from "../components/about-page";
import LenisScroll from "../components/lenis-provider";

export default async function About() {
  const info = await getAboutPageInfo();

  return (
		<>
			<LenisScroll>
				<NextSeo title="About" />
				<AboutSection info={info.props.info} />
			</LenisScroll>
		</>
	);
}
