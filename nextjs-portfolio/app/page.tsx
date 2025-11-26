"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Testimonial } from "@/components/Testimonial";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useLenis } from "@/hooks/useLenis";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  useLenis();

  return (
    <main className="relative w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Testimonial />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
