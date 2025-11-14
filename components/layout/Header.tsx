"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src={isSticky ? "/images/logo2.png" : "/images/logo.png"}
              alt="Way2Build Logo"
              width={80}
              height={15}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          <ul className="flex items-center space-x-8 relative font-medium tracking-wider text-sm">
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
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
            className="text-2xl"
          >
            <i className="ri-menu-line"></i>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-[#1f1f1f] z-50 transform transition-transform duration-300 ease-in-out md:hidden
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex justify-end p-6">
            <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close mobile menu" className="text-white text-3xl">
              <i className="ri-close-line"></i>
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full -mt-16">
            <ul className="text-center space-y-8 text-2xl text-white">
              <li><Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</Link></li>
              <li><Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</Link></li>
              <li><Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>PORTFOLIO</Link></li>
              <li><Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</Link></li>
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  );
}
