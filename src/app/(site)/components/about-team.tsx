import React, { useState, useEffect, useRef } from "react";

import Photo from "../assets/images/person.jpeg";
import Image from "next/image";

function AboutTeam({ info }: any) {
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

  const teamMembers = [
    { name: "Person's Name", title: "Director" },
    { name: "Person's Name", title: "Director" },
    { name: "Person's Name", title: "Director" },
    { name: "Person's Name", title: "Director" },
    { name: "Person's Name", title: "Director" },
    { name: "Person's Name", title: "Director" },
  ];

 

  return (
		<section className="col-span-12 pt-12">
			<div className="grid grid-cols-2 min-h-screen relative">
				<div></div>
				<div
					ref={sectionRef}
					className={`p-6 py-32 fade-in-section ${
						isInView ? "bg-black text-white" : ""
					}`}
				>
					<div className="mb-24">
						<div className="text-xs-medium mb-7 ">Our Team</div>
						<div className="text-xs mb-[48px] whitespace-pre-line">
							{info.team_description}
						</div>
					</div>

					<div className="grid grid-cols-12 gap-x-5 gap-y-6">
						{teamMembers.map((teamMember, index) => (
							<div
								className={`col-span-4 ${
									index % 2 !== 0 ? "col-start-9" : "col-start-5"
								}`}
								key={index}
							>
								<div className="relative w-full pb-full">
									<Image
										src={Photo}
										alt="Richard and Sam"
										width={2000}
										height={1000}
										priority
									/>
								</div>
								<p className="mt-2">Persons Name</p>
								<p className="">Director</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutTeam;