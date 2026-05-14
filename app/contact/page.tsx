"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { FormEvent } from "react";

const contactDetails = [
  {
    title: "Our Location",
    lines: ["Plot 12, Temple Road, Talpe,", "Galle, Sri Lanka"],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z"
      />
    ),
  },
  {
    title: "Phone Number",
    lines: ["+94 76 11 11 111"],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5.5C3 4.12 4.12 3 5.5 3h2.1c.48 0 .9.34 1 .81l.7 3.15a1.2 1.2 0 01-.34 1.11L7.7 9.33a13.1 13.1 0 006.97 6.97l1.26-1.26a1.2 1.2 0 011.11-.34l3.15.7c.47.1.81.52.81 1V18.5c0 1.38-1.12 2.5-2.5 2.5A15.5 15.5 0 013 5.5z"
      />
    ),
  },
  {
    title: "Email Address",
    lines: ["premo@gmail.com"],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16v12H4V6zm0 0l8 7 8-7"
      />
    ),
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <path
        fill="currentColor"
        d="M13.5 20v-7h2.35l.35-2.73h-2.7V8.53c0-.79.22-1.33 1.35-1.33h1.44V4.76A19.3 19.3 0 0014.2 4c-2.08 0-3.5 1.27-3.5 3.6v2.01H8.35V13h2.35v7h2.8z"
      />
    ),
  },
  {
    label: "Tripadvisor",
    href: "#",
    icon: (
      <path
        fill="currentColor"
        d="M12 7.5c2.9 0 5.41.75 6.68 1.88l1.32-1.45h-3.08V6h-9.84v1.93H4l1.32 1.45C6.59 8.25 9.1 7.5 12 7.5zm-4.1 3.1a2.55 2.55 0 102.55 2.55A2.55 2.55 0 007.9 10.6zm8.2 0a2.55 2.55 0 102.55 2.55 2.55 2.55 0 00-2.55-2.55zM7.9 14.25a1.1 1.1 0 111.1-1.1 1.1 1.1 0 01-1.1 1.1zm8.2 0a1.1 1.1 0 111.1-1.1 1.1 1.1 0 01-1.1 1.1zM12 15.1l-1.48 2.24h2.96L12 15.1z"
      />
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <>
        <rect
          x="5"
          y="5"
          width="14"
          height="14"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.8"
          fill="none"
        />
        <circle
          cx="12"
          cy="12"
          r="3"
          stroke="currentColor"
          strokeWidth="1.8"
          fill="none"
        />
        <circle cx="16.4" cy="7.6" r="1" fill="currentColor" />
      </>
    ),
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: (
      <path
        fill="currentColor"
        d="M12.04 4a7.8 7.8 0 00-6.69 11.82L4.4 20l4.27-.91A7.8 7.8 0 1012.04 4zm0 1.47a6.33 6.33 0 015.4 9.64 6.32 6.32 0 01-8.08 2.5l-.25-.13-2.57.55.56-2.51-.16-.26a6.33 6.33 0 015.1-9.79zm-2.8 3.2c-.13 0-.34.05-.52.25-.18.2-.68.67-.68 1.64 0 .96.7 1.9.8 2.03.1.13 1.36 2.18 3.39 2.97 1.68.66 2.03.53 2.4.5.36-.04 1.17-.48 1.34-.94.17-.46.17-.86.12-.94-.05-.08-.18-.13-.38-.23-.2-.1-1.17-.58-1.35-.65-.18-.07-.31-.1-.44.1-.13.2-.51.65-.63.78-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.1-1.38-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.44-1.06-.6-1.45-.16-.37-.32-.32-.44-.33h-.39z"
      />
    ),
  },
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
    linkText: "Reserve Now",
    href: "/booking",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 15h1.5m13 0H20M7 17.5h.01M17 17.5h.01M6 15l1.4-4.2A2 2 0 019.3 9.4h5.4a2 2 0 011.9 1.4L18 15m-12 0v3h2m10-3v3h-2M8 12h8"
      />
    ),
  },
  {
    title: "Taxi & Ride Services",
    description:
      "Flexible and convenient travel via reputable local taxi providers or ride-hailing apps. A direct route to the Southern Expressway ensures a smooth trip.",
    linkText: "Local Info",
    href: villaDirectionsUrl,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 16h10M6 13h12M8 18.5h.01M16 18.5h.01M7 13l1.2-4A2 2 0 0110.1 7.6h3.8A2 2 0 0115.8 9L17 13m-11 0v4h2m10-4v4h-2M10 5.5h4"
      />
    ),
  },
  {
    title: "Scenic Coastal Train",
    description:
      "For the romantic traveler, the ocean-view train from Colombo Fort to Galle Station offers breathtaking vistas of the Indian Ocean coastline.",
    linkText: "View Schedule",
    href: "#",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 17l-1.5 2M16 17l1.5 2M7 5h10a2 2 0 012 2v7a3 3 0 01-3 3H8a3 3 0 01-3-3V7a2 2 0 012-2zm2 4h6M9 13h.01M15 13h.01"
      />
    ),
  },
  {
    title: "Self-Drive",
    description:
      "Enjoy the freedom of the open road. The villa is easily accessible via the E01 Expressway, with secure on-site parking available for all guests.",
    linkText: "Driving Routes",
    href: villaDirectionsUrl,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 16h14M7 18.5h.01M17 18.5h.01M6.5 16l1.1-4.1A2 2 0 019.5 10.4h5A2 2 0 0116.4 12l1.1 4M8 8h8m-10 8v3h2m10-3v3h-2"
      />
    ),
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
            src="/homebg.png"
            alt="Premo Heritage Villa luxury beachfront view"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0" />

        {/* Hero Content */}
        
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="bg-[#fbfaf7] px-6 py-20 md:px-10 lg:py-24">
        <div className="mx-auto grid max-w-6xl overflow-hidden border border-[#eee4da] bg-white shadow-[0_12px_35px_rgba(61,38,20,0.05)] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="px-8 py-12 sm:px-12 lg:px-16">
            <h2 className="font-primary text-3xl font-black text-primary md:text-4xl">
              Contact Details
            </h2>

            <div className="mt-10 space-y-8">
              {contactDetails.map((detail) => (
                <div key={detail.title} className="flex gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[8px] bg-[#f4f1ec] text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.7}
                    >
                      {detail.icon}
                    </svg>
                  </div>

                  <div className="pt-1">
                    <h3 className="font-primary text-xl font-bold leading-none text-[#2f2520]">
                      {detail.title}
                    </h3>

                    <div className="mt-2 font-secondary text-sm leading-5 text-[#7d746c]">
                      {detail.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14">
              <p className="font-secondary text-xs font-bold uppercase tracking-[0.18em] text-[#5d5148]">
                Follow the Journey
              </p>

              <div className="mt-4 flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-[#ead8d0] text-[#2f2520] transition duration-300 hover:border-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      {link.icon}
                    </svg>
                  </a>
                ))}
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
                  <span className="font-primary text-xs font-bold uppercase tracking-[0.22em] text-[#7c6d63]">
                    Full Name
                  </span>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your Name"
                    autoComplete="name"
                    className="mt-2 h-12 w-full border border-[#e7d1c8] bg-transparent px-4 font-secondary text-sm text-[#2f2520] outline-none transition placeholder:text-[#9c9188] focus:border-primary"
                  />
                </label>

                <label className="block">
                  <span className="font-primary text-xs font-bold uppercase tracking-[0.22em] text-[#7c6d63]">
                    Email Address
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    autoComplete="email"
                    className="mt-2 h-12 w-full border border-[#e7d1c8] bg-transparent px-4 font-secondary text-sm text-[#2f2520] outline-none transition placeholder:text-[#9c9188] focus:border-primary"
                  />
                </label>
              </div>

              <label className="block">
                <span className="font-primary text-xs font-bold uppercase tracking-[0.22em] text-[#7c6d63]">
                  Phone Number
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+94 XX XXX XXXX"
                  autoComplete="tel"
                  className="mt-2 h-12 w-full border border-[#e7d1c8] bg-transparent px-4 font-secondary text-sm text-[#2f2520] outline-none transition placeholder:text-[#9c9188] focus:border-primary"
                />
              </label>

              <label className="block">
                <span className="font-primary text-xs font-bold uppercase tracking-[0.22em] text-[#7c6d63]">
                  Message
                </span>
                <textarea
                  name="message"
                  placeholder="How can we assist you today?"
                  rows={5}
                  className="mt-2 w-full resize-none border border-[#e7d1c8] bg-transparent px-4 py-3 font-secondary text-sm text-[#2f2520] outline-none transition placeholder:text-[#9c9188] focus:border-primary"
                />
              </label>

              <button
                type="submit"
                className="group inline-flex h-12 items-center justify-center rounded-[6px] bg-[#8b1717] px-10 font-secondary text-xs font-bold uppercase tracking-[0.25em] text-white transition duration-300 hover:bg-[#6f1111]"
              >
                Send Inquiry
                <span className="ml-3 transition duration-300 group-hover:translate-x-1">
                  -&gt;
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* VILLA LOCATION SECTION */}
      <section className="bg-[#f1eee9] px-6 py-20 md:px-10 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
          <div>
            <div className="mb-5 flex h-9 w-9 items-center justify-center text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z"
                />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>

            <h2 className="font-primary text-3xl font-black text-primary md:text-4xl">
              The Villa Location
            </h2>

            <address className="mt-6 not-italic font-secondary text-sm leading-7 text-[#675d55]">
              {villaAddressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>

            <a
              href={villaDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex border-b border-primary pb-1 font-secondary text-xs uppercase tracking-[0.08em] text-primary transition duration-300 hover:text-[#6f1111]"
            >
              Get Directions
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
      <section className="bg-white px-6 py-20 md:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-secondary text-[10px] font-bold uppercase tracking-[0.32em] text-[#a87d2d]">
              Travel Guide
            </p>

            <h2 className="mt-2 font-primary text-4xl font-black leading-tight text-primary md:text-5xl">
              Getting to Premo Heritage Villa
            </h2>

            <p className="mx-auto mt-4 max-w-2xl font-secondary text-sm leading-7 text-[#675d55]">
              Explore the most convenient ways to reach us and begin your
              journey with ease. Whether by rail, road, or private chauffeur,
              the path to heritage is seamless.
            </p>

            <div className="mx-auto mt-5 h-px w-24 bg-[#a87d2d]" />
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border border-[#ebe4dc] bg-[#ebe4dc] md:grid-cols-2 lg:grid-cols-4">
            {travelOptions.map((option) => (
              <article
                key={option.title}
                className="bg-[#f7f4ee] px-8 py-10 transition duration-300 hover:bg-white"
              >
                <div className="mb-8 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.2}
                  >
                    {option.icon}
                  </svg>
                </div>

                <h3 className="font-primary text-xl font-bold leading-tight text-[#2f2520]">
                  {option.title}
                </h3>

                <p className="mt-4 min-h-[132px] font-secondary text-sm leading-6 text-[#675d55]">
                  {option.description}
                </p>

                <a
                  href={option.href}
                  target={option.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    option.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group mt-7 inline-flex flex-col items-start font-secondary text-[11px] font-bold uppercase tracking-[0.16em] text-[#9b7426] transition duration-300 hover:text-primary"
                >
                  <span className="inline-flex items-center">
                    {option.linkText}
                    <span className="ml-2 text-sm leading-none">-&gt;</span>
                  </span>
                  <span className="mt-1 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
                </a>
              </article>
            ))}
          </div>

          <div className="mt-16 flex flex-col gap-6 bg-[#f7f4ee] px-8 py-8 sm:flex-row sm:items-center sm:justify-between md:px-10">
            <div className="flex items-center gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-[#f0d8cf] text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.7}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l2.5 2.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div>
                <p className="font-secondary text-[10px] font-bold uppercase tracking-[0.22em] text-[#a87d2d]">
                  Estimated Journey
                </p>
                <p className="mt-1 font-primary text-xl text-[#2f2520]">
                  Travel time from Colombo: approximately 2-2.5 hours.
                </p>
              </div>
            </div>

            <a
              href="/booking"
              className="inline-flex h-12 items-center justify-center rounded-[2px] bg-[#8b1717] px-8 font-secondary text-xs font-bold uppercase tracking-[0.22em] text-white transition duration-300 hover:bg-[#6f1111]"
            >
              Arrange Your Transfer
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
