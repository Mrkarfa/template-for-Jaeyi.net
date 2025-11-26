"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    id: 1,
    title: "Loops",
    category: "Software",
    image: "/images/project1.avif",
    tall: false,
  },
  {
    id: 2,
    title: "Neuro",
    category: "Software",
    image: "/images/project2.avif",
    tall: false,
  },
  {
    id: 3,
    title: "Neuro",
    category: "Software",
    image: "/images/project3.avif",
    tall: true,
  },
  {
    id: 4,
    title: "Project",
    category: "Software",
    image: "/images/project4.avif",
    tall: false,
  },
  {
    id: 5,
    title: "Project",
    category: "Software",
    image: "/images/project5.avif",
    tall: false,
  },
];

export const Work = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from("#work-header", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        y: 100,
        opacity: 0,
      });

      // Project Cards Animation
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: "#work-content",
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="work"
      className="w-screen min-h-screen bg-primary section-padding flex flex-col items-center justify-center"
    >
      <div
        id="work-header"
        className="flex flex-col md:flex-row justify-between items-start w-full mb-[4vh] md:mb-[8vh] gap-4 md:gap-0"
      >
        <div className="text-left">
          <h5 className="text-[14px] md:text-[16px] text-text m-0 font-normal">
            [work]
          </h5>
        </div>
        <div className="text-left md:text-right">
          <h2 className="text-[clamp(32px,5vw,65px)] font-medium leading-none text-text">
            I help service and software businesses create memorable, optimised
            website experiences as quickly as they need.
          </h2>
        </div>
      </div>

      <div
        id="work-content"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-card relative bg-transparent cursor-pointer group ${
              project.tall ? "md:row-span-2" : ""
            }`}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                y: -10,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                y: 0,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
          >
            <div
              className={`w-full overflow-hidden bg-primary ${
                project.tall ? "aspect-[1/2.1]" : "aspect-square"
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={project.tall ? 1000 : 500}
                className="w-full h-full object-cover object-center transition-transform duration-400 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 flex items-baseline gap-2">
              <h3 className="text-[18px] font-normal text-text m-0 leading-none">
                {project.title}
              </h3>
              <span className="text-[14px] font-normal text-[#6f6f6f] leading-none">
                — {project.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
