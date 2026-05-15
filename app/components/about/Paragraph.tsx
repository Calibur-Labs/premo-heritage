"use client";

export default function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-5 font-secondary text-[18px] leading-relaxed text-gray-600 sm:text-base">
      {children}
    </p>
  );
}