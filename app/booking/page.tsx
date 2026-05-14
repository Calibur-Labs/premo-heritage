"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const today = "2026-05-14";

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 shrink-0 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.7}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 3v3M17 3v3M4.5 9.5h15M6 5.5h12a2 2 0 0 1 2 2v11A2 2 0 0 1 18 20.5H6a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01"
      />
    </svg>
  );
}

function GuestIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 shrink-0 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.7}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.5 19a5 5 0 0 1 10 0"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 11.5a2.25 2.25 0 1 0 0-4.5M15.5 14.5A4.25 4.25 0 0 1 20 18.75"
      />
    </svg>
  );
}

function Stepper({
  label,
  hint,
  value,
  min,
  onChange,
}: {
  label: string;
  hint: string;
  value: number;
  min: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-5 border-b border-[#eee7df] py-4 last:border-b-0">
      <div>
        <p className="font-primary text-lg font-semibold leading-none text-[#241c18]">
          {label}
        </p>
        <p className="mt-1 font-secondary text-xs text-[#766a61]">{hint}</p>
      </div>

      <div className="flex h-10 items-center overflow-hidden rounded-[4px] border border-[#e4d8ce]">
        <button
          type="button"
          aria-label={`Decrease ${label.toLowerCase()}`}
          disabled={value <= min}
          onClick={() => onChange(Math.max(min, value - 1))}
          className="flex h-full w-10 items-center justify-center text-lg text-primary transition hover:bg-[#f7eee9] disabled:cursor-not-allowed disabled:text-[#c7bdb5]"
        >
          -
        </button>
        <span className="flex h-full min-w-10 items-center justify-center border-x border-[#e4d8ce] font-secondary text-sm font-bold text-[#241c18]">
          {value}
        </span>
        <button
          type="button"
          aria-label={`Increase ${label.toLowerCase()}`}
          onClick={() => onChange(value + 1)}
          className="flex h-full w-10 items-center justify-center text-lg text-primary transition hover:bg-[#f7eee9]"
        >
          +
        </button>
      </div>
    </div>
  );
}

const fieldVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function Booking() {
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState("2026-05-18");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [guestsOpen, setGuestsOpen] = useState(false);

  const guestSummary = useMemo(() => {
    const adultLabel = adults === 1 ? "Adult" : "Adults";
    const childLabel = children === 1 ? "Child" : "Children";
    const roomLabel = rooms === 1 ? "Room" : "Rooms";

    return `${adults} ${adultLabel}, ${children} ${childLabel}, ${rooms} ${roomLabel}`;
  }, [adults, children, rooms]);

  function handleCheckIn(value: string) {
    setCheckIn(value);

    if (value && checkOut <= value) {
      const nextDate = new Date(`${value}T00:00:00`);
      nextDate.setDate(nextDate.getDate() + 1);
      setCheckOut(nextDate.toISOString().slice(0, 10));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setGuestsOpen(false);
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/bookingHome.png"
            alt="Premo Heritage Villa beachfront pool and tropical garden"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute inset-0 bg-black/45"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease: "easeOut" }}
          className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/35 to-transparent"
        />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-10 pt-32 sm:px-8 lg:px-10">
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.08, delayChildren: 0.35 }}
            className="grid w-full overflow-visible rounded-[6px] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.28)] md:grid-cols-[1fr_1fr_1.15fr_auto]"
          >
            <motion.label
              variants={fieldVariants}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="flex min-h-[86px] flex-col justify-center border-b border-[#ede6df] px-7 py-4 md:border-b-0 md:border-r"
            >
              <span className="font-secondary text-[10px] font-bold uppercase tracking-[0.16em] text-[#6e625b]">
                Check-In
              </span>
              <span className="mt-2 flex items-center gap-3">
                <CalendarIcon />
                <input
                  type="date"
                  value={checkIn}
                  min={today}
                  onChange={(event) => handleCheckIn(event.target.value)}
                  className="w-full bg-transparent font-secondary text-sm text-[#211b18] outline-none sm:text-[15px]"
                />
              </span>
            </motion.label>

            <motion.label
              variants={fieldVariants}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="flex min-h-[86px] flex-col justify-center border-b border-[#ede6df] px-7 py-4 md:border-b-0 md:border-r"
            >
              <span className="font-secondary text-[10px] font-bold uppercase tracking-[0.16em] text-[#6e625b]">
                Check-Out
              </span>
              <span className="mt-2 flex items-center gap-3">
                <CalendarIcon />
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn}
                  onChange={(event) => setCheckOut(event.target.value)}
                  className="w-full bg-transparent font-secondary text-sm text-[#211b18] outline-none sm:text-[15px]"
                />
              </span>
            </motion.label>

            <motion.div
              variants={fieldVariants}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="relative border-b border-[#ede6df] md:border-b-0 md:border-r"
            >
              <button
                type="button"
                aria-expanded={guestsOpen}
                onClick={() => setGuestsOpen((open) => !open)}
                className="flex min-h-[86px] w-full flex-col justify-center px-7 py-4 text-left transition hover:bg-[#fbf7f4]"
              >
                <span className="font-secondary text-[10px] font-bold uppercase tracking-[0.16em] text-[#6e625b]">
                  Guests
                </span>
                <span className="mt-2 flex items-center gap-3 font-secondary text-sm text-[#211b18] sm:text-[15px]">
                  <GuestIcon />
                  <span className="truncate">{guestSummary}</span>
                </span>
              </button>

              <AnimatePresence>
                {guestsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="absolute left-0 right-0 top-full z-30 border border-[#e6ddd4] bg-white px-6 py-2 shadow-[0_18px_45px_rgba(0,0,0,0.18)] md:min-w-[330px]"
                  >
                    <Stepper
                      label="Adults"
                      hint="Ages 13 or above"
                      value={adults}
                      min={1}
                      onChange={setAdults}
                    />
                    <Stepper
                      label="Children"
                      hint="Ages 2 to 12"
                      value={children}
                      min={0}
                      onChange={setChildren}
                    />
                    <Stepper
                      label="Rooms"
                      hint="Private rooms needed"
                      value={rooms}
                      min={1}
                      onChange={setRooms}
                    />
                    <button
                      type="button"
                      onClick={() => setGuestsOpen(false)}
                      className="my-4 h-11 w-full rounded-[4px] border border-primary font-secondary text-xs font-bold uppercase tracking-[0.18em] text-primary transition hover:bg-primary hover:text-white"
                    >
                      Done
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              variants={fieldVariants}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="flex items-center px-4 py-4"
            >
              <button
                type="submit"
                className="h-14 w-full rounded-[4px] bg-primary px-9 font-primary text-base font-semibold text-white transition duration-300 hover:bg-[#701313] md:min-w-[170px]"
              >
                Update Search
              </button>
            </motion.div>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
