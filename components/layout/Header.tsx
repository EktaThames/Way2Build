"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`top-0 left-0 w-full z-50 transition-all duration-300 ${isSticky ? 'fixed bg-white shadow-md py-4' : 'absolute bg-transparent py-8'}`}
    >
      <nav className={`container mx-auto flex justify-between items-center px-6 sm:px-8 lg:px-16 transition-colors duration-300 ${isSticky ? 'text-black' : 'text-white'}`}>
        <div className="text-3xl font-bold">
          <Link href="/" className="hover:text-[#b19777]">Way2Build</Link>
        </div>
        <div className="flex items-center space-x-12">
          <ul className="hidden md:flex items-center space-x-8">
            <li><Link href="/about" className={`hover:text-[#b19777] transition-colors duration-300`}>About Us</Link></li>
            <li><Link href="/services" className={`hover:text-[#b19777] transition-colors duration-300`}>Services</Link></li>
            <li><Link href="/portfolio" className={`hover:text-[#b19777] transition-colors duration-300`}>Portfolio</Link></li>
            <li><Link href="/contact" className={`hover:text-[#b19777] transition-colors duration-300`}>Contact</Link></li>
          </ul>
          {/* <button className="border border-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-white hover:text-black transition-colors duration-300">
            Let's Talk
          </button> */}
        </div>
      </nav>
    </header>
  );
}
