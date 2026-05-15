"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import type { Settings } from "react-slick";
import { SyntheticEvent } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

interface Testimonial {
  quote: string;
  name: string;
  location: string;
  avatar: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "An authentic experience like no other. The traditional cooking and warm hospitality made my stay unforgettable. Every detail reflects true Sri Lankan heritage.",
    name: "Sarah Williams",
    location: "United Kingdom",
    avatar: "home/test.png",
    initials: "SW",
  },
  {
    quote:
      "The villa is a masterpiece of colonial architecture. We loved the open courtyards, hand-carved details, and the connection to nature. A true sanctuary.",
    name: "Michael Chen",
    location: "Singapore",
    avatar: "home/test.png",
    initials: "MC",
  },
  {
    quote:
      "From the wood-fired meals to the Ayurvedic wellness sessions, every moment was magical. This is heritage tourism at its finest. We'll definitely return.",
    name: "Isabella Martinez",
    location: "Spain",
    avatar: "home/test.png",
    initials: "IM",
  },
  {
    quote:
      "An authentic experience like no other. The traditional cooking and warm hospitality made my stay unforgettable. Every detail reflects true Sri Lankan heritage.",
    name: "Sarah Williams",
    location: "United Kingdom",
    avatar: "home/test.png",
    initials: "SW",
  },
  {
    quote:
      "The villa is a masterpiece of colonial architecture. We loved the open courtyards, hand-carved details, and the connection to nature. A true sanctuary.",
    name: "Michael Chen",
    location: "Singapore",
    avatar: "home/test.png",
    initials: "MC",
  },
  {
    quote:
      "From the wood-fired meals to the Ayurvedic wellness sessions, every moment was magical. This is heritage tourism at its finest. We'll definitely return.",
    name: "Isabella Martinez",
    location: "Spain",
    avatar: "home/test.png",
    initials: "IM",
  },
];

const sliderSettings: Settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 600,
  cssEase: "ease-in-out",
  arrows: false,
  pauseOnHover: false,
  swipe: false,
  draggable: false,
  rtl: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

interface AvatarProps {
  avatar: string;
  name: string;
  initials: string;
}

function Avatar({ avatar, name, initials }: AvatarProps) {
  const handleImageError = (
    e: SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.currentTarget;

    target.style.display = "none";

    if (target.parentElement) {
      target.parentElement.innerHTML = `
        <span class="text-[#8B1A1A] text-lg font-semibold">
          ${initials}
        </span>
      `;
    }
  };

  return (
    <div className="flex justify-center mt-2 mb-6">
      <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-[3px] border-[#C9A84C] bg-[#e8ddd0]">

        <img
          src={avatar}
          alt={name}
          className="h-full w-full object-cover"
          onError={handleImageError}
        />
      </div>
    </div>
  );
}

export default function GuestStoriesSection() {
  return (
    <section className="bg-[#FAF6EF] px-10 py-20 md:px-20">
      <div className="mb-8 text-center">
        <h2 className="font-primary text-5xl font-black text-primary md:text-6xl">
          Guest Stories
        </h2>

        <p className="mx-auto mt-3 max-w-2xl font-secondary text-[18px] font-medium leading-7 text-gray-800">
          Discover heartfelt experiences shared by guests who embraced the
          warmth, heritage, and timeless charm of Premo Heritage Villa.
        </p>
      </div>

      <div className="mx-auto max-w-6xl pb-16">
        <Slider {...sliderSettings}>

          {testimonials.map((testimonial, index) => (
            <div key={`${testimonial.name}-${index}`} className="px-3">

              <div className="relative flex h-full flex-col rounded-2xl border border-[#ede8df] bg-white p-8 shadow-sm">

                {/* Quote Icon */}
                <div className="absolute left-6 top-6">
                  <Image
                    src="/home/quote.png"
                    alt="Quote icon"
                    width={40}
                    height={40}
                    className="opacity-20"
                  />
                </div>

                {/* Avatar */}
                <Avatar
                  avatar={testimonial.avatar}
                  name={testimonial.name}
                  initials={testimonial.initials}
                />

                {/* Quote */}
                <p className="mb-8 flex-1 text-left font-primary text-[17px] font-semibold italic leading-7 text-gray-800">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Footer */}
                <div className="mt-auto text-center">

                  <p className="text-sm font-semibold leading-tight text-gray-800">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-xs text-[#C9A84C]">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx global>{`
        .slick-dots {
          bottom: -3rem;
        }

        .slick-dots li button:before {
          color: #c9a84c;
          font-size: 10px;
          opacity: 0.4;
        }

        .slick-dots li.slick-active button:before {
          color: #8b1a1a;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}