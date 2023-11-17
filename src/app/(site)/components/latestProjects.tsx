import { useRef, useEffect } from "react";
import Project from "./project";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

function LatestProjects() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          markers: true,
        },
      }
    );
    console.log("x");
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section
      className="scroll-section-outer overflow-x-hidden col-span-12 pb-10 pt-6"
      ref={triggerRef}
    >
      <p className="font-medium text-sm mb-5 col-span-12 pl-5">
        Latest Projects
      </p>
      <div
        ref={sectionRef}
        className="scroll-section-inner w-[400vw] flex flex-row relative h-[90vh]"
      >
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
}

export default LatestProjects;
