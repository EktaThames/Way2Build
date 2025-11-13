"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const servicesList = [
  'Full Home Renovation',
  'Kitchen Renovation',
  'Bathroom Renovation',
  'Loft Conversions',
  'House Extensions',
  'Painting & Decorating',
  'Joinery & Carpentry',
  'Electrical & Lighting',
  'Plumbing & Heating',
  'Roofing & Exterior Work',
  'Garden & Patio Renovation',
  'Eco-Friendly Renovations',
  'Basement Conversions',
  'Commercial Renovation',
  'Design & Planning',
  'Project Management',
];

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
          <Link href="/" className="hover:text-[#b19777] tracking-wide">Way2Build</Link>
        </div>
        <div className="flex items-center space-x-12">
          <ul className="hidden md:flex items-center space-x-8 relative font-medium tracking-wider text-sm">
            <li><Link href="/about" className={`hover:text-[#b19777] transition-colors duration-300`}>ABOUT US</Link></li>
            <li
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              className="relative"
            >
              <Link href="/services" className={`hover:text-[#b19777] transition-colors duration-300 flex items-center`}>
                SERVICES
                <i className="ri-arrow-down-s-line ml-1"></i>
              </Link>
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white rounded-lg shadow-2xl py-2 z-50 transition-all duration-300 ease-in-out
                  ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45"></div>
                <ul className="text-gray-700">
                  {servicesList.map((service) => (
                    <li key={service}>
                      <Link
                        href="/services"
                        className="block px-5 py-2.5 text-sm hover:bg-gray-100 hover:text-[#b19777] transition-colors duration-200"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li><Link href="/portfolio" className={`hover:text-[#b19777] transition-colors duration-300`}>PORTFOLIO</Link></li>
            <li><Link href="/contact" className={`hover:text-[#b19777] transition-colors duration-300`}>CONTACT</Link></li>
          </ul>
          {/* <button className="border border-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-white hover:text-black transition-colors duration-300">
            Let's Talk
          </button> */}
        </div>
      </nav>
    </header>
  );
}
