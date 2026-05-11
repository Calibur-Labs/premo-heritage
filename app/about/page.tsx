import Image from "next/image";

const faqItems = [
  {
    question: "What makes Premo Heritage Villa different from other luxury stays?",
    answer:
      "The villa is designed as a quiet heritage retreat. Guests stay close to nature while still experiencing refined hospitality, curated interiors, and a slower, more intentional rhythm of travel.",
  },
  {
    question: "Is the villa suitable for family stays and small private groups?",
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
    question: "Is the property focused on relaxation or exploration?",
    answer:
      "Both. Some guests come to fully switch off, while others use the villa as a base for discovering nearby scenery, culture, and slower local experiences.",
  },
];

const galleryImages = [
  {
    src: "/container1.png",
    alt: "Tropical villa exterior and infinity pool",
    className: "min-h-[180px] sm:min-h-[220px]",
  },
  {
    src: "/container2.png",
    alt: "Traditional heritage hospitality experience",
    className: "min-h-[180px] sm:min-h-[220px]",
  },
  {
    src: "/container3.png",
    alt: "Villa view framed by warm evening light",
    className: "min-h-[140px] sm:min-h-[170px]",
  },
  {
    src: "/container4.png",
    alt: "Warm balcony hospitality setting",
    className: "min-h-[180px] sm:min-h-[220px]",
  },
];

export default function About() {
  return (
    <main className="bg-[#fbf6ee] text-[#433227]">
      <section className="relative min-h-[88vh] overflow-hidden">
        <Image
          src="/aboutHome.png"
          alt="Premo Heritage Villa overlooking a lush tropical landscape"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-[#1c1207]/55" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-end px-6 pb-16 pt-32 sm:px-8 md:pb-24 lg:px-12">
          <div className="max-w-3xl">
            <p className="font-secondary text-xs uppercase tracking-[0.45em] text-[#dbc59a]">
              Premo Heritage Villa
            </p>
            <h1 className="mt-4 max-w-2xl font-primary text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl">
              A sanctuary shaped by landscape, legacy, and quiet luxury.
            </h1>
            <p className="mt-6 max-w-xl font-secondary text-sm leading-7 text-white/80 sm:text-base">
              Our story is rooted in Sri Lankan warmth, slow living, and a
              hospitality experience designed to feel intimate rather than
              performative.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-18 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-[360px]">
            <div className="absolute -left-5 -top-5 h-16 w-16 rounded-full border border-[#b99863]/60" />
            <div className="rounded-[28px] bg-[#111111] p-3 shadow-[0_24px_60px_rgba(43,24,13,0.16)]">
              <div className="overflow-hidden rounded-[22px]">
                <Image
                  src="/founder.png"
                  alt="Premo Heritage portrait-inspired visual"
                  width={720}
                  height={900}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
            </div>
          </div>

          <div className="max-w-2xl">
            <div className="mb-4 h-px w-16 bg-[#b99863]" />
            <p className="font-secondary text-xs uppercase tracking-[0.4em] text-[#9e7a49]">
              Our Story
            </p>
            <h2 className="mt-3 font-primary text-4xl leading-tight text-[#8b1a1a] sm:text-5xl">
              A Legacy Built Across Continents
            </h2>
            <p className="mt-5 font-secondary text-sm leading-7 text-[#6a5648] sm:text-base">
              Premo Heritage Villa was conceived as more than a place to stay.
              It was imagined as a home where architecture, atmosphere, and
              service would carry the depth of a personal story. Every space is
              designed to feel collected over time rather than assembled for a
              trend.
            </p>
            <p className="mt-4 font-secondary text-sm leading-7 text-[#6a5648] sm:text-base">
              The result is a retreat that balances elegance with warmth:
              generous views, tactile materials, and a sense of calm that lets
              guests settle in immediately. It is hospitality shaped by memory,
              place, and care.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-18 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="order-2 max-w-2xl lg:order-1">
            <div className="mb-4 h-px w-16 bg-[#b99863]" />
            <p className="font-secondary text-xs uppercase tracking-[0.4em] text-[#9e7a49]">
              Heritage & Hospitality
            </p>
            <h2 className="mt-3 font-primary text-4xl leading-tight text-[#8b1a1a] sm:text-5xl">
              A Legacy of Culture and Hospitality
            </h2>
            <p className="mt-5 font-secondary text-sm leading-7 text-[#6a5648] sm:text-base">
              The villa’s atmosphere is intentionally layered. Natural textures,
              open-air living, and quiet moments of ritual are all part of the
              experience. Guests are invited to slow down, notice the setting,
              and connect with a more grounded version of luxury.
            </p>
            <p className="mt-4 font-secondary text-sm leading-7 text-[#6a5648] sm:text-base">
              From sunrise views over the landscape to evenings shaped by warm
              light and conversation, every detail is meant to feel gracious,
              personal, and enduring.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {galleryImages.map((image, index) => (
                <div
                  key={`${image.alt}-${index}`}
                  className={`${image.className} overflow-hidden rounded-[14px] shadow-[0_18px_40px_rgba(61,38,20,0.14)]`}
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

      <section className="border-t border-[#e9dcc8] bg-[#fffdf9]">
        <div className="mx-auto max-w-5xl px-6 py-18 sm:px-8 lg:px-12">
          <div className="text-center">
            <div className="mx-auto mb-4 h-px w-16 bg-[#b99863]" />
            <p className="font-secondary text-xs uppercase tracking-[0.4em] text-[#9e7a49]">
              Helpful Information
            </p>
            <h2 className="mt-3 font-primary text-4xl text-[#8b1a1a] sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-secondary text-sm leading-7 text-[#7a6758] sm:text-base">
              A few common questions about the villa, the experience, and what
              to expect during your stay.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[22px] border border-[#eadfce] bg-white px-6 py-5 shadow-[0_10px_25px_rgba(67,50,39,0.05)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-secondary text-sm font-bold text-[#433227] sm:text-base">
                  <span>{item.question}</span>
                  <span className="font-primary text-2xl leading-none text-[#8b1a1a] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pt-4 font-secondary text-sm leading-7 text-[#6d5a4d] sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-[#8b1a1a] px-6 py-3 font-secondary text-xs font-bold uppercase tracking-[0.28em] text-white transition hover:bg-[#6f1414]"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
