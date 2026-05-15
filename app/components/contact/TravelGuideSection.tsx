"use client";

import Link from "next/link";
import {
  Clock,
  ArrowRight,
  Bus,
  Car,
  TrainFront,
  Navigation,
} from "lucide-react";

const travelOptions = [
  {
    title: "Public Bus Route",
    description:
      "Travel by public bus to Galle Bus Station. From there, take a local bus, tuk-tuk, or taxi to Unawatuna and easily reach Premo Heritage Villa within minutes.",
    Icon: Bus,
  },
  {
    title: "Train Journey",
    description:
      "Take the coastal train to Galle Railway Station and continue to Unawatuna by tuk-tuk or taxi. The villa is a short drive from the station.",
    Icon: TrainFront,
  },
  {
    title: "Via Southern Expressway",
    description:
      "Driving via the Southern Expressway then Exit from Pinnaduwa Interchange and continue toward Unawatuna to reach the villa comfortably.",
    Icon: Navigation,
  },
  {
    title: "Taxi or Tuk-Tuk",
    description:
      "Guests traveling from nearby cities can directly reach Unawatuna using a taxi or traditional three-wheeler (tuk-tuk). Easy access to the villa is available from the main road.",
    Icon: Car,
  },
];

export default function TravelGuideSection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-secondary text-sm uppercase tracking-[0.3em] text-[#C9A84C]">
            Travel Guide
          </p>

          <h2 className="mt-2 font-primary text-4xl font-black leading-tight text-primary md:text-5xl">
            Getting to Premo Heritage Villa
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-secondary text-[18px] font-medium leading-7 text-gray-800">
            Explore the most convenient ways to reach us and begin your
            journey with ease. Whether by rail, road, or private chauffeur,
            the path to heritage is seamless.
          </p>

          <div className="mx-auto mt-5 h-px w-24 bg-[#a87d2d]" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {travelOptions.map((option) => {
            const { Icon } = option;
            return (
              <article
                key={option.title}
                className="rounded-[6px] border border-[#ebe4dc] bg-[#f7f4ee] px-8 py-10 transition duration-300 hover:bg-white hover:shadow-[0_12px_30px_rgba(61,38,20,0.08)]"
              >
                <div className="mb-8 text-primary">
                  <Icon className="h-12 w-12" strokeWidth={1.6} />
                </div>

                <h3 className="font-primary text-[24px] font-bold leading-tight text-[#2f2520]">
                  {option.title}
                </h3>

                <p className="mt-4 font-secondary text-[18px] font-medium leading-7 text-gray-800">
                  {option.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col gap-6 bg-[#f7f4ee] px-8 py-8 sm:flex-row sm:items-center sm:justify-between md:px-10 rounded-[6px] border border-[#ebe4dc]">
          <div className="flex items-center gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-[#f0d8cf] text-primary">
              <Clock className="h-5 w-5" strokeWidth={1.7} />
            </div>

            <div>
              <p className="font-secondary text-[12px] font-bold uppercase tracking-[0.22em] text-[#a87d2d]">
                Estimated Journey
              </p>
              <p className="mt-1 font-primary text-2xl font-medium leading-8 text-gray-800">
                Travel time from Colombo: approximately 2-2.5 hours.
              </p>
            </div>
          </div>

          <Link href="/booking">
            <button className="group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-sm bg-[#8B1A1A] px-10 py-4 font-secondary text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#6f1515] sm:w-auto">
              {/* Shine Element */}
              <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[150%]" />

              <span className="relative z-10 flex items-center gap-3">
                Arrange Your Transfer
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}