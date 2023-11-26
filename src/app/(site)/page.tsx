"use client";

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import Benchmark from "./assets/images/Benchmark.svg";
import Mortimer from "./assets/images/Projects-Mortimer-1500-x-1000-High-Res-2.jpg";
import Container from "./components/container";
import Project from "./components/project";
import AboutSection from "./components/about-us";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  useEffect(() => {
    let currentIndex = -1;
    let animating: any;
    let swipePanels = gsap.utils.toArray(".swipe-section .panel");
    gsap.set(".x-100", {
      xPercent: 100,
    });
    gsap.set(swipePanels, {
      zIndex: (i) => i,
    });

    let intentObserver = ScrollTrigger.observe({
      type: "wheel,touch",
      onUp: () => !animating && gotoPanel(currentIndex + 1, true),
      onDown: () => !animating && gotoPanel(currentIndex - 1, false),
      wheelSpeed: -1,
      tolerance: 10,
      preventDefault: true,
      onPress: (self) => {
        ScrollTrigger.isTouch && self.event.preventDefault();
      },
    });
    intentObserver.disable();
    let preventScroll = ScrollTrigger.observe({
      preventDefault: true,
      type: "wheel,scroll",
      allowClicks: true,
      onEnable: (self) => ((self as any).savedScroll = self.scrollY()),
      onChangeY: (self) => self.scrollY((self as any).savedScroll),
    });
    preventScroll.disable();
    function gotoPanel(index: any, isScrollingDown: any) {
      animating = true;
      if (
        (index === swipePanels.length && isScrollingDown) ||
        (index === -1 && !isScrollingDown)
      ) {
        intentObserver.disable();
        preventScroll.disable();
        animating = false;
        preventScroll.scrollY(
          preventScroll.scrollY() + (index === swipePanels.length ? 1 : -1)
        );
        return;
      }
      let target: any = isScrollingDown
        ? swipePanels[index]
        : swipePanels[currentIndex];
      gsap.to(target, {
        xPercent: isScrollingDown ? 0 : 100,
        duration: 0.75,
        onComplete: () => {
          animating = false;
        },
      });
      currentIndex = index;
    }
    ScrollTrigger.create({
      trigger: ".swipe-section",
      pin: true,
      anticipatePin: 0,
      start: "top top",
      end: "+-100vh",
      pinSpacing: false,

      onEnter: (self) => {
        if (preventScroll.isEnabled === false) {
          self.scroll(self.start);
          preventScroll.enable();
          intentObserver.enable();
          gotoPanel(currentIndex + 1, true);
        }
      },
      onEnterBack: (self) => {
        if (preventScroll.isEnabled === false) {
          self.scroll(self.start);
          preventScroll.enable();
          intentObserver.enable();
          gotoPanel(currentIndex - 1, false);
        }
      },
    });
  }, []);
  return (
		<>
			<Container>
				<h1 className="font-medium text-sm-3xl md:text-3xl col-span-11 -translate-x-[10px] md:-translate-x-5 mb-large mt-24 md:mt-3">
					<Image
						className="pl-[10px] md:pl-5"
						src={Benchmark}
						alt="Benchmark Homes"
						width={3000}
						height={1000}
					/>
				</h1>

				<p className="col-span-6 md:col-span-2  font-medium text-sm mb-3 md:mb-0">
					Design and build architecture
				</p>
				<div className="col-start-1 col-span-12 md:col-start-7 md:col-span-6">
					<Image
						className="aspect-[3/2] object-cover"
						src={Mortimer}
						alt="Mortimer Kitchen"
						width={1200}
						height={600}
					/>
				</div>

				<p className="font-medium text-sm md:text-lg col-span-12 my-medium">
					While the simple definition of home is the four walls and roof within
					which you live, the true meaning is found in the spaces you inhabit.
					Home is a place where you can laugh, experience and enjoy the day
					to-day. It is a space you love, you care for and that ultimately you
					have created. At Benchmark, we pride ourselves on helping you achieve
					this. Working with you to turn your wants and needs into a tangible
					reality is what inspires and drives us to do what we do.
				</p>
			</Container>

			<div className="swipe-section flex flex-col justify-center md:block">
				<div className="absolute top-[20%] md:relative font-medium text-sm mt-5 py-5 col-span-12 pl-[10px] md:pl-5">
					Latest Projects
				</div>
				<section className="panel bg-white">
					<Project />
				</section>
				<section className="panel x-100 bg-white">
					<Project />
				</section>
				<section className="panel x-100 bg-white">
					<Project />
				</section>
			</div>

			<AboutSection />
		</>
	);
}
