"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const destinations = [
  {
    category: "BEACH",
    title: "Mirissa Beach",
    description:
      "Experience the majestic dance of blue whales or simply lose yourself in the golden hues of a Mirissa sunset. A coastal sanctuary known for its laid-back atmosphere and crystal-clear waters, perfect for soul-searching and ocean adventures.",
    location: "https://maps.google.com/?q=Mirissa+Beach",
    image: "/mirissa.png",
  },
  {
    category: "BEACH",
    title: "Unawatuna Beach",
    description:
      "Relax on golden sands surrounded by turquoise waters, vibrant beach cafes, snorkeling spots, and one of the most lively coastal atmospheres in southern Sri Lanka.",
    location: "https://maps.google.com/?q=Unawatuna+Beach",
    image: "/unawatuna.png",
  },
  {
    category: "BEACH",
    title: "Thalpe Beach",
    description:
      "A peaceful coastal escape known for its iconic natural rock pools, swaying palm trees, quiet golden shoreline, and relaxing atmosphere away from busy tourist crowds.",
    location: "https://maps.google.com/?q=Thalpe+Beach",
    image: "/thalpe.png",
  },
  {
    category: "HIDDEN BEACH",
    title: "Jungle Beach",
    description:
      "A secluded tropical beach surrounded by dense forest and calm turquoise waters, ideal for peaceful swimming, snorkeling, and relaxing away from the crowds.",
    location: "https://maps.google.com/?q=Jungle+Beach+Unawatuna",
    image: "/junglebeach.png",
  },
  {
    category: "CULTURAL",
    title: "Galle Fort",
    description:
      "A UNESCO World Heritage site filled with colonial charm, cobblestone streets, oceanfront ramparts, boutique cafes, and centuries of Sri Lankan history blended with Dutch architecture.",
    location: "https://maps.google.com/?q=Galle+Fort",
    image: "/gallefort.png",
  },
  {
    category: "TEMPLE",
    title: "Japanese Peace Pagoda",
    description:
      "A stunning white pagoda perched above the coastline offering breathtaking panoramic views of the Indian Ocean and surrounding jungle landscapes.",
    location: "https://maps.google.com/?q=Japanese+Peace+Pagoda+Unawatuna",
    image: "/pagoda.png",
  },
  {
    category: "NATURE",
    title: "Sinharaja Forest Reserve",
    description:
      "Explore Sri Lanka’s world-famous tropical rainforest, home to rare endemic birds, lush biodiversity, mist-covered trails, waterfalls, and immersive eco-adventures deep in nature.",
    location: "https://maps.google.com/?q=Sinharaja+Forest+Reserve",
    image: "/sinharaja.png",
  },
  {
    category: "RAINFOREST",
    title: "Kanneliya Forest Reserve",
    description:
      "Discover hidden waterfalls, tropical jungle trails, rich biodiversity, and peaceful rainforest scenery in one of Sri Lanka’s most beautiful protected forest reserves.",
    location: "https://maps.google.com/?q=Kanneliya+Forest+Reserve",
    image: "/kanneliya.png",
  },
  {
    category: "SCENIC",
    title: "Rumassala",
    description:
      "A legendary hill covered in lush greenery and ocean views, believed to be connected to the Ramayana story and famous for its peaceful atmosphere and hidden coastal scenery.",
    location: "https://maps.google.com/?q=Rumassala",
    image: "/rumassala.png",
  },
  {
    category: "RIVER SAFARI",
    title: "Madu Ganga",
    description:
      "Cruise through tranquil mangroves, cinnamon islands, and scenic waterways while experiencing one of Sri Lanka’s most iconic river safari adventures filled with wildlife and nature.",
    location: "https://maps.google.com/?q=Madu+Ganga",
    image: "/maduganga.png",
  },
  {
    category: "WILDLIFE",
    title: "Sea Turtle Hatchery",
    description:
      "Visit a coastal conservation center dedicated to protecting endangered sea turtles, where guests can observe rescued turtles and newly hatched baby turtles.",
    location: "https://maps.google.com/?q=Sea+Turtle+Hatchery+Habaraduwa",
    image: "/turtlehatchery.png",
  },
  {
    category: "SAFARI",
    title: "Yala National Park",
    description:
      "Embark on an unforgettable wildlife safari through Sri Lanka’s most famous national park, home to leopards, elephants, sloth bears, exotic birds, and breathtaking natural landscapes.",
    location: "https://maps.google.com/?q=Yala+National+Park",
    image: "/yala.png",
  },
];

export default function Destinations() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/destination.jpeg"
            alt="Luxury tropical destination at Premo Heritage Villa"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <h1 className="font-primary text-5xl font-black leading-tight text-white md:text-6xl">
              Discover Enchanting
              <br />
              Destinations
            </h1>

            <p className="mx-auto mt-6 max-w-2xl font-secondary text-sm leading-7 text-gray-200 md:text-base">
              From pristine beaches to ancient cultural sites, explore the
              breathtaking beauty of Sri Lanka with curated experiences designed
              for unforgettable adventures.
            </p>
          </motion.div>
        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="mb-3 font-secondary text-xs uppercase tracking-[0.3em] text-white/80">
              Scroll Down
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* DESTINATIONS SECTION */}
      <section className="bg-[#f8f6f2] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl space-y-32">
          {destinations.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-[10px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={520}
                  height={380}
                  className="h-auto w-full object-cover shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition duration-700 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="max-w-xl">
                <p className="mb-4 font-secondary text-xs uppercase tracking-[0.4em] text-primary">
                  {item.category}
                </p>

                <h2 className="font-primary text-5xl font-black text-primary md:text-6xl">
                  {item.title}
                </h2>

                <p className="mt-4 font-secondary leading-8 text-[#5f5a54]">
                  {item.description}
                </p>

                {/* Google Map Link */}
                <a
                  href={item.location}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 font-secondary text-sm uppercase tracking-[0.15em] text-[#9c7a32] transition hover:text-[#7d5f24]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0L6.343 16.657a8 8 0 1111.314 0z"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  View Location
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}