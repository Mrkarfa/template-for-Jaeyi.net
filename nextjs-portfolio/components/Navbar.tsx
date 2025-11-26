"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { MobileNav } from "./MobileNav";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 w-full h-[6vh] px-[10%] flex justify-between items-center bg-secondary z-50 transition-all duration-300"
      >
        <div className="text-[16px] font-medium uppercase cursor-pointer">
          <span>souvik</span>
        </div>

        <div className="hidden md:block text-[14px] font-normal">
          <ul className="list-none flex gap-5">
            <li>
              <Link href="#work" className="text-text uppercase no-underline">
                work
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-text uppercase no-underline">
                about
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-text uppercase no-underline"
              >
                contact
              </Link>
            </li>
          </ul>
        </div>

        <button
          className="md:hidden bg-none border-none cursor-pointer p-0 z-[10001] relative w-6 h-5 flex flex-col justify-between"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-text transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-[9px]" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-text transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-text transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""
            }`}
          ></span>
        </button>
      </nav>

      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
