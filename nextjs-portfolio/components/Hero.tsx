"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Load Animations
      const tl = gsap.timeline();

      tl.from("#main-text", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      })
        .from(
          "#sub-text",
          {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .from(
          buttonRef.current,
          {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .from(
          "#name h1",
          {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .from(
          "#hero-image",
          {
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
            ease: "back.out(1.7)",
          },
          "-=1"
        );

      // Parallax Effects
      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: 200,
        opacity: 0.5,
        ease: "none",
      });

      gsap.to(ctaRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: -150,
        ease: "none",
      });

      gsap.to(buttonRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-screen min-h-screen bg-secondary overflow-hidden pt-[6vh]"
    >
      <div
        ref={contentRef}
        id="hero-content"
        className="absolute top-[20vh] md:top-[26vh] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-center w-full px-4"
      >
        <h3
          id="main-text"
          className="text-[clamp(28px,4vw,36px)] font-normal text-text leading-[1.3] m-0"
        >
          Web Designer <br />
          Framer Developer
        </h3>
        <span
          id="sub-text"
          className="text-[clamp(16px,2vw,20px)] text-[#6f6f6f] mt-[1.5vh] block"
        >
          For service and software businesses.
        </span>
      </div>

      <div
        ref={buttonRef}
        id="button-section"
        className="absolute top-[35vh] md:top-[28vh] right-[5%] md:right-[10%] flex flex-col items-end gap-[1vh]"
      >
        <span className="text-[12px] text-text text-right hidden md:block">
          *Updates on my socials
        </span>
        <button className="bg-[#6f6f6f] text-primary border-none py-2 px-4 md:py-3 md:px-6 font-default text-[12px] md:text-[14px] cursor-pointer flex items-center gap-2 transition-all duration-300 hover:bg-[#5a5a5a] hover:scale-105">
          Unavailable <span className="text-[14px] md:text-[16px]">→</span>
        </button>
      </div>

      <div
        ref={ctaRef}
        id="cta-section"
        className="absolute bottom-0 left-0 w-full h-auto flex flex-col-reverse md:flex-row items-center md:items-end justify-between px-[5%] pb-[3vh] gap-4 md:gap-0"
      >
        <div
          id="name"
          className="text-[clamp(80px,18vw,280px)] font-medium text-text leading-[0.9] text-center md:text-left uppercase tracking-[-0.02em] w-full md:w-auto"
        >
          <h1>Souvik</h1>
        </div>
        <div className="shrink-0 mb-4 md:mb-0">
          <div
            id="hero-image"
            className="w-[clamp(100px,15vh,280px)] h-[clamp(100px,15vh,280px)] rounded-full overflow-hidden cursor-pointer transition-transform duration-400 hover:scale-110"
          >
            <Image
              src="/images/heroimg.avif"
              alt="portfolio owner image"
              width={280}
              height={280}
              className="w-full h-full object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
