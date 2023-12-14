/** @format */

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

gsap.registerPlugin(ScrollTrigger);
export default function Horizontal() {
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
			onEnable: (self) => (self.savedScroll = self.scrollY()),
			onChangeY: (self) => self.scrollY(self.savedScroll),
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
			let target2: any = isScrollingDown
				? swipePanels[currentIndex]
				: swipePanels[index];
			gsap.to(target, {
				xPercent: isScrollingDown ? 0 : 100,
				duration: 0.75,
				onComplete: () => {
					animating = false;
				},
			});
			gsap.to(target2, {
				xPercent: isScrollingDown ? -100 : 0,
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
			anticipatePin: true,
			start: "top top",
			end: "+=50%",

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
			<section className="test">
				Test with scrollable content above section using observer from GSAP
				observer gallery on Codepen.
			</section>
			<div className="swipe-section">
				<section className="panel red">ScrollTrigger.observe() section</section>
				<section className="panel purple x-100">Section 2</section>
				<section className="panel blue x-100">Section 3</section>
				<section className="panel orange x-100 vh-200">
					This section should switch to vertical scroll (500vh)
				</section>
			</div>
			<div style={{ height: "400vh" }}></div>
		</>
	);
}
