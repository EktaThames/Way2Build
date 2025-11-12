"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const allWorks = [
  { id: 1, title: "Modern Loft", category: "Architecture", image: "/images/gallery1.webp", height: "h-96" },
  { id: 2, title: "Luxury Villa", category: "Interior", image: "/images/gallery2.webp", height: "h-80" },
  { id: 3, title: "Urban Office", category: "Construction", image: "/images/gallery3.webp", height: "h-96" },
  { id: 4, title: "Minimalist Home", category: "Architecture", image: "/images/gallery4.webp", height: "h-80" },
  { id: 5, title: "Cozy Apartment", category: "Interior", image: "/images/gallery5.webp", height: "h-96" },
  { id: 6, title: "Commercial Tower", category: "Construction", image: "/images/gallery6.webp", height: "h-80" },
  { id: 7, title: "Modern Loft", category: "Architecture", image: "/images/gallery7.jpeg", height: "h-96" },
  { id: 8, title: "Luxury Villa", category: "Interior", image: "/images/gallery8.jpeg", height: "h-80" },
  { id: 9, title: "Urban Office", category: "Construction", image: "/images/gallery9.jpeg", height: "h-96" },
  { id: 10, title: "Minimalist Home", category: "Architecture", image: "/images/gallery10.jpeg", height: "h-80" },
  { id: 11, title: "Cozy Apartment", category: "Interior", image: "/images/gallery11.jpeg", height: "h-96" },
];

const PortfolioPage = () => {
  return (
    <div className="bg-white text-black font-sans">
      {/* Page Header */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center">
        <Image
          src="/images/portfolio-hero.png" // Using a generic hero image, you can change this
          alt="Portfolio background"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Portfolio</h1>
          <div className="mt-4 text-lg text-gray-300">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Portfolio</span>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16">
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {allWorks.map((work) => (
              <div key={work.id} className={`relative overflow-hidden group ${work.height}`}>
                <Image
                  src={work.image}
                  alt={work.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-all duration-500 z-10"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
