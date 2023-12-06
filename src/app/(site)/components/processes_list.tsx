"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ProcessesList({ processes, walkthroughs }: any) {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!isInView && entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0 }
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

  useEffect(() => {
    const processContainer = document.getElementById("processes-container");

    const checkScrollPos = () => {
      const title = document.getElementById("process-title");
      const titleIndex = document.getElementById("process-title-index");
      const processElements = document.querySelectorAll(".process");

      let highestVisibleIndex = -1;
      processElements.forEach((process, index) => {
        const processRect = process.getBoundingClientRect();
        if (processRect.bottom > 0 && processRect.top < window.innerHeight) {
          highestVisibleIndex = index;
        }
      });

      if (!titleIndex) {
        return;
      }

      if (highestVisibleIndex !== -1) {
        if (highestVisibleIndex === processElements.length - 1) {
          titleIndex?.innerText = "+";
        } else {
          titleIndex?.innerText =
						highestVisibleIndex < 9
							? `0${highestVisibleIndex + 1}`
							: `${highestVisibleIndex + 1}`;
        }

        if (title && processes[highestVisibleIndex]) {
          title.innerText = processes[highestVisibleIndex].title;
        }
      }
    };

    if (processContainer) {
      window.addEventListener("wheel", checkScrollPos);
    }

    return () => {
      if (processContainer) {
        window.removeEventListener("wheel", checkScrollPos);
      }
    };
  }, [processes]);

  return (
    <div className="md:flex relative">
      <div className="md:hidden custom-full-height pt-[150px] bg-black text-white">
        <h1 className="font-medium text-sm-xl md:text-xl mb-[90px] px-[10px] md:px-5 mt-0 md:mt-6">
          Our <br /> Process
        </h1>
      </div>
      <div className="sticky md:relative top-0 md:w-1/2 bg-black relative">
        <div className="md:sticky top-0 h-[115px] md:h-screen bg-black w-full">
          <div className="h-full flex flex-row md:flex-col items-end md:items-start md:justify-end pl-3 pb-5 md:pb-10">
            <h1
              className="font-medium text-white text-sm md:text-xl md:mb-medium md:absolute md:top-[40%] me-5 md:me-0"
              id="process-title-index"
            >
              01
            </h1>
            <h1
              className="font-medium text-white text-sm md:text-xl text-wrap"
              id="process-title"
            >
              {processes ? processes[0].title : ""}
            </h1>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <h1 className="hidden md:block font-medium text-sm-xl md:text-xl mb-[90px] px-[10px] md:px-5 mt-0 md:mt-6">
          Our <br /> Process
        </h1>
        {processes.map((process: any, index: number) => (
          <div
            key={index}
            className={`w-full process ${
              index == processes.length - 1 ? "" : "px-[10px] md:px-5"
            }`}
          >
            {index == processes.length - 1 ? <div className=""></div> : ""}
            <div
              ref={index === processes.length - 1 ? sectionRef : null}
              className={`${
                index === processes.length - 1
                  ? `mt-[50px] pt-[400px] px-[10px] md:px-5 fade-in-section ${
                      isInView ? "bg-black text-white" : ""
                    }`
                  : "mt-large border-grey border-dashed border-t border-1"
              } flex flex-col`}
            >
              {index == processes.length - 1 ? (
                ""
              ) : (
                <div className="mt-[10px] mb-10 text-xs-medium">
                  {index < 10 ? `0${index + 1}` : index}
                </div>
              )}
              <Image
                className="w-full h-auto mb-[10px] aspect-[3/2] object-cover"
                src={process.hero_image.imageUrl}
                alt="Process Image"
                width={1000}
                height={1000}
              />
              <div className="text-xs whitespace-pre-line">
                {process.description}
              </div>
            </div>
          </div>
        ))}
        <div className="pt-large grid md:grid-cols-2 gap-x-[2px] text-xs—medium pb-[180px] bg-black text-white px-5 md:px-0">
          <div className="mb-5 md:px-5 font-medium">Virtual Walkthroughs</div>
          {walkthroughs.props.walkthroughs.map(
            (walkthrough: any, index: number) => (
              <div
                key={index}
                className={`${
                  index % 2 == 0
                    ? "col-start-1 md:ml-5 pr-[9px]"
                    : "md:col-start-2 pl-[9px] md:mr-5"
                } mb-14 flex flex-col border-grey border-dashed border-t border-1`}
              >
                <div className="mt-[10px] font-medium">{walkthrough.title}</div>
                <div className="mb-4">{walkthrough.location}</div>
                <div className="relative">
                  <iframe
                    className="vimeo w-full h-auto"
                    src={walkthrough.url}
                    allow="autoplay; fullscreen; picture-in-picture"
                    title="Benchmark Homes - Chisnell - Oxford"
                  ></iframe>
                </div>
              </div>
            )
          )}
          {walkthroughs.props.walkthroughs.length % 2 != 0 ? (
            <div className="border-grey border-dashed border-t border-1 mr-5"></div>
          ) : (
            ""
          )}
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
