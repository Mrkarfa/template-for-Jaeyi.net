"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Contact = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".contact-label", {
        scrollTrigger: {
          trigger: "#contact",
          start: "top 70%",
          end: "top 50%",
          scrub: 1,
        },
        x: -50,
        opacity: 0,
      });

      gsap.from(".contact-column", {
        scrollTrigger: {
          trigger: ".contact-links",
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
      });

      gsap.from(".contact-button", {
        scrollTrigger: {
          trigger: "#contact",
          start: "top 70%",
          end: "top 50%",
          scrub: 1,
        },
        x: 50,
        opacity: 0,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="contact"
      className="w-screen min-h-[60vh] bg-primary px-[8%] py-[12%] flex items-center justify-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-12 md:gap-24 w-full max-w-[1400px] items-center text-center md:text-left">
        <div className="justify-self-center md:justify-self-start">
          <span className="contact-label text-[14px] md:text-[16px] text-text uppercase tracking-wider font-normal">
            [CONTACT]
          </span>
        </div>

        <div className="flex justify-center">
          <div className="contact-links flex flex-col md:flex-row gap-8 md:gap-[clamp(4rem,8vw,10rem)]">
            <div className="contact-column flex flex-col gap-4 md:gap-5">
              <Link
                href="#"
                className="text-[clamp(18px,2vw,22px)] font-medium text-text no-underline uppercase tracking-wide relative group transition-all duration-300 hover:translate-x-1"
              >
                EMAIL
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-text transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#"
                className="text-[clamp(18px,2vw,22px)] font-medium text-text no-underline uppercase tracking-wide relative group transition-all duration-300 hover:translate-x-1"
              >
                WHATSAPP
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-text transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            <div className="contact-column flex flex-col gap-4 md:gap-5">
              <Link
                href="#"
                className="text-[clamp(18px,2vw,22px)] font-medium text-text no-underline uppercase tracking-wide relative group transition-all duration-300 hover:translate-x-1"
              >
                INSTAGRAM
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-text transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#"
                className="text-[clamp(18px,2vw,22px)] font-medium text-text no-underline uppercase tracking-wide relative group transition-all duration-300 hover:translate-x-1"
              >
                TIKTOK
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-text transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#"
                className="text-[clamp(18px,2vw,22px)] font-medium text-text no-underline uppercase tracking-wide relative group transition-all duration-300 hover:translate-x-1"
              >
                LINKEDIN
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-text transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#"
                className="text-[clamp(18px,2vw,22px)] font-medium text-text no-underline uppercase tracking-wide relative group transition-all duration-300 hover:translate-x-1"
              >
                X (TWITTER)
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-text transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>

        <div className="justify-self-center md:justify-self-end">
          <button className="contact-button bg-[#6f6f6f] text-primary border-none py-3 px-6 md:py-4 md:px-8 font-default text-[14px] md:text-[15px] cursor-pointer flex items-center gap-2.5 rounded-sm transition-all duration-300 hover:bg-[#5a5a5a] hover:-translate-y-0.5 hover:shadow-lg group">
            Unavailable{" "}
            <span className="text-[16px] md:text-[18px] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
