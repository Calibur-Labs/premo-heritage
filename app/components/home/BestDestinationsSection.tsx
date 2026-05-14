"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

type Destination = {
  category: string;
  title: string;
  location: string;
  image: string;
};

type SlotStyle = {
  x: number;
  scale: number;
  rotate: number;
  zIndex: number;
  opacity: number;
};

const slugify = (str: string) =>
  str.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

const destinations: Destination[] = [
  {
    category: "BEACH",
    title: "Mirissa Beach",
    location: "Southern Province",
    image: "/mirissa.png",
  },
  {
    category: "BEACH",
    title: "Unawatuna Beach",
    location: "Galle District",
    image: "/unawatuna.png",
  },
  {
    category: "BEACH",
    title: "Thalpe Beach",
    location: "Galle District",
    image: "/thalpe.png",
  },
  {
    category: "HIDDEN BEACH",
    title: "Jungle Beach",
    location: "Unawatuna",
    image: "/junglebeach.png",
  },
  {
    category: "CULTURAL",
    title: "Galle Fort",
    location: "Galle District",
    image: "/gallefort.png",
  },
  {
    category: "TEMPLE",
    title: "Japanese Peace Pagoda",
    location: "Unawatuna",
    image: "/pagoda.png",
  },
  {
    category: "NATURE",
    title: "Sinharaja Forest Reserve",
    location: "Sabaragamuwa",
    image: "/sinharaja.png",
  },
  {
    category: "RAINFOREST",
    title: "Kanneliya Forest Reserve",
    location: "Galle District",
    image: "/kanneliya.png",
  },
  {
    category: "SCENIC",
    title: "Rumassala",
    location: "Galle District",
    image: "/rumassala.png",
  },
  {
    category: "RIVER SAFARI",
    title: "Madu Ganga",
    location: "Balapitiya",
    image: "/maduganga.png",
  },
  {
    category: "WILDLIFE",
    title: "Sea Turtle Hatchery",
    location: "Habaraduwa",
    image: "/turtlehatchery.png",
  },
  {
    category: "SAFARI",
    title: "Yala National Park",
    location: "Southern Province",
    image: "/yala.png",
  },
];

const SLOT_STYLES: SlotStyle[] = [
  { x: -440, scale: 0.7, rotate: 0, zIndex: 1, opacity: 0.85 }, // far left
  { x: -230, scale: 0.85, rotate: 0, zIndex: 2, opacity: 1 }, // mid left
  { x: 0, scale: 1.05, rotate: 0, zIndex: 5, opacity: 1 }, // center (big)
  { x: 230, scale: 0.85, rotate: 0, zIndex: 2, opacity: 1 }, // mid right
  { x: 440, scale: 0.7, rotate: 0, zIndex: 1, opacity: 0.85 }, // far right
];

const VISIBLE_SLOTS = SLOT_STYLES.length; 

export default function BestDestinationsSection() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [viewportWidth, setViewportWidth] = useState<number>(1200);

  // Track viewport so we can scale spacing on small screens
  useEffect(() => {
    const update = () => setViewportWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Auto-rotate — restarts cleanly whenever activeIndex changes (manual click
  // or auto tick), so manual navigation doesn't cause an immediate jump.
  useEffect(() => {
    if (isPaused) return;
    const id = setTimeout(() => {
      setActiveIndex((i) => (i + 1) % destinations.length);
    }, 3500);
    return () => clearTimeout(id);
  }, [isPaused, activeIndex]);

  // Figure out which slot (0..4) a card sits in given the current active index.
  // Cards not in a visible slot return -1 (off-stage).
  const getSlotForCard = useCallback(
    (cardIndex: number): number => {
      const half = Math.floor(VISIBLE_SLOTS / 2); // 2
      const total = destinations.length;
      let diff = (cardIndex - activeIndex + total) % total;
      if (diff > total / 2) diff -= total;
      if (diff >= -half && diff <= half) {
        return diff + half; // slot 0..4
      }
      return -1; // hidden (off-stage)
    },
    [activeIndex]
  );

  // Responsive scaling factor for the slot offsets
  const spacingScale =
    viewportWidth < 480
      ? 0.42
      : viewportWidth < 768
      ? 0.55
      : viewportWidth < 1280
      ? 0.78
      : 1;

  const goTo = (i: number) =>
    setActiveIndex((i + destinations.length) % destinations.length);

  return (
    <section
      className="best-destinations-wrapper overflow-hidden bg-white py-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2
          className="font-primary text-5xl font-black text-primary md:text-6xl" >
          Nearby Destinations
        </h2>

<p className="mx-auto mt-3 max-w-2xl font-primary text-xl font-medium leading-8 text-gray-800">
  Explore breathtaking beaches, cultural landmarks, rainforests, and unforgettable experiences located near Premo Heritage Villa.
</p>
      </motion.div>

      {/* Stage */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
        className="best-dest-stage"
      >
        <div className="best-dest-track">
          {destinations.map((dest, index) => {
            const slot = getSlotForCard(index);
            const isVisible = slot !== -1;
            const isCenter = slot === 2;

            // Off-stage cards: park them where they'll come back in from
            // to keep the rotation feeling circular.
            const offstageX =
              (index - activeIndex + destinations.length) % destinations.length >
              destinations.length / 2
                ? -640
                : 640;

            // Narrow with a local const so TS knows it's non-null inside the branch
            let target: {
              x: number;
              scale: number;
              rotate: number;
              opacity: number;
            };
            let zIndex: number;

            if (isVisible) {
              const style: SlotStyle = SLOT_STYLES[slot];
              target = {
                x: style.x * spacingScale,
                scale: style.scale,
                rotate: style.rotate,
                opacity: style.opacity,
              };
              zIndex = style.zIndex;
            } else {
              target = {
                x: offstageX * spacingScale,
                scale: 0.55,
                rotate: 0,
                opacity: 0,
              };
              zIndex = 0;
            }

            return (
              <motion.div
                key={index}
                className="best-dest-slot"
                style={{ zIndex }}
                animate={target}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className={`best-dest-card ${isCenter ? "is-center" : ""}`}
                  onClick={() => {
                    if (isCenter) {
                      router.push(`/destinations#${slugify(dest.title)}`);
                    } else {
                      goTo(index);
                    }
                  }}
                >
                  <div className="best-dest-img-wrap">
                    <Image
                      src={dest.image}
                      alt={dest.title}
                      fill
                      sizes="(max-width: 768px) 60vw, 22vw"
                      className="best-dest-img"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div className="best-dest-overlay" />

                  {isCenter && (
                    <div className="best-dest-badge-wrap">
                      <span className="best-dest-badge">{dest.category}</span>
                    </div>
                  )}

                  <div className="best-dest-content">
                    <div className="best-dest-location">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
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
                      <span>{dest.location}</span>
                    </div>
                    <h3 className="best-dest-title">{dest.title}</h3>
                    <p className="best-dest-sub">COLONIAL HERITAGE</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="best-dest-dots">
          {destinations.map((_, i: number) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`best-dest-dot ${i === activeIndex ? "active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </motion.div>

      <style jsx global>{`
        .best-destinations-wrapper {
          overflow: hidden !important;
        }

        /* ── Stage ── */
        .best-dest-stage {
          position: relative;
          padding: 30px 0 60px;
        }

        .best-dest-track {
          position: relative;
          height: 480px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Each card slot sits on top of center, animated by Framer Motion ── */
        .best-dest-slot {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 280px;
          height: 420px;
          margin-left: -140px;
          margin-top: -210px;
          will-change: transform, opacity;
        }

        /* ── Card ── */
        .best-dest-card {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 22px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          transition: box-shadow 0.4s ease;
        }

        .best-dest-card.is-center {
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.32);
        }

        .best-dest-img-wrap {
          position: absolute;
          inset: 0;
        }

        .best-dest-img {
          transition: transform 0.7s ease;
        }

        .best-dest-card:hover .best-dest-img {
          transform: scale(1.05);
        }

        /* ── Gradient ── */
        .best-dest-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.85) 0%,
            rgba(0, 0, 0, 0.25) 50%,
            transparent 100%
          );
          border-radius: 22px;
        }

        /* ── Badge (center card only) ── */
        .best-dest-badge-wrap {
          position: absolute;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
        }

        .best-dest-badge {
          display: inline-block;
          background: rgba(110, 40, 40, 0.9);
          backdrop-filter: blur(6px);
          color: #fff;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 5px 16px;
          border-radius: 999px;
          font-family: sans-serif;
          white-space: nowrap;
        }

        /* ── Bottom text ── */
        .best-dest-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px 20px 24px;
          z-index: 5;
        }

        .best-dest-location {
          display: flex;
          align-items: center;
          gap: 5px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 11px;
          font-family: sans-serif;
          margin-bottom: 6px;
        }

        .best-dest-location svg {
          flex-shrink: 0;
          color: rgba(255, 255, 255, 0.7);
        }

        .best-dest-title {
          font-family: Georgia, serif;
          font-size: 24px;
          font-weight: 900;
          color: #fff;
          line-height: 1.2;
          margin: 0 0 4px;
        }

        .best-dest-sub {
          font-family: sans-serif;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.55);
          margin: 0;
        }

        /* ── Dots ── */
        .best-dest-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 24px;
        }

        .best-dest-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #c9a96e;
          opacity: 0.4;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .best-dest-dot.active {
          background: #9c7a32;
          opacity: 1;
          width: 24px;
        }

        /* ── Responsive heights ── */
        @media (max-width: 1280px) {
          .best-dest-track {
            height: 440px;
          }
          .best-dest-slot {
            width: 240px;
            height: 380px;
            margin-left: -120px;
            margin-top: -190px;
          }
        }

        @media (max-width: 768px) {
          .best-dest-track {
            height: 400px;
          }
          .best-dest-slot {
            width: 220px;
            height: 340px;
            margin-left: -110px;
            margin-top: -170px;
          }
          .best-dest-title {
            font-size: 20px;
          }
        }

        @media (max-width: 480px) {
          .best-dest-track {
            height: 360px;
          }
          .best-dest-slot {
            width: 190px;
            height: 300px;
            margin-left: -95px;
            margin-top: -150px;
          }
          .best-dest-title {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
}