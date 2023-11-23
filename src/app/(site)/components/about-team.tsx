import React, { useState, useEffect, useRef } from "react";

import Image from "next/image";
import { getStaff } from "../../../../sanity/sanity-utils";

function AboutTeam({ info }: any) {
  const [isInView, setIsInView] = useState(false);
  const [team, setTeam] = useState([]);
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

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const fetchedTeam = await getStaff();
        setTeam(fetchedTeam);
      } catch (error) {
        throw error;
      }
    };

    fetchTeam();
  }, []);

  return (
    <section className="col-span-12">
      <div
        ref={sectionRef}
        className={`grid grid-cols-2 min-h-screen relative fade-in-section ${
          isInView ? "bg-black text-white" : ""
        }`}
      >
        <div className="hidden md:block"></div>
        <div className="p-[10px] md:p-5 py-32 col-span-2 md:col-span-1">
          <div className="mb-[80px] md:mb-24">
            <div className="text-xxs font-medium md:text-xs-medium mb-3 md:mb-7 ">
              Our Team
            </div>
            <div className="text-xxs md:text-xs mb-[48px] whitespace-pre-line">
              {info.team_description}
            </div>
          </div>

          <div className="grid grid-cols-12 gap-x-5 gap-y-6">
            {team.map((teamMember: any, index: number) => (
              <div
                className={`col-span-6 md:col-span-4 ${
                  index % 2 !== 0 ? "md:col-start-9" : "md:col-start-5"
                }`}
                key={index}
              >
                <div className="relative w-full pb-full">
                  <Image
                    src={teamMember.image}
                    alt="Richard and Sam"
                    width={2000}
                    height={1000}
                    priority
                  />
                </div>
                <p className="mt-2">{teamMember.name}</p>
                <p className="">{teamMember.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTeam;
