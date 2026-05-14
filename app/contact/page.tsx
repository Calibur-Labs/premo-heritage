"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { FormEvent, SVGProps } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  Clock,
  ArrowRight,
  Plane,
  Car,
  TrainFront,
  Navigation,
} from "lucide-react";

const contactDetails = [
  {
    title: "Our Location",
    lines: ["Plot 12, Temple Road, Talpe,", "Galle, Sri Lanka"],
    Icon: MapPin,
  },
  {
    title: "Phone Number",
    lines: ["+94 76 11 11 111"],
    Icon: Phone,
  },
  {
    title: "Email Address",
    lines: ["premo@gmail.com"],
    Icon: Mail,
  },
];

// Brand icons — Lucide v1 removed these because they're trademarks,
// so we use clean custom SVGs (official brand glyphs).
const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0022 12z" />
  </svg>
);

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

const WhatsappIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M17.5 14.4c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48a8.97 8.97 0 01-1.66-2.07c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51-.18-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.42 9.42 0 01-4.8-1.31l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 0114.66-11.6 9.4 9.4 0 012.78 6.69c0 5.2-4.23 9.42-9.45 9.42zm8.02-17.44A11.32 11.32 0 0012.04 1C5.82 1 .77 6.05.77 12.27c0 1.99.52 3.93 1.51 5.64L.67 24l6.27-1.65a11.27 11.27 0 005.1 1.3h.01c6.22 0 11.27-5.05 11.27-11.26 0-3.01-1.17-5.84-3.3-7.96z" />
  </svg>
);

const TripadvisorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 8.5c2.4 0 4.7.5 6.7 1.5l2.3-2.5h-4.5c-1.4-.9-3-1.5-4.5-1.5s-3.1.6-4.5 1.5H3l2.3 2.5c2-1 4.3-1.5 6.7-1.5zM7.5 11a3 3 0 100 6 3 3 0 000-6zm9 0a3 3 0 100 6 3 3 0 000-6zm-9 1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM12 13.5l-1.4 2h2.8L12 13.5z" />
  </svg>
);

const socialLinks = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "Tripadvisor", href: "#", Icon: TripadvisorIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "WhatsApp", href: "#", Icon: WhatsappIcon },
];

const villaAddressLines = [
  "24, Church Street,",
  "Galle Fort, Galle 80000,",
  "Sri Lanka",
];

const villaLocation = {
  latitude: 6.0258,
  longitude: 80.2168,
  zoom: 16,
};

const villaMapCoordinates = `${villaLocation.latitude},${villaLocation.longitude}`;
const villaMapEmbedUrl = `https://www.google.com/maps?q=${villaMapCoordinates}&z=${villaLocation.zoom}&output=embed`;
const villaDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${villaMapCoordinates}`;

const travelOptions = [
  {
    title: "Private Airport Transfer",
    description:
      "Experience a seamless transition from Bandaranaike International Airport (BIA) with our luxury chauffeur service. Air-conditioned comfort and direct pickup.",
    Icon: Plane,
  },
  {
    title: "Taxi & Ride Services",
    description:
      "Flexible and convenient travel via reputable local taxi providers or ride-hailing apps. A direct route to the Southern Expressway ensures a smooth trip.",
    Icon: Car,
  },
  {
    title: "Scenic Coastal Train",
    description:
      "For the romantic traveler, the ocean-view train from Colombo Fort to Galle Station offers breathtaking vistas of the Indian Ocean coastline.",
    Icon: TrainFront,
  },
  {
    title: "Self-Drive",
    description:
      "Enjoy the freedom of the open road. The villa is easily accessible via the E01 Expressway, with secure on-site parking available for all guests.",
    Icon: Navigation,
  },
];

export default function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    console.log("Contact form payload:", payload);
  }

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
            src="/contactbg.jpeg"
            alt="Premo Heritage Villa luxury beachfront view"
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
              We&apos;re Here to Help
            </h1>

            <p className="mx-auto mt-6 max-w-2xl font-secondary text-sm leading-7 text-gray-200 md:text-base">
              Have questions about your stay? Our dedicated team is ready to
              assist you with reservations, special requests, and any inquiries
              about Premo Heritage Villa.
            </p>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="mb-3 font-secondary text-[15px] uppercase tracking-[0.3em] text-white/80">
              Scroll Down
            </span>

            <ChevronDown className="h-8 w-8 text-white" strokeWidth={1.5} />
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="bg-[#fbfaf7] py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden border border-[#eee4da] bg-white shadow-[0_12px_35px_rgba(61,38,20,0.05)] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="px-8 py-12 sm:px-12 lg:px-16">
            <h2 className="font-primary text-3xl font-black text-primary md:text-4xl">
              Contact Details
            </h2>

            <div className="mt-10 space-y-8">
              {contactDetails.map((detail) => {
                const { Icon } = detail;
                return (
                  <div key={detail.title} className="flex gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[8px] bg-[#f4f1ec] text-primary">
                      <Icon className="h-6 w-6" strokeWidth={1.7} />
                    </div>

                    <div className="pt-1">
                      <h3 className="font-primary text-[24px] font-bold leading-none text-[#2f2520]">
                        {detail.title}
                      </h3>

                      <div className="mt-2 font-secondary text-[16px] font-medium leading-8 text-gray-800">
                        {detail.lines.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-14">
              <p className="font-secondary text-[15px] font-bold uppercase tracking-[0.18em] text-[#5d5148]">
                Follow the Journey
              </p>

              <div className="mt-4 flex gap-4">
                {socialLinks.map((link) => {
                  const { Icon } = link;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      aria-label={link.label}
                      className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#ead8d0] text-[#2f2520] transition duration-300 hover:border-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bg-[#f5f2ed] px-8 py-12 sm:px-12 lg:px-16">
            <h2 className="font-primary text-3xl font-black text-primary md:text-4xl">
              Send a Message
            </h2>

            <form className="mt-9 space-y-7" onSubmit={handleSubmit}>
              <div className="grid gap-7 md:grid-cols-2">
                <label className="block">
                  <span className="font-primary text-[15px] font-bold uppercase tracking-[0.22em] text-[#7c6d63]">
                    Full Name
                  </span>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your Name"
                    autoComplete="name"
                    className="mt-2 h-12 w-full border border-[#e7d1c8] bg-transparent px-4 font-secondary text-base font-medium text-gray-800 outline-none transition placeholder:text-[#9c9188] focus:border-primary"
                  />
                </label>

                <label className="block">
                  <span className="font-primary text-[15px] font-bold uppercase tracking-[0.22em] text-[#7c6d63]">
                    Email Address
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    autoComplete="email"
                    className="mt-2 h-12 w-full border border-[#e7d1c8] bg-transparent px-4 font-secondary text-base font-medium text-gray-800 outline-none transition placeholder:text-[#9c9188] focus:border-primary"
                  />
                </label>
              </div>

              <label className="block">
                <span className="font-primary text-[15px] font-bold uppercase tracking-[0.22em] text-[#7c6d63]">
                  Phone Number
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+94 XX XXX XXXX"
                  autoComplete="tel"
                  className="mt-2 h-12 w-full border border-[#e7d1c8] bg-transparent px-4 font-secondary text-base font-medium text-gray-800 outline-none transition placeholder:text-[#9c9188] focus:border-primary"
                />
              </label>

              <label className="block">
                <span className="font-primary text-[15px] font-bold uppercase tracking-[0.22em] text-[#7c6d63]">
                  Message
                </span>
                <textarea
                  name="message"
                  placeholder="How can we assist you today?"
                  rows={5}
                  className="mt-2 w-full resize-none border border-[#e7d1c8] bg-transparent px-4 py-3 font-secondary text-base font-medium text-gray-800 outline-none transition placeholder:text-[#9c9188] focus:border-primary"
                />
              </label>

              <button
                type="submit"
                className="group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-sm bg-[#8B1A1A] px-10 py-4 font-secondary text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#6f1515] sm:w-auto"
              >
                {/* Shine Element */}
                <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[150%]" />

                <span className="relative z-10 flex items-center gap-3">
                  Send Inquiry
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* VILLA LOCATION SECTION */}
      <section className="bg-[#f1eee9] py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
          <div>
            <div className="mb-5 flex h-9 w-9 items-center justify-center text-primary">
              <MapPin className="h-7 w-7" strokeWidth={1.8} />
            </div>

            <h2 className="font-primary text-3xl font-black text-primary md:text-4xl">
              The Villa Location
            </h2>

            <address className="mt-6 not-italic font-secondary text-[18px] font-medium leading-8 text-gray-800">
              {villaAddressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>

            <a
              href={villaDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 border-b border-primary pb-1 font-secondary text-[15px] uppercase tracking-[0.08em] text-primary transition duration-300 hover:text-[#6f1111]"
            >
              Get Directions
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="overflow-hidden rounded-[4px] shadow-[0_18px_45px_rgba(61,38,20,0.12)]">
            <iframe
              title="Premo Heritage Villa location on Google Maps"
              src={villaMapEmbedUrl}
              className="h-[320px] w-full border-0 md:h-[380px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* TRAVEL GUIDE SECTION */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-secondary text-sm uppercase tracking-[0.3em] text-[#C9A84C]">
              Travel Guide
            </p>

            <h2 className="mt-2 font-primary text-4xl font-black leading-tight text-primary md:text-5xl">
              Getting to Premo Heritage Villa
            </h2>

            <p className="mx-auto mt-4 max-w-2xl font-primary text-xl font-medium leading-8 text-gray-800">
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

                  <p className="mt-4 font-primary text-lg font-medium leading-7 text-gray-800">
                    {option.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-16 flex flex-col gap-6 bg-[#f7f4ee] px-8 py-8 sm:flex-row sm:items-center sm:justify-between md:px-10">
            <div className="flex items-center gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-[#f0d8cf] text-primary">
                <Clock className="h-5 w-5" strokeWidth={1.7} />
              </div>

              <div>
                <p className="font-secondary text-[10px] font-bold uppercase tracking-[0.22em] text-[#a87d2d]">
                  Estimated Journey
                </p>
                <p className="mt-1 font-primary text-xl font-medium leading-8 text-gray-800">
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
    </main>
  );
}
