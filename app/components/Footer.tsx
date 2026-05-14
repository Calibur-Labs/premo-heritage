import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const socialLinks = [
  { label: "Facebook", href: "#", icon: <FacebookIcon /> },
  // { label: "X", href: "#", icon: <XIcon /> },
  // { label: "Instagram", href: "#", icon: <InstagramIcon /> },
  // { label: "YouTube", href: "#", icon: <YouTubeIcon /> },
  // { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
];

const policyLinks = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export default function Footer() {
  return (
    <>
      <footer className="relative overflow-hidden bg-[#fbf6f0] text-[#5d4637]">
        {/* Soft warm radial glow at top */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,189,154,0.22),transparent_44%)]" />

        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/footer.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-bottom opacity-50"
          />
        </div>

        {/* Bottom warm gradient */}
        <div className="absolute inset-x-0 bottom-0 h-[220px] bg-[linear-gradient(180deg,rgba(191,125,93,0)_0%,rgba(191,125,93,0.12)_100%)]" />

        {/* MAIN — matches header's max-w-7xl container */}
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-0">
          <div className="grid gap-x-16 gap-y-12 pb-6 md:grid-cols-2 xl:grid-cols-[1.35fr_1fr_1.05fr_0.9fr]">
            {/* COLUMN 1 — Logo + Tagline */}
            <div className="max-w-sm">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/coloredLogo.png"
                  alt="Premo Heritage Villa"
                  width={120}
                  height={120}
                  className="h-auto w-[86px] object-contain"
                />
              </Link>

              <p className="mt-8 max-w-[300px] font-secondary text-[15px] leading-8 text-[#6f5a4b]">
                A timeless retreat blending colonial heritage with the warmth of
                Sri Lankan hospitality.
              </p>
            </div>

            {/* COLUMN 2 — Address */}
            <div>
              <h3 className="font-primary text-base font-bold uppercase tracking-widest text-[#66503e]">
                Premo Heritage Villa
              </h3>
              <address className="mt-6 space-y-2 font-secondary text-[15px] not-italic leading-8 text-[#6f5a4b]">
                <p>Premo Heritage Villa,</p>
                <p>46/26, Navam Mawatha,</p>
                <p>Galle 02, 02000,</p>
                <p>Sri Lanka</p>
              </address>
            </div>

            {/* COLUMN 3 — Call Centre */}
            <div>
              <h3 className="font-primary text-base font-bold uppercase tracking-widest text-[#66503e]">
                Call Centre
              </h3>
              <div className="mt-6 space-y-2 font-secondary text-[14px] leading-8 text-[#6f5a4b]">
                <p>
                  <span className="text-[#8b1a1a]">WhatsApp</span> : +94 11 470 9400
                </p>
                <p className="break-all">
                  <span className="text-[#8b1a1a]">Email</span> : reservations@premovilla.com
                </p>
              </div>
            </div>

            {/* COLUMN 4 — Social + Quick Links */}
            <div>
              <h3 className="font-primary text-base font-bold uppercase tracking-widest text-[#66503e]">
                Find Us On
              </h3>

              <div className="mt-6 flex items-center gap-2.5">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#8b1a1a]/25 bg-white/60 text-[#8b1a1a] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8b1a1a] hover:bg-[#8b1a1a] hover:text-white hover:shadow-[0_8px_20px_rgba(139,26,26,0.25)]"
                  >
                    <span className="h-4 w-4">{link.icon}</span>
                  </a>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="font-primary text-base font-bold uppercase tracking-widest text-[#66503e]">
                  Quick Links
                </h3>
                <div className="mt-6 space-y-3">
                  {policyLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="group flex items-center gap-2 font-secondary text-[15px] uppercase tracking-[0.08em] text-[#6f5a4b] transition hover:text-[#8b1a1a]"
                    >
                      <span className="inline-block h-px w-3 bg-current transition-all duration-300 group-hover:w-5" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Decorative divider */}
          <div className="mt-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8b1a1a]/30 to-transparent" />
            <span className="font-primary text-[10px] uppercase tracking-[0.4em] text-[#8b1a1a]/60">
              Premo
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#8b1a1a]/30 to-transparent" />
          </div>
        </div>
      </footer>

      {/* BOTTOM BAR — matches header's max-w-7xl */}
      <div className="bg-[#8b1a1a] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 font-secondary text-xs sm:flex-row sm:items-center sm:justify-between lg:px-0">
          <p className="tracking-wide">
            All Copyrights Reserved © {new Date().getFullYear()} PREMO
          </p>
          <p className="tracking-wide">
            Concept &amp; Design by{" "}
            <span className="font-bold">XYZ Solutions</span>
          </p>
        </div>
      </div>
    </>
  );
}

function SocialIcon({
  children,
  viewBox = "0 0 24 24",
}: {
  children: ReactNode;
  viewBox?: string;
}) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function FacebookIcon() {
  return (
    <SocialIcon>
      <path
        d="M14.5 7.2H16V4.4c-.7-.1-1.6-.2-2.7-.2-2.7 0-4.5 1.7-4.5 4.8v2.3H6v3.1h2.8V20h3.4v-5.6h2.8l.4-3.1h-3.2V9.3c0-1 .3-2.1 2.3-2.1Z"
        fill="currentColor"
      />
    </SocialIcon>
  );
}

// function XIcon() {
//   return (
//     <SocialIcon>
//       <path
//         d="M18.9 5h-2.6l-3.8 4.4L9.4 5H4l5.8 8.1L4.3 19h2.6l4.1-4.8 3.4 4.8h5.4l-6-8.4L18.9 5Zm-3.5 12.2-7-10h1.6l7 10h-1.6Z"
//         fill="currentColor"
//       />
//     </SocialIcon>
//   );
// }

// function InstagramIcon() {
//   return (
//     <SocialIcon>
//       <rect
//         x="5"
//         y="5"
//         width="14"
//         height="14"
//         rx="4"
//         stroke="currentColor"
//         strokeWidth="1.8"
//       />
//       <circle cx="12" cy="12" r="3.3" stroke="currentColor" strokeWidth="1.8" />
//       <circle cx="16.8" cy="7.4" r="1" fill="currentColor" />
//     </SocialIcon>
//   );
// }

// function YouTubeIcon() {
//   return (
//     <SocialIcon>
//       <path
//         d="M19.8 8.2a2.8 2.8 0 0 0-2-2C16 5.7 12 5.7 12 5.7s-4 0-5.8.5a2.8 2.8 0 0 0-2 2c-.5 1.8-.5 3.8-.5 3.8s0 2 .5 3.8a2.8 2.8 0 0 0 2 2c1.8.5 5.8.5 5.8.5s4 0 5.8-.5a2.8 2.8 0 0 0 2-2c.5-1.8.5-3.8.5-3.8s0-2-.5-3.8ZM10.4 15.1V8.9l5 3.1-5 3.1Z"
//         fill="currentColor"
//       />
//     </SocialIcon>
//   );
// }

// function LinkedInIcon() {
//   return (
//     <SocialIcon>
//       <path
//         d="M6.7 8.6a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM5.2 10h3V19h-3v-9Zm4.8 0h2.9v1.2h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2.1 3.7 4.8V19h-3v-4c0-1 0-2.4-1.5-2.4S13.7 13.7 13.7 15V19h-3v-9Z"
//         fill="currentColor"
//       />
//     </SocialIcon>
//   );
// }