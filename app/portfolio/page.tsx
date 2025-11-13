"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const beforeImages = [
  { id: 1, src: "/images/gallery1.webp", height: "h-96" },
  { id: 3, src: "/images/gallery3.webp", height: "h-96" },
  { id: 5, src: "/images/gallery5.webp", height: "h-96" },
  { id: 6, src: "/images/gallery6.webp", height: "h-80" },
  { id: 7, src: "/images/gallery7.jpeg", height: "h-96" },
  { id: 8, src: "/images/gallery8.jpeg", height: "h-80" },
  { id: 9, src: "/images/gallery9.jpeg", height: "h-96" },
  { id: 10, src: "/images/gallery10.jpeg", height: "h-80" },
  { id: 11, src: "/images/gallery11.jpeg", height: "h-96" },
];

const afterImages = Array.from({ length: 32 }, (_, i) => ({
  id: i + 1,
  src: `/images/after${i + 1}.jpg`,
  height: i % 2 === 0 ? "h-96" : "h-80",
}));

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
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-20 px-4 pt-24">
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
      <div className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-24">
            {/* Before Column */}
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">Before</h2>
                <p className="text-lg text-gray-500 mt-2">The Original Space</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {beforeImages.map((image) => (
                  <div key={`before-${image.id}`} className={`relative overflow-hidden group ${image.height} rounded-lg`}>
                    <Image
                      src={image.src}
                      alt={`Before project ${image.id}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-all duration-500 z-10"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* After Column */}
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">After</h2>
                <p className="text-lg text-gray-500 mt-2">The Transformation</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {afterImages.map((image) => (
                  <div key={`after-${image.id}`} className={`relative overflow-hidden group ${image.height} rounded-lg`}>
                    <Image
                      src={image.src}
                      alt={`After project ${image.id}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-all duration-500 z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
