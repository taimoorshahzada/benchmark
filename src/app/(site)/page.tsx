"use client";

import Image from "next/image";
import Header from "./components/header";
import Layout from "./components/layout";
import FancyLink from "./components/fancyLink";
import { fade } from "@/app/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Container from "./components/container";
import Footer from "./components/footer";
import Lenis from "@studio-freight/lenis";
import Mortimer from "./assets/images/Projects-Mortimer-1500-x-1000-High-Res-2.jpg";
import { createClient } from "next-sanity";
import { useEffect, useRef } from "react";
import LatestProjects from "@/app/(site)/components/latestProjects";
import SlideMenu from "@/app/(site)/components/SlideMenu";
import AboutSection from "@/app/(site)/components/about-us";

export default function Home() {
  return (
    <>
      <Container>
        <h1 className="font-medium text-3xl col-span-11 -translate-x-5 -translate-y-10 mb-large mt-12">
          Benchmark <br /> Homes
        </h1>

        <p className="col-span-2 font-medium text-sm">
          Design and build architecture
        </p>
        <div className="col-start-7 col-span-6">
          <Image
            className="aspect-[3/2] object-cover"
            src={Mortimer}
            alt="Mortimer Kitchen"
            width={1200}
            height={600}
          />
        </div>

        <p className="font-medium text-lg col-span-12 my-medium">
          While the simple definition of home is the four walls and roof within
          which you live, the true meaning is found in the spaces you inhabit.
          Home is a place where you can laugh, experience and enjoy the day
          to-day. It is a space you love, you care for and that ultimately you
          have created. At Benchmark, we pride ourselves on helping you achieve
          this. Working with you to turn your wants and needs into a tangible
          reality is what inspires and drives us to do what we do.
        </p>
      </Container>
      <LatestProjects />
      <AboutSection />
    </>
  );
}
