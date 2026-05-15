"use client";

import HeroSection from "../components/about/HeroSection";
import FounderSection from "../components/about/FounderSection";
import HeritageSection from "../components/about/HeritageSection";
import ServicesSection from "../components/about/ServicesSection";
import FaqSection from "../components/about/FaqSection";

export default function About() {
  return (
    <main className="bg-white text-[#433227]">
      <HeroSection />
      <FounderSection />
      <HeritageSection />
      <ServicesSection />
      <FaqSection />
    </main>
  );
}