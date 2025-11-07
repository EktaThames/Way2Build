"use client";

import React from "react";

const servicesData = [
  {
    id: 1,
    icon: "ri-building-line",
    title: "Architecture Design",
    description:
      "We offer comprehensive architecture design services, from concept to construction.",
  },
  {
    id: 2,
    icon: "ri-layout-line",
    title: "Interior Design",
    description:
      "Our interior design solutions create functional and aesthetically pleasing spaces.",
  },
  {
    id: 3,
    icon: "ri-landscape-line",
    title: "Landscape Design",
    description:
      "We specialize in creating beautiful and sustainable landscape designs.",
  },
  {
    id: 4,
    icon: "ri-tools-line",
    title: "Construction Management",
    description:
      "We provide expert construction management to ensure projects are completed on time and within budget.",
  },
  {
    id: 5,
    icon: "ri-home-line",
    title: "Renovation Services",
    description:
      "We offer top-notch renovation services to transform your existing spaces.",
  },
  {
    id: 6,
    icon: "ri-community-line",
    title: "Urban Planning",
    description:
      "We deliver innovative urban planning solutions for sustainable communities.",
  },
];

const Services = () => {
  return (
    <section className="py-24 md:py-32 bg-[#f8f4f3] font-sans">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="text-center mb-16 md:mb-20">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4 uppercase tracking-wider">
            Our Services
          </h2>
            <div className="absolute w-16 h-px bg-[#b19777] left-1/2 transform -translate-x-1/2 bottom-0"></div>
          </div>
          <p className="text-lg text-[#666666] max-w-3xl mx-auto mt-8 leading-relaxed">
          We offer a wide range of architectural and design services to meet
          your needs.
        </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-8 text-center transition-all duration-300 rounded-lg hover:bg-gray-50 group"
            >
              <div className="mb-6 flex justify-center">
                <i className={`${service.icon} text-5xl text-[#b19777]`}></i>
              </div>
              <h3 className="text-2xl font-bold text-[#222222] mb-4 transition-colors duration-300 group-hover:text-[#b19777]">
                {service.title}
              </h3>
              <p className="text-[#666666] leading-relaxed text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
