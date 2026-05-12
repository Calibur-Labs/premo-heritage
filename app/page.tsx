"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import HeritageSection from "./components/home/heritageSection";
import GuestStoriesSection from "./components/home/GuestStoriesSection";
import AncientSection from "./components/home/AncientSection";

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden">

        {/* Background Animation */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/homebg.png"
            alt="Premo Heritage Villa luxury beachfront view"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-6 pt-24 text-center">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl"
          >

            {/* Heading */}
            <h1 className="font-primary text-5xl font-black leading-tight text-white md:text-7xl">
              Welcome to Premo Heritage
              <br />
              Villa
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-3xl font-secondary text-sm leading-8 text-gray-200 md:text-lg">
              Immerse yourself in the timeless elegance of colonial architecture
              blended with authentic Sri Lankan hospitality and modern luxury.
            </p>

            {/* Premium Buttons */}
            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

              {/* Explore Button */}
              <button className="group rounded-[10px] bg-[#991B1B] px-10 py-4 font-secondary text-sm uppercase tracking-[0.18em] text-white transition duration-500 hover:bg-[#7d1515]">

                <span className="flex items-center gap-3">
                  Explore Villa

                  <span className="transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>

              </button>

              {/* Booking Button */}
              <button className="group rounded-[10px] border border-white/60 bg-white/10 px-10 py-4 font-secondary text-sm uppercase tracking-[0.18em] text-white backdrop-blur-md transition duration-500 hover:bg-white hover:text-black">

                <span className="flex items-center gap-3">
                  Book Your Stay

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition duration-300 group-hover:rotate-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7h8m0 0v8m0-8L6 17"
                    />
                  </svg>
                </span>

              </button>

            </div>

          </motion.div>

        </div>

      </section>

      {/* OTHER SECTIONS */}
      <HeritageSection />
      <GuestStoriesSection />
      <AncientSection />

    </main>
  );
}