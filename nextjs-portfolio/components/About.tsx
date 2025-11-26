"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Split text animation
      if (titleRef.current) {
        const text = titleRef.current.textContent || "";
        const words = text.split(" ");
        titleRef.current.innerHTML = words
          .map((word) => `<span class="word inline-block">${word}</span>`)
          .join(" ");

        gsap.from(".about-title .word", {
          scrollTrigger: {
            trigger: ".about-title",
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
          opacity: 0.2,
          y: 50,
          stagger: 0.1,
        });
      }

      // Image Animation
      gsap.from(".about-image", {
        scrollTrigger: {
          trigger: "#about",
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
        x: -100,
        opacity: 0,
      });

      // Content Columns Animation
      gsap.from(".about-column", {
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        y: 80,
        opacity: 0,
        stagger: 0.2,
      });

      // Social Icons Animation
      gsap.from(".social-icon", {
        scrollTrigger: {
          trigger: ".about-footer",
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(1.7)",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="about"
      className="w-screen min-h-screen bg-primary section-padding flex items-center"
    >
      <div className="flex gap-16 w-full items-start">
        <div className="flex-none hidden md:block">
          <div className="about-image w-[clamp(200px,25vw,350px)] h-[clamp(300px,35vw,500px)] rounded-3xl overflow-hidden">
            <Image
              src="/images/about.avif"
              alt="Profile picture"
              width={350}
              height={500}
              className="w-full h-full object-contain object-center"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-12">
          <div className="flex gap-4 md:gap-8 items-start">
            <span className="text-[14px] md:text-[16px] text-text uppercase tracking-wider font-normal">
              [ABOUT]
            </span>
            <h2
              ref={titleRef}
              className="about-title text-[clamp(24px,5vw,48px)] font-medium text-text leading-none m-0"
            >
              Hi, I&apos;m Raj. Actually, my real name is Souvik Karfa. Now
              I&apos;m tryna learn the business of design.
            </h2>
          </div>

          <div className="about-content grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full md:max-w-[80%] md:ml-[15vw] mt-[6vh] md:mt-[12vh]">
            <div className="about-column flex flex-col gap-4">
              <h4 className="text-[14px] md:text-[16px] text-text uppercase tracking-wider m-0 font-normal">
                MY LIFE
              </h4>
              <p className="text-[14px] font-medium text-text leading-relaxed m-0">
                I&apos;m born in 2003. I live in Singapore. I&apos;m a guy.
                I&apos;m Chinese. I love ice cream. I hate mint. I&apos;m
                dyslexic. I have scoliosis. I can&apos;t read. I&apos;m cool.
              </p>
            </div>
            <div className="about-column flex flex-col gap-4">
              <h4 className="text-[14px] md:text-[16px] text-text uppercase tracking-wider m-0 font-normal">
                BUSINESS
              </h4>
              <p className="text-[14px] font-medium text-text leading-relaxed m-0">
                I briefly read The Millionaire Fastlane when I was 19 and it
                made me hard. Then, I found design. The goal is to afford my
                girlfriend (and retire the people I love).
              </p>
            </div>
          </div>

          <div className="about-footer grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full md:max-w-[80%] md:ml-[15vw] mt-[6vh] md:mt-[12vh]">
            <div className="social-icons flex gap-6 items-center">
              {[
                {
                  name: "Instagram",
                  path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01",
                },
                {
                  name: "TikTok",
                  path: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z",
                },
                {
                  name: "LinkedIn",
                  path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 4a2 2 0 1 1-2 2 2 2 0 0 1 2-2z",
                },
                {
                  name: "X",
                  path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                },
              ].map((social, index) => (
                <Link
                  key={index}
                  href="#"
                  className="social-icon w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-text transition-all duration-300 hover:bg-[#d0d0d0] hover:scale-110"
                  aria-label={social.name}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={social.path} />
                  </svg>
                </Link>
              ))}
            </div>
            <button className="bg-[#6f6f6f] text-primary border-none py-3 px-6 font-default text-[14px] cursor-pointer flex items-center gap-2 transition-all duration-300 hover:bg-[#5a5a5a] w-fit">
              Unavailable <span className="text-[16px]">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
