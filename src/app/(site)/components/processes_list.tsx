"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ProcessesList({ processes, walkthroughs }: any) {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const processContainer = document.getElementById("processes-container");
    let prevScrollHeight = processContainer?.scrollTop;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const checkScrollPos = () => {
      const title = document.getElementById("process-title");
      const titleIndex = document.getElementById("process-title-index");
      const processElements = document.querySelectorAll(".process");

      processElements.forEach((process, index) => {
        const processRect = process.getBoundingClientRect();
        if (
          prevScrollHeight &&
          processContainer &&
          processContainer.scrollTop < prevScrollHeight
        ) {
          if (processRect.top > 0 && processRect.top < 300) {
            if (titleIndex) {
              titleIndex.innerText = index < 10 ? `0${index + 1}` : `${index}`;
            }
            if (title) {
              title.innerText = processes[index].title;
            }
          }
        } else if (
          prevScrollHeight &&
          processContainer &&
          processContainer.scrollTop > prevScrollHeight
        ) {
          if (
            processRect.bottom < window.innerHeight &&
            processRect.bottom > window.innerHeight - 300
          ) {
            if (titleIndex) {
              titleIndex.innerText = index < 10 ? `0${index + 1}` : `${index}`;
            }
            if (title) {
              title.innerText = processes[index].title;
            }
          }
        }
      });

      prevScrollHeight = processContainer?.scrollTop;
    };

    if (processContainer) {
      processContainer.addEventListener("scroll", checkScrollPos);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
		<div className="flex relative">
			<div className="w-1/2 bg-black relative">
				<div className="sticky top-0 h-screen">
					<div className="h-full flex flex-col justify-end pl-3 pb-10">
						<h1
							className="font-medium text-white text-sm-xl md:text-xl mb-medium"
							id="process-title-index"
						>
							01
						</h1>
						<h1
							className="font-medium text-white text-sm-xl md:text-xl text-wrap"
							id="process-title"
						>
							{processes ? processes[0].title : ""}
						</h1>
					</div>
				</div>
			</div>
			<div className="w-1/2">
				<h1 className="font-medium text-sm-xl md:text-xl mb-[90px] px-5">
					Our <br /> Process
				</h1>
				{processes.map((process: any, index: number) => (
					<div
						key={index}
						className={`w-full process ${
							index == processes.length - 1 ? "" : "px-5"
						}`}
					>
						{index == processes.length - 1 ? <div className=""></div> : ""}
						<div
							ref={index === processes.length - 1 ? sectionRef : null}
							className={`${
								index === processes.length - 1
									? `mt-[50px] pt-[400px] px-5 fade-in-section ${
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
								className="w-full h-auto mb-[10px] aspect-[4/3] object-cover"
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
				<div className="pt-large grid grid-cols-2 gap-x-[2px] text-xs—medium pb-[180px] bg-black text-white">
					<div className="mb-5 px-5 font-medium">Virtual Walkthroughs</div>
					{walkthroughs.props.walkthroughs.map(
						(walkthrough: any, index: number) => (
							<div
								key={index}
								className={`${
									index % 2 == 0
										? "col-start-1 ml-5 pr-[9px] mb-14"
										: "col-start-2 pl-[9px] mr-5"
								} flex flex-col border-grey border-dashed border-t border-1`}
							>
								<div className="mt-[10px] font-medium">{walkthrough.title}</div>
								<div className="mb-4">{walkthrough.location}</div>
								<iframe
									allowFullScreen
									src={walkthrough.url}
									title={walkthrough.title}
								></iframe>
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
