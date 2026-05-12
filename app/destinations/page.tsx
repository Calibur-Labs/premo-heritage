import Image from "next/image";

const destinations = [
  {
    category: "BEACH",
    title: "Mirissa Beach",
    description:
      "Experience the majestic dance of blue whales or simply lose yourself in the golden hues of a Mirissa sunset. A coastal sanctuary known for its laid-back atmosphere and crystal-clear waters, perfect for soul-searching and ocean adventures.",
    location: "https://maps.google.com/?q=Mirissa+Beach",
    image: "/yala.png",
  },
  {
    category: "CULTURAL",
    title: "Galle Fort",
    description:
      "A living museum of colonial heritage, winding cobblestone streets, and artisanal treasures. Wander through historic ramparts that have stood for centuries, housing boutique galleries, charming cafes, and a rich tapestry of Sri Lankan history.",
    location: "https://maps.google.com/?q=Galle+Fort",
    image: "/yala.png",
  },
  {
    category: "NATURE",
    title: "Sinharaja Forest",
    description:
      "Step into Sri Lanka’s lush rainforest paradise filled with rare wildlife, cascading streams, and immersive eco experiences surrounded by untouched tropical beauty.",
    location: "https://maps.google.com/?q=Sinharaja+Forest",
    image: "/yala.png",
  },
];

export default function Destinations() {
  return (
    <main className="bg-white">

      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden">

        <Image
          src="/destinations.png"
          alt="Luxury tropical destination at Premo Heritage Villa"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">

          <div className="max-w-4xl">

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

          </div>

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

      {/* DESTINATIONS SECTION */}
      <section className="bg-[#f8f6f2] px-6 py-24 md:px-10">

        <div className="mx-auto max-w-7xl space-y-32">

          {destinations.map((item, index) => (
            <div
              key={item.title}
              className={`grid items-center gap-8 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                width={520}
                height={380}
                className="rounded-[10px] object-cover shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition duration-700"
              />

              {/* Content */}
              <div className="max-w-xl">

                <p className="mb-4 font-secondary text-xs uppercase tracking-[0.4em] text-primary">
                  {item.category}
                </p>

                <h2 className="font-primary text-5xl font-black text-primary md:text-6xl">
                  {item.title}
                </h2>
                
                <p className="mt-2 font-secondary leading-8 text-[#5f5a54]">
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

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}