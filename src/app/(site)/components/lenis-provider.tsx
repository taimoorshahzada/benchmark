/** @format */

"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { register } from "module";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

interface ChildrenProps {
  children: any;
}

function LenisScroll({ children }: ChildrenProps) {
  useEffect(() => {
    const lenis = new Lenis();
    gsap.registerPlugin(ScrollTrigger);
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    requestAnimationFrame(raf);
  }, []);
  return <div>{children}</div>;
}

export default LenisScroll;
