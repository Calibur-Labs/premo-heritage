"use client";

import HeritageSection from "./components/home/heritageSection";
import GuestStoriesSection from "./components/home/GuestStoriesSection";
import AncientSection from "./components/home/AncientSection";
import NearbyDestinationsSection from "./components/home/NearbyDestinationsSection";
import HeroSection from "./components/home/heroSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection/>
      <HeritageSection />
      <NearbyDestinationsSection />
      <AncientSection />
      <GuestStoriesSection />
    </main>
  );
}