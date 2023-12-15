"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

interface ChildrenProps {
	children: any;
}

function LenisScroll({ children }: ChildrenProps) {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return <div>{children}</div>;
}

export default LenisScroll;
