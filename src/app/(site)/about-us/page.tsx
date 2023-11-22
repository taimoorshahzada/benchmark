"use client"

import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import Container from "../components/container";
import FancyLink from "../components/fancyLink";
import { fade } from "@/app/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import SlideMenu from "@/app/(site)/components/SlideMenu";
import React, { useEffect } from "react";
import ProcessesList from "@/app/(site)/components/processes_list";
import Image from "next/image";
import Photo from "@/app/(site)/assets/images/Home-Benchmark-Homes-1000-x-1000-High-Res-560x400.jpg";
import AboutInfo from "@/app/(site)/components/about_info";
import { getAboutPageInfo } from "../../../../sanity/sanity-utils";
import AboutSection from "../components/about-page";
import AboutTeam from "../components/about-team";

export default async function About() {
	const info = await getAboutPageInfo();

	return (
		<>
			<NextSeo title="About" />
			<AboutSection info={info.props.info} />
			<AboutTeam info={info.props.info} />
		</>
	);
}
