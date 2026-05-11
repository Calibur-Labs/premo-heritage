"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function GuestStoriesSection() {
  const testimonials = [
    {
      quote:
        "An authentic experience like no other. The traditional cooking and warm hospitality made my stay unforgettable. Every detail reflects true Sri Lankan heritage.",
      name: "Sarah Williams",
      location: "United Kingdom",
      avatar: "/test.png",
      initials: "SW",
    },
    {
      quote:
        "The villa is a masterpiece of colonial architecture. We loved the open courtyards, hand-carved details, and the connection to nature. A true sanctuary.",
      name: "Michael Chen",
      location: "Singapore",
      avatar: "/test.png",
      initials: "MC",
    },
    {
      quote:
        "From the wood-fired meals to the Ayurvedic wellness sessions, every moment was magical. This is heritage tourism at its finest. We'll definitely return.",
      name: "Isabella Martinez",
      location: "Spain",
      avatar: "/test.png",
      initials: "IM",
    },
    {
      quote:
        "An authentic experience like no other. The traditional cooking and warm hospitality made my stay unforgettable. Every detail reflects true Sri Lankan heritage.",
      name: "Sarah Williams",
      location: "United Kingdom",
      avatar: "/test.png",
      initials: "SW",
    },
    {
      quote:
        "The villa is a masterpiece of colonial architecture. We loved the open courtyards, hand-carved details, and the connection to nature. A true sanctuary.",
      name: "Michael Chen",
      location: "Singapore",
      avatar: "/test.png",
      initials: "MC",
    },
    {
      quote:
        "From the wood-fired meals to the Ayurvedic wellness sessions, every moment was magical. This is heritage tourism at its finest. We'll definitely return.",
      name: "Isabella Martinez",
      location: "Spain",
      avatar: "/test.png",
      initials: "IM",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 7500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#FAF6EF] py-20 px-10 md:px-20">
      {/* Section Heading */}
      <h2 className="text-5xl md:text-6xl font-black font-primary text-primary text-center mb-12">
        Guest Stories
      </h2>

      {/* Slider */}
      <div className="max-w-6xl mx-auto pb-16">
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-3">
              <div className="bg-white rounded-2xl p-8 flex flex-col shadow-sm border border-[#ede8df] relative">
                {/* Quote Icon — top left */}
                <div className="absolute top-6 left-6">
                  <img
                    src="/quote.png"
                    alt="quote"
                    className="w-10 h-10 opacity-20"
                  />
                </div>

                {/* Avatar — centered */}
                <div className="flex justify-center mt-2 mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-[3px] border-[#C9A84C] flex items-center justify-center bg-[#e8ddd0] flex-shrink-0">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = "none";
                        if (target.parentElement) {
                          target.parentElement.innerHTML = `<span class="text-[#8B1A1A] text-lg font-semibold">${t.initials}</span>`;
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-gray-800 font-semibold text-[17px] leading-7 mb-8 flex-1 font-primary italic text-left">
                    &ldquo;{t.quote}&rdquo;
                </p>

                {/* Name & Location — centered */}
                <div className="text-center mt-auto">
                  <p className="text-sm font-semibold text-gray-800 leading-tight">
                    {t.name}
                  </p>
                  <p className="text-xs text-[#C9A84C] mt-1">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Custom dot styles */}
      <style>{`
        .slick-dots li button:before {
          color: #C9A84C;
          font-size: 10px;
          opacity: 0.4;
        }
        .slick-dots li.slick-active button:before {
          color: #8B1A1A;
          opacity: 1;
        }
        .slick-dots {
          bottom: -3rem;
        }
      `}</style>
    </section>
  );
}