"use client";

import { MapPin, ArrowRight } from "lucide-react";

const villaAddressLines = [
  "Henagedara,",
  "Heenatigala, Talpe 80615,",
  "Sri Lanka",
];

const villaMapEmbedUrl =
  "https://maps.google.com/maps?q=Henagedara,Heenatigala,276H%2BM65,Talpe+80615&ll=5.9908,80.2747&z=12&output=embed";

const villaDirectionsUrl = "https://maps.app.goo.gl/CvsWjBJspztTKFcv7";

export default function VillaLocationSection() {
  return (
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
            className="mt-8 inline-flex items-center gap-2 border-b border-primary pb-1 font-secondary font-semibold text-[16px] uppercase tracking-[0.08em] text-primary transition duration-300 hover:text-[#6f1111]"
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
  );
}
