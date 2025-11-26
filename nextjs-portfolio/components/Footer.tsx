"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Footer = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".footer-logo", {
        scrollTrigger: {
          trigger: "footer",
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        scale: 0.8,
        opacity: 0,
      });

      gsap.from(".footer-copyright", {
        scrollTrigger: {
          trigger: "footer",
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
        y: 20,
        opacity: 0,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={containerRef}
      className="w-screen min-h-[30vh] bg-primary flex items-center justify-center relative px-[8%] border-t border-[#e0e0e0]"
    >
      <div className="flex items-center justify-center w-full h-full relative py-8 md:py-16">
        <span className="footer-copyright absolute bottom-4 md:bottom-8 left-1/2 md:left-8 text-[12px] md:text-[15px] font-normal text-[#6f6f6f] tracking-wide transform -translate-x-1/2 md:translate-x-0">
          ©2025
        </span>
        <h1 className="footer-logo text-[clamp(60px,18vw,280px)] font-bold text-text uppercase tracking-[-0.02em] m-0 leading-none transition-all duration-300 hover:tracking-[0.01em]">
          SOUVIK
        </h1>
      </div>
    </footer>
  );
};
