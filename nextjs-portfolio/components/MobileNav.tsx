"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      timeline.current = gsap.timeline({ paused: true });

      timeline.current
        .to(overlayRef.current, {
          opacity: 1,
          visibility: "visible",
          duration: 0,
        })
        .from(linksRef.current?.children || [], {
          x: -100,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
        })
        .from(
          closeBtnRef.current,
          {
            scale: 0,
            rotation: 180,
            opacity: 0,
            duration: 0.4,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      timeline.current?.play();
    } else {
      document.body.style.overflow = "";
      timeline.current?.reverse();
    }
  }, [isOpen]);

  return (
    <div
      ref={overlayRef}
      className="fixed top-0 left-0 w-full h-screen bg-text z-[10000] flex items-center justify-center opacity-0 invisible"
    >
      <button
        ref={closeBtnRef}
        className="absolute top-[6vh] right-[10%] bg-none border-none cursor-pointer text-5xl text-primary leading-none p-0 w-12 h-12 flex items-center justify-center"
        onClick={onClose}
        aria-label="Close menu"
      >
        ×
      </button>

      <div className="text-center">
        <ul ref={linksRef} className="list-none p-0 m-0">
          {["work", "about", "contact"].map((item) => (
            <li key={item} className="my-8">
              <Link
                href={`#${item}`}
                className="text-[clamp(48px,8vw,72px)] font-medium text-primary no-underline uppercase tracking-tighter hover:translate-x-5 hover:opacity-70 transition-all duration-300 inline-block"
                onClick={onClose}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
