import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const socialLinks = [
  { label: "Facebook", href: "#", icon: <FacebookIcon /> },
  { label: "X", href: "#", icon: <XIcon /> },
  { label: "Instagram", href: "#", icon: <InstagramIcon /> },
  { label: "YouTube", href: "#", icon: <YouTubeIcon /> },
  { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
];

const policyLinks = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Sitemap", href: "#" },
];

export default function Footer() {
  return (
    <>
      <footer className="relative overflow-hidden bg-[#fbf6f0] text-[#5d4637]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,189,154,0.22),transparent_44%)]" />
        <div className="absolute inset-0">
          <Image
            src="/footer.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-bottom opacity-50"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[220px] bg-[linear-gradient(180deg,rgba(191,125,93,0)_0%,rgba(191,125,93,0.12)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-8 pb-14 pt-12 lg:px-14">
          <div className="grid gap-x-12 gap-y-10 pb-4 md:grid-cols-2 xl:grid-cols-[1.35fr_1fr_1.05fr_0.9fr]">
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

              <div className="mt-10">
                <p className="font-secondary text-[11px] uppercase tracking-[0.22em] text-[#795c45]">
                  Subscribe To Latest Offers
                </p>
                <form className="mt-3 flex max-w-[245px] overflow-hidden rounded-full border border-[#dcc8b3] bg-white">
                  <input
                    type="email"
                    aria-label="Email address"
                    className="min-w-0 flex-1 bg-transparent px-4 py-[9px] font-secondary text-sm text-[#5d4637] outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#8b1a1a] px-5 font-secondary text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#6f1414]"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            <div>
              <h3 className="font-secondary text-[11px] font-bold uppercase tracking-[0.14em] text-[#66503e]">
                Premo Heritage Villa
              </h3>
              <div className="mt-4 space-y-2 font-secondary text-[13px] leading-7 text-[#6f5a4b]">
                <p>Premo Heritage Villa,</p>
                <p>46/26, Navam Mawatha,</p>
                <p>Galle 02, 02000,</p>
                <p>Sri Lanka</p>
              </div>
            </div>

            <div>
              <h3 className="font-secondary text-[11px] font-bold uppercase tracking-[0.14em] text-[#66503e]">
                Call Centre
              </h3>
              <div className="mt-4 space-y-2 font-secondary text-[13px] leading-7 text-[#6f5a4b]">
                <p>Reservations : +94 11 470 9400</p>
                <p>WhatsApp : +94 11 470 9400</p>
                <p>Mon - Fri : 8.30AM To 5.30PM</p>
                <p>Sat : 9AM To 2PM</p>
                <p>Email : reservations@premovilla.com</p>
                <p>Corporate : +94 11 234 5700</p>
              </div>
            </div>

            <div>
              <h3 className="font-secondary text-[11px] font-bold uppercase tracking-[0.14em] text-[#66503e]">
                Find Us On
              </h3>
              <div className="mt-4 flex items-center gap-3 text-[#8b1a1a]">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="inline-flex h-5 w-5 items-center justify-center transition hover:text-[#5d1010]"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>

              <div className="mt-6 space-y-2">
                {policyLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block font-secondary text-[13px] uppercase tracking-[0.06em] text-[#6f5a4b] transition hover:text-[#8b1a1a]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#8b1a1a] px-8 py-4 text-white lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 font-secondary text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>All Copyrights Reserved © PREMO</p>
          <p>
            Concept &amp; Design by <span className="font-bold">XYZ Solutions</span>
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

function XIcon() {
  return (
    <SocialIcon>
      <path
        d="M18.9 5h-2.6l-3.8 4.4L9.4 5H4l5.8 8.1L4.3 19h2.6l4.1-4.8 3.4 4.8h5.4l-6-8.4L18.9 5Zm-3.5 12.2-7-10h1.6l7 10h-1.6Z"
        fill="currentColor"
      />
    </SocialIcon>
  );
}

function InstagramIcon() {
  return (
    <SocialIcon>
      <rect
        x="5"
        y="5"
        width="14"
        height="14"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3.3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.8" cy="7.4" r="1" fill="currentColor" />
    </SocialIcon>
  );
}

function YouTubeIcon() {
  return (
    <SocialIcon>
      <path
        d="M19.8 8.2a2.8 2.8 0 0 0-2-2C16 5.7 12 5.7 12 5.7s-4 0-5.8.5a2.8 2.8 0 0 0-2 2c-.5 1.8-.5 3.8-.5 3.8s0 2 .5 3.8a2.8 2.8 0 0 0 2 2c1.8.5 5.8.5 5.8.5s4 0 5.8-.5a2.8 2.8 0 0 0 2-2c.5-1.8.5-3.8.5-3.8s0-2-.5-3.8ZM10.4 15.1V8.9l5 3.1-5 3.1Z"
        fill="currentColor"
      />
    </SocialIcon>
  );
}

function LinkedInIcon() {
  return (
    <SocialIcon>
      <path
        d="M6.7 8.6a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM5.2 10h3V19h-3v-9Zm4.8 0h2.9v1.2h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2.1 3.7 4.8V19h-3v-4c0-1 0-2.4-1.5-2.4S13.7 13.7 13.7 15V19h-3v-9Z"
        fill="currentColor"
      />
    </SocialIcon>
  );
}
