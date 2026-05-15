import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Destinations", href: "/destinations" },
  { label: "Contact", href: "/contact" },
];

const policyLinks = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export default function Footer() {
  return (
    <>
      <footer className="relative overflow-hidden bg-primary text-white">
        {/* Soft warm glow at top */}
        <div className="absolute inset-0 bg-[#8B1A1A]" />

        {/* MAIN — matches header's max-w-7xl container */}
        <div className="relative mx-auto max-w-7xl px-6 pt-20 lg:px-0">
          <div className="grid gap-x-16 gap-y-12 pb-6 md:grid-cols-2 xl:grid-cols-[1.35fr_1fr_1.05fr_0.9fr]">

            {/* COLUMN 1 — Logo + Tagline */}
            <div className="max-w-sm">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/logo.png"
                  alt="Premo Heritage Villa"
                  width={120}
                  height={120}
                  className="h-auto w-[86px] object-contain"
                />
              </Link>
              <h3 className="mt-8 font-primary text-[24px] font-bold text-white">
                Premo Heritage Villa
              </h3>
              <p className=" max-w-[300px] font-secondary text-[16px] leading-8 text-white/70">
                A timeless retreat blending colonial heritage with the warmth of
                Sri Lankan hospitality.
              </p>
            </div>

            {/* COLUMN 2 — Address */}
            <div>
              <h3 className="font-primary text-[24px] font-bold text-white">
                Our Location
              </h3>
              <address className="mt-4 space-y-2 font-secondary text-[16px] not-italic leading-7 text-white/70">
                <p>Premo Heritage Villa,</p>
                <p>Heenatigala,</p>
                <p>Talpe 80615,</p>
                <p>Sri Lanka</p>
              </address>
            </div>

            {/* COLUMN 3 — Call Centre */}
            <div>
              <h3 className="font-primary text-[24px] font-bold text-white">
                Call Centre
              </h3>
              <div className="mt-4 space-y-2 font-secondary text-[16px] leading-7 text-white/70">
                <p>
                  <span className="text-white/90">WhatsApp</span> : +94 11 470 9400
                </p>
                <p className="break-all">
                  <span className="text-white/90">Email</span> : premoheritage@gmail.com
                </p>
              </div>
            </div>

            {/* COLUMN 4 — Quick Links */}
            <div>
              <h3 className="font-primary text-[24px] font-bold text-white">
                Quick Links
              </h3>
              <div className="mt-4 space-y-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-2 font-secondary text-[16px] text-white/70 transition hover:text-white"
                  >
                    <span className="inline-block h-px w-3 bg-current transition-all duration-300 group-hover:w-5" />
                    {link.label}
                  </Link>
                ))}

                {policyLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-2 font-secondary text-[16px] text-white/70 transition hover:text-white"
                  >
                    <span className="inline-block h-px w-3 bg-current transition-all duration-300 group-hover:w-5" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative divider */}
          <div className="mt-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <span className="font-primary text-[10px] uppercase tracking-[0.4em] text-white/60">
              Premo
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/30 to-transparent" />
          </div>
        </div>
      </footer>

      {/* BOTTOM BAR */}
      <div className="bg-primary">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-12 py-5 pb-7 font-poppins text-xs sm:flex-row sm:items-center sm:justify-between lg:px-0">
          <p className="text-[14px] tracking-wide text-white/60">
            All Copyrights Reserved © {new Date().getFullYear()} Premo Heritage Villa
          </p>

          <p className="text-[14px] tracking-wide text-white/60">
            Design &amp; Developed by{" "}
            <a
              href="http://caliburlabz.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer font-semibold text-white/80 transition-colors duration-300 hover:text-white"
            >
              xCaliburLabs Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </>
  );
}