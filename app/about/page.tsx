"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const faqItems = [
  {
    question:
      "What makes Premo Heritage Villa different from other luxury stays?",
    answer:
      "The villa is designed as a quiet heritage retreat. Guests stay close to nature while still experiencing refined hospitality, curated interiors, and a slower, more intentional rhythm of travel.",
  },
  {
    question:
      "Is the villa suitable for family stays and small private groups?",
    answer:
      "Yes. The property works well for couples, families, and intimate gatherings looking for privacy, generous shared spaces, and a more personal hospitality experience.",
  },
  {
    question: "Do you offer experiences beyond accommodation?",
    answer:
      "We arrange culturally rooted and locally informed experiences, from relaxed nature-led activities to tailored recommendations that help guests connect with the region more meaningfully.",
  },
  {
    question: "When is the best time to visit?",
    answer:
      "The villa is welcoming year-round. The ideal time depends on whether you prefer sunnier days for outdoor lounging or a greener seasonal atmosphere with softer, misty landscapes.",
  },
  {
    question: "Can the team help with transport or itinerary planning?",
    answer:
      "Yes. Guests can receive support with transfers, day planning, and nearby recommendations so the stay feels seamless from arrival to departure.",
  },
  {
    question:
      "Is the property focused on relaxation or exploration?",
    answer:
      "Both. Some guests come to fully switch off, while others use the villa as a base for discovering nearby scenery, culture, and slower local experiences.",
  },
];

const galleryImages = [
  {
    src: "/container1.png",
    alt: "Tropical villa exterior and infinity pool",
  },
  {
    src: "/container2.png",
    alt: "Traditional heritage hospitality experience",
  },
  {
    src: "/container3.png",
    alt: "Villa view framed by warm evening light",
  },
  {
    src: "/container4.png",
    alt: "Warm balcony hospitality setting",
  },
];

function SectionHeading({
  label,
  title,
  description,
}: {
  label?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {label && (
        <p className="mb-4 font-secondary text-sm uppercase tracking-[0.3em] text-[#C9A84C]">
          {label}
        </p>
      )}

      <h2 className="mb-6 font-primary text-5xl font-black leading-\[1]\ text-primary md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="font-secondary leading-relaxed text-gray-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-5 font-secondary leading-relaxed text-gray-600 sm:text-base">
      {children}
    </p>
  );
}

export default function About() {
  return (
    <main className="bg-white text-[#433227]">

      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden">

        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/aboutHome.png"
            alt="Premo Heritage Villa overlooking a lush tropical landscape"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <h1 className="font-primary text-5xl font-black leading-tight text-white md:text-6xl">
              We're Here to Help
            </h1>

            <p className="mx-auto mt-6 max-w-2xl font-secondary text-sm leading-7 text-gray-200 md:text-base">
              Have questions about your stay? Our dedicated team is ready to assist
              you with reservations, special requests, and any inquiries about Premo
              Heritage Villa.
            </p>
          </motion.div>
        </div>

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

      {/* FOUNDER STORY SECTION */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-4">

          <div className="flex justify-center">
            <img
              src="/founder.png"
              alt="Premo Heritage portrait-inspired visual"
              className="h-[550px] w-full max-w-[500px] object-cover rounded-xl md:h-[650px]"
            />
          </div>

          <div className="lg:pl-6">
            <SectionHeading
              label="The Founder"
              title="A Legacy Built Across Continents"
            />

            <Paragraph>
              Premo Heritage Villa was conceived as more than a place to stay.
              It was imagined as a home where architecture, atmosphere, and
              service would carry the depth of a personal story.
            </Paragraph>

            <Paragraph>
              The result is a retreat that balances elegance with warmth:
              generous views, tactile materials, and a sense of calm that lets
              guests settle in immediately.
            </Paragraph>
          </div>
        </div>
      </section>

      {/* HERITAGE SECTION */}
      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-8">

          <div className="order-2 max-w-2xl lg:order-1 lg:pr-20">
            <SectionHeading
              label="Who We Are"
              title="A Legacy of Culture and Hospitality"
            />

            <Paragraph>
              The villa’s atmosphere is intentionally layered. Natural textures,
              open-air living, and quiet moments of ritual are all part of the
              experience.
            </Paragraph>

            <Paragraph>
              From sunrise views over the landscape to evenings shaped by warm
              light and conversation, every detail is meant to feel gracious.
            </Paragraph>
          </div>

          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-5">
              {galleryImages.map((image, index) => (
                <div
                  key={`${image.alt}-${index}`}
                  className="overflow-hidden rounded-[16px] shadow-[0_18px_40px_rgba(61,38,20,0.14)] min-h-[240px] sm:min-h-[300px]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={900}
                    height={700}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 1024px) 50vw, 420px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-[#fffdf9] px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-primary text-5xl font-black leading-[1] text-primary md:text-6xl">
              Frequently Asked Questions
            </h2>

            <p className="font-secondary leading-relaxed text-gray-600 sm:text-base">
              A few common questions about the villa and experience.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-6xl rounded-[22px] border border-[#ddd6cb] bg-[#fdfcf9] px-8 py-6 shadow-[0_8px_30px_rgba(61,38,20,0.06)]">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                open={index === 0}
                className="group border-b border-[#cfc7bc] last:border-b-0"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6">

                  <span className="font-primary text-[22px] text-[#433227]">
                    {item.question}
                  </span>

                  <span className="font-primary text-3xl leading-none text-[#b9924c] transition-transform duration-500 ease-out group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="grid grid-rows-[0fr] overflow-hidden transition-all duration-500 ease-in-out group-open:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="max-w-5xl pb-8 pr-10 font-secondary text-[15px] leading-8 text-[#6f655b]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="mb-4 font-primary text-[18px] font-bold text-gray-800">
              Still have questions? We're here to help.
            </p>

              <Link href="/contact" className="flex justify-center">
                  <button className="group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-sm bg-[#8B1A1A] px-10 py-4 font-secondary text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#6f1515] sm:w-auto">
                  
                  {/* Shine Element */}
                  <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[150%]" />
                  
                  <span className="relative z-10 flex items-center gap-3">
                    Contact Our Concierge
                  </span>
                </button>
              </Link>
            
          </div>
        </div>
      </section>
    </main>
  );
}