"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const faqData = [
  {
    question: "What is the cost of a typical website project?",
    answer:
      "Project costs vary depending on scope and complexity. Contact me for a custom quote tailored to your needs.",
  },
  {
    question: "How long does a typical website project take?",
    answer:
      "Most projects are completed within 4-8 weeks, depending on the requirements and feedback cycles.",
  },
  {
    question: "What platform will the website be on?",
    answer:
      "I specialize in Next.js, React, and Framer, choosing the best platform for your specific goals.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "I'll need your brand assets, content, and a clear understanding of your goals and target audience.",
  },
  {
    question: "Do you offer ongoing support after the project?",
    answer:
      "Yes, I offer various maintenance packages to keep your website secure and up-to-date.",
  },
];

export const FAQ = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".faq-title", {
        scrollTrigger: {
          trigger: "#faq",
          start: "top 70%",
          end: "top 50%",
          scrub: 1,
        },
        y: 50,
        opacity: 0,
      });

      gsap.from(".faq-item", {
        scrollTrigger: {
          trigger: ".faq-list",
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={containerRef}
      id="faq"
      className="w-screen min-h-screen bg-primary section-padding flex items-center"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full items-start">
        <div className="flex-none pt-2 hidden md:block">
          <span className="text-[16px] text-text uppercase tracking-wider font-normal">
            [FAQs]
          </span>
        </div>

        <div className="flex-1 flex flex-col gap-8 md:gap-12 items-center w-full">
          <h2 className="faq-title text-[clamp(28px,4vw,48px)] font-medium text-text leading-[1.2] m-0 text-center">
            Frequently asked questions
          </h2>

          <div className="faq-list flex flex-col gap-4 w-full max-w-[1100px]">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="faq-item flex flex-col bg-secondary px-4 md:px-8 py-4 md:py-6 gap-4 transition-colors duration-300 hover:bg-[#e5e5e5] cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center gap-4 md:gap-8">
                  <p className="text-[14px] md:text-[16px] font-normal text-text m-0 leading-[1.4] flex-1 text-left">
                    {item.question}
                  </p>
                  <button
                    className="bg-none border-none cursor-pointer p-0 flex items-center justify-center w-6 h-6 text-text shrink-0 transition-transform duration-300"
                    style={{
                      transform:
                        openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                    aria-label="Toggle answer"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="10" y1="5" x2="10" y2="15"></line>
                      <line x1="5" y1="10" x2="15" y2="10"></line>
                    </svg>
                  </button>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-[200px] opacity-100 mt-2 md:mt-4"
                      : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                  <p className="text-[13px] md:text-[14px] text-[#6f6f6f] m-0 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
