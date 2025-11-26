"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Testimonial = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".testimonial-quote", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "top 40%",
          scrub: 1,
        },
        y: 100,
        opacity: 0,
      });

      gsap.from(".table-row", {
        scrollTrigger: {
          trigger: ".testimonial-table",
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        x: -50,
        opacity: 0,
        stagger: 0.1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="testimonial"
      className="w-screen min-h-screen bg-primary section-padding flex items-center"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 min-w-[80%] items-start justify-center">
        <div className="flex-none pt-2 hidden md:block">
          <span className="text-[14px] md:text-[16px] text-text uppercase tracking-wider font-normal">
            [TESTIMONIALS]
          </span>
        </div>

        <div className="flex-1 flex flex-col gap-8 md:gap-16 w-full md:ml-[15vw] text-left md:text-right">
          <div className="testimonial-quote relative pl-8 md:pl-12">
            <span className="absolute left-0 -top-2 text-[40px] md:text-[64px] font-normal text-text leading-none">
              &quot;
            </span>
            <p className="text-[clamp(24px,4vw,42px)] font-normal text-text leading-[1.2] m-0 max-w-full md:max-w-[90%]">
              The design was clean and cohesive, communication was excellent
              throughout the project, turnaround times were fast, and he
              provided great expert advice.
            </p>
          </div>

          <div className="flex flex-col gap-8 pl-0 md:pl-12 mt-[6vh] md:mt-[10vh]">
            <p className="text-[14px] font-normal text-text uppercase tracking-wider m-0 text-left">
              STRATEGY, WEB DESIGN
            </p>
            <div className="testimonial-table flex flex-col justify-start gap-0">
              {[
                {
                  client: "Petrina",
                  project: "Mr Wood Varnish",
                  service: "Home Services",
                  highlight: true,
                },
                {
                  client: "Yan Kai",
                  project: "IdeateComm",
                  service: "Event",
                  highlight: false,
                },
                {
                  client: "Jia Hao",
                  project: "Lucid Socials",
                  service: "Marketing",
                  highlight: false,
                },
                {
                  client: "Artour",
                  project: "FYVE",
                  service: "Marketing",
                  highlight: false,
                },
              ].map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-2 md:gap-8 p-4 md:p-6 border-b border-[#e0e0e0] transition-colors duration-300 ${
                    index === 0 ? "border-t" : ""
                  } ${
                    row.highlight
                      ? "bg-text text-primary"
                      : "hover:bg-[#f5f5f5]"
                  }`}
                >
                  <span
                    className={`text-[14px] md:text-[16px] font-normal leading-[1.4] ${
                      row.highlight ? "text-primary" : "text-text"
                    }`}
                  >
                    <span className="md:hidden font-bold mr-2">Client:</span>
                    {row.client}
                  </span>
                  <span
                    className={`text-[14px] md:text-[16px] font-normal leading-[1.4] ${
                      row.highlight ? "text-primary" : "text-text"
                    }`}
                  >
                    <span className="md:hidden font-bold mr-2">Project:</span>
                    {row.project}
                  </span>
                  <span
                    className={`text-[14px] md:text-[16px] font-normal leading-[1.4] ${
                      row.highlight ? "text-primary" : "text-text"
                    }`}
                  >
                    <span className="md:hidden font-bold mr-2">Service:</span>
                    {row.service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
