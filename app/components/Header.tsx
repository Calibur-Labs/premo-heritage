'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-primary py-2 shadow-lg backdrop-blur-sm'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Premo Heritage Villa"
            width={56}
            height={22}
            className={`object-contain transition-all duration-300 ${
              scrolled ? 'w-14' : 'w-16'
            }`}
            priority
          />
        </Link>

        <div className="flex items-center gap-16 text-base font-bold uppercase tracking-widest text-white font-primary">
          <Link href="/" className="transition-opacity hover:opacity-70">
            Home
          </Link>

          <Link href="/about" className="transition-opacity hover:opacity-70">
            About Us
          </Link>

          <Link href="/contact" className="transition-opacity hover:opacity-70">
            Contact Us
          </Link>

          <Link
            href="/destinations"
            className="transition-opacity hover:opacity-70"
          >
            Destinations
          </Link>

          <Link href="/booking" className="transition-opacity hover:opacity-70">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  )
}