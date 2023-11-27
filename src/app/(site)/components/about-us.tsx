import Image from "next/image";
import Photo from "../assets/images/Home-Benchmark-Homes-1000-x-1000-High-Res-560x400.jpg";
import CountUp from "react-countup";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { useEffect, useRef, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import Link from "next/link";
import ReviewCards from "./reviewcards";

function AboutSection() {
  const [countersOn, setCountersOn] = useState([false, false, false]);

  const handleEnterViewport = (index: any) => {
    setCountersOn((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="col-span-12">
      <div className="font-medium text-sm mb-[10px] md:mb-0 md:h-[300px] relative">
        <p className="md:absolute bottom-0 px-[10px] md:px-5  md:py-5">
          About Us
        </p>
      </div>

      <div className="grid grid-cols-2 min-h-screen relative">
        <div className="pinned border-t md:border-b border-dotted border-grey pt-3 pb-32 md:pb-24 mx-[10px] md:mx-5 col-span-2 md:row-start-1 md:col-span-1 mt-12 md:mt-[300px] md:h-screen">
          <h4 className="md:pt-3 text-xs-medium pb-8 md:pb-0">
            Years of Experience
          </h4>
          <ScrollTrigger onEnter={() => handleEnterViewport(0)}>
            {countersOn[0] && (
              <CountUp
                start={0}
                end={25}
                duration={2}
                suffix="+"
                className="font-medium text-sm-2xl md:text-2xl"
              />
            )}
          </ScrollTrigger>
        </div>

        <div className="border-t border-dotted border-grey pt-3 pb-32 md:pb-24 mx-[10px] md:mx-5 col-span-2 md:col-span-1 md:row-start-2 md:h-screen">
          <h4 className="md:pt-3 text-xs-medium pb-8 md:pb-0">
            Master Builders Awards
          </h4>
          <ScrollTrigger onEnter={() => handleEnterViewport(1)}>
            {countersOn[1] && (
              <CountUp
                start={0}
                end={20}
                duration={2}
                suffix="+"
                className="font-medium text-sm-2xl md:text-2xl"
              />
            )}
          </ScrollTrigger>
        </div>

        <div className="border-y border-dotted border-grey pt-3 pb-32 md:pb-24 mx-[10px] md:mx-5 col-span-2 md:col-span-1 md:row-start-3 md:h-screen">
          <h4 className="md:pt-3 text-xs-medium pb-8 md:pb-0">Houses Built</h4>
          <ScrollTrigger onEnter={() => handleEnterViewport(2)}>
            {countersOn[2] && (
              <CountUp
                start={0}
                end={1500}
                duration={2}
                separator=""
                suffix="+"
                className="font-medium text-sm-2xl md:text-2xl"
              />
            )}
          </ScrollTrigger>
        </div>

        <div className="mx-[10px] md:mx-5 col-span-2 md:col-span-1 mb-[60px] md:mb-[300px] md:row-start-4 ">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Experts in Design & Build</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet finibus. Nec mus nisl mi diam vivamus
                si. Nisi egestas per orci vel id adipiscing dictum tempus dolor
                sollicitudin dui.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Experience & Diverse Team</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet finibus. Nec mus nisl mi diam vivamus
                si. Nisi egestas per orci vel id adipiscing dictum tempus dolor
                sollicitudin dui.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Comprehensive process</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet finibus. Nec mus nisl mi diam vivamus
                si. Nisi egestas per orci vel id adipiscing dictum tempus dolor
                sollicitudin dui.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Showhomes</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet finibus. Nec mus nisl mi diam vivamus
                si. Nisi egestas per orci vel id adipiscing dictum tempus dolor
                sollicitudin dui.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Virtual Reality</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet finibus. Nec mus nisl mi diam vivamus
                si. Nisi egestas per orci vel id adipiscing dictum tempus dolor
                sollicitudin dui.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Registered Master Builder</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet finibus. Nec mus nisl mi diam vivamus
                si. Nisi egestas per orci vel id adipiscing dictum tempus dolor
                sollicitudin dui.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Link
            href="/about-us"
            className="mt-[60px] w-fit bg-[#F5F5F5] rounded-[5px]  flex text-xs p-3 cursor-pointer hover:opacity-50 col-span-6 mb-6"
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

        <div
          ref={sectionRef}
          className={`h-screen flex flex-col justify-end  pl-3 pb-10 relative col-span-2 md:col-span-1 md:row-start-5 fade-in-section ${
            isInView ? "bg-black text-white" : ""
          }`}
        >
          <p className="absolute top-5 left-1/2 -translate-x-1/2">
            Our Process
          </p>
          <h1 className="font-medium text-sm-xl md:text-xl mb-medium">01</h1>
          <h1 className="font-medium text-sm-xl md:text-xl text-wrap">
            Meeting/
            <br />
            Design
          </h1>
          <Link
            href="/about-us"
            className="mt-[60px] w-fit bg-[#F5F5F5] rounded-[5px] flex text-xs p-3 cursor-pointer hover:opacity-50 col-span-6 text-black"
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

        <div className="bg-black col-span-2 row-start-1 md:col-start-2 md:row-span-4 relative order-1">
          <div className="bg-black md:sticky top-0">
            <Image
              src={Photo}
              alt="Richard and Sam"
              width={2000}
              height={1000}
            />
          </div>
        </div>
        <div className="bg-black md:row-start-5 md:col-start-2 h-screen w-[100vw] md:w-full flex justify-center items-center border-l border-grey border-dotted">
          <ReviewCards />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
