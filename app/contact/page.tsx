"use client";

import HeroSection from "../components/contact/HeroSection";
import ContactFormSection from "../components/contact/ContactFormSection";
import VillaLocationSection from "../components/contact/VillaLocationSection";
import TravelGuideSection from "../components/contact/TravelGuideSection";

export default function Contact() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ContactFormSection />
      <VillaLocationSection />
      <TravelGuideSection />
    </main>
  );
}