"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const allServices = [
  { icon: 'ri-home-heart-line', title: 'Full Home Renovation', description: 'Comprehensive transformations for your entire home, from top to bottom.' },
  { icon: 'ri-fridge-line', title: 'Kitchen Renovation', description: 'Designing beautiful and functional kitchens that are the heart of the home.' },
  { icon: 'ri-tools-line', title: 'Bathroom Renovation', description: 'Creating modern, spa-like bathrooms for ultimate relaxation and comfort.' },
  { icon: 'ri-arrow-up-down-line', title: 'Loft Conversions', description: 'Maximizing your home’s potential by converting unused loft space.' },
  { icon: 'ri-add-box-line', title: 'House Extensions', description: 'Seamlessly expanding your living space to meet your growing needs.' },
  { icon: 'ri-paint-brush-line', title: 'Painting & Decorating', description: 'Expert painting and decorating services for a pristine, professional finish.' },
  { icon: 'ri-ruler-2-line', title: 'Joinery & Carpentry', description: 'Bespoke carpentry and joinery for custom furniture, fittings, and more.' },
  { icon: 'ri-lightbulb-line', title: 'Electrical & Lighting', description: 'Safe and innovative electrical and lighting solutions for any space.' },
  { icon: 'ri-fire-line', title: 'Plumbing & Heating', description: 'Reliable plumbing and heating services to keep your home comfortable.' },
  { icon: 'ri-building-2-line', title: 'Roofing & Exterior Work', description: 'Protecting and beautifying your home with expert roofing and exterior services.' },
  { icon: 'ri-plant-line', title: 'Garden & Patio Renovation', description: 'Creating stunning outdoor spaces for relaxation and entertainment.' },
  { icon: 'ri-leaf-line', title: 'Eco-Friendly Renovations', description: 'Sustainable and energy-efficient renovation solutions for a greener home.' },
  { icon: 'ri-arrow-down-s-line', title: 'Basement Conversions', description: 'Transforming your basement into a valuable and functional living area.' },
  { icon: 'ri-building-4-line', title: 'Commercial Renovation', description: 'Professional renovation services for offices, retail, and other commercial spaces.' },
  { icon: 'ri-drafting-pin-2-line', title: 'Design & Planning', description: 'Meticulous design and planning to bring your vision to life flawlessly.' },
  { icon: 'ri-briefcase-4-line', title: 'Project Management', description: 'End-to-end project management to ensure your project runs smoothly.' },
];

const ServicesPage = () => {
  return (
    <div className="bg-white text-black font-sans">
      {/* Page Header */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center">
        <Image
          src="/images/about-hero.jpg" // Replace with a suitable hero image
          alt="Our Services background"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 px-4 pt-24">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Our Services</h1>
          <div className="mt-4 text-lg text-gray-300">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Services</span>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-[#b19777] font-semibold uppercase tracking-widest">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mt-2">
              Our Comprehensive Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
              From initial design to final execution, we provide a complete range of services to handle every aspect of your renovation project with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-gray-200 rounded-lg p-8 text-left group transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="mb-6">
                  <i className={`${service.icon} text-5xl text-[#b19777]`}></i>
                </div>
                <h3 className="text-2xl font-bold text-[#222222] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#f8f4f3]">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16 py-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">
            Have a Project in Mind?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Let's discuss how we can bring your vision to life. Contact us today for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#b19777] text-white font-semibold py-4 px-10 rounded-full hover:bg-[#a18667] transition-colors duration-300"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

