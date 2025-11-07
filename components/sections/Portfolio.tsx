"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const allWorks = [ 
  { id: 1, title: "Modern Loft", category: "Architecture", image: "/images/portfolio1.jpg", height: "h-96" },
  { id: 2, title: "Luxury Villa", category: "Interior", image: "/images/portfolio2.jpg", height: "h-80" },
  { id: 3, title: "Urban Office", category: "Construction", image: "/images/portfolio3.jpg", height: "h-96" },
  { id: 4, title: "Minimalist Home", category: "Architecture", image: "/images/portfolio4.jpg", height: "h-80" },
  { id: 5, title: "Cozy Apartment", category: "Interior", image: "/images/portfolio5.jpg", height: "h-96" },
  { id: 6, title: "Commercial Tower", category: "Construction", image: "/images/portfolio1.jpg", height: "h-80" },
];

const filters = ["All", "Architecture", "Interior", "Construction"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredWorks, setFilteredWorks] = useState(allWorks);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredWorks(allWorks);
    } else {
      setFilteredWorks(allWorks.filter(work => work.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <section className="py-24 md:py-32 bg-white font-sans">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="text-center mb-16 md:mb-20">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4 uppercase tracking-wider">
            Our Works
          </h2>
            <div className="absolute w-16 h-px bg-[#b19777] left-1/2 transform -translate-x-1/2 bottom-0"></div>
          </div>
        </div>

        <div className="flex justify-center items-center mb-16 space-x-4 md:space-x-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-lg font-medium transition-colors duration-300 relative pb-2
                ${activeFilter === filter
                  ? "text-[#b19777]"
                  : "text-[#666666] hover:text-[#b19777]"
                }`}
            >
              {filter}
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#b19777] transition-all duration-300
                  ${activeFilter === filter ? "w-full" : "w-0"
                  }`}
              ></span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work) => (
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
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white">{work.title}</h3>
                  <p className="text-gray-300 text-sm">{work.category}</p>
                </div>
                <Link href="#" className="absolute bottom-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                  <i className="ri-arrow-right-line text-xl text-black"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
