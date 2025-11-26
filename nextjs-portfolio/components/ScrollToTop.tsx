"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    if (isVisible) {
      gsap.to(buttonRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        pointerEvents: "all",
      });
    } else {
      gsap.to(buttonRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        pointerEvents: "none",
      });
    }
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-text text-primary rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform duration-300 opacity-0 translate-y-5"
      aria-label="Scroll to top"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
};
