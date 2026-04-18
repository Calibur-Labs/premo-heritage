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
        className={`fixed pl-20 pr-35 top-0 left-0 w-full z-50 flex items-center justify-between px-8 transition-all duration-500 ${
          scrolled
            ? 'bg-primary py-2 shadow-lg backdrop-blur-sm'
            : 'bg-transparent py-4'
        }`}
      >

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

      <div className="flex items-center gap-16 text-white text-base tracking-widest uppercase font-bold font-primary">
        <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
        <Link href="/about" className="hover:opacity-70 transition-opacity">About Us</Link>
        <Link href="/contact" className="hover:opacity-70 transition-opacity">Contact Us</Link>
        <Link href="/destinations" className="hover:opacity-70 transition-opacity">Destinations</Link>
        <Link href="/booking" className="hover:opacity-70 transition-opacity">Book Now</Link>
      </div>
    </nav>
  )
}