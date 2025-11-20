"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Testimonials from '@/components/sections/Testimonials';

const services = [
  { icon: 'ri-pen-nib-line', title: 'Architecture', description: 'Exceptional design, from concept to completion.' },
  { icon: 'ri-layout-line', title: 'Interior Design', description: 'Creating functional and beautiful interior spaces.' },
  { icon: 'ri-ruler-2-line', title: 'Construction', description: 'High-quality construction and project management.' },
  { icon: 'ri-building-line', title: 'Renovation', description: 'Transforming spaces with innovative renovations.' },
];

const teamMembers = [
  { name: 'John Smith', role: 'Lead Architect', image: '/images/person.jpg' },
  { name: 'Jane Doe', role: 'Interior Designer', image: '/images/person.jpg' },
  { name: 'Mike Johnson', role: 'Project Manager', image: '/images/person.jpg' },
  { name: 'Emily White', role: 'Structural Engineer', image: '/images/person.jpg' },
];

const AboutPage = () => {
  return (
    <div className="bg-white text-black font-sans">
      {/* Page Header */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center">
        <Image
          src="/images/about-hero.jpg" // Replace with your hero image
          alt="About Us background"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 px-4 pt-24"> {/* Added pt-24 here */}
          <h1 className="text-5xl md:text-6xl font-bold text-white">About Us</h1>
          <div className="mt-4 text-lg text-gray-300">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-[#b19777] font-semibold uppercase tracking-widest">About Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#222222] leading-tight">
              We are the leaders in the architectural industry.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              For over 20 years, Way2Build has been at the forefront of architectural innovation, creating spaces that are not only visually stunning but also sustainable and functional. Our commitment to excellence has made us a trusted partner for clients worldwide.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <i className="ri-check-line text-[#b19777] mr-3 text-xl"></i>
                Award-winning design and architecture.
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-[#b19777] mr-3 text-xl"></i>
                Commitment to sustainability and green building.
              </li>
              <li className="flex items-center">
                <i className="ri-check-line text-[#b19777] mr-3 text-xl"></i>
                A collaborative approach with our clients.
              </li>
            </ul>
            <button className="mt-6 bg-[#b19777] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#a18667] transition-colors duration-300">
              Read More
            </button>
          </div>
          <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/about-content.jpg" // Replace with your image
              alt="Office interior"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-[#f8f4f3]">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service) => (
              <div key={service.title} className="text-center p-6 group">
                <div className="flex justify-center mb-6">
                  <i className={`${service.icon} text-5xl text-[#b19777] transition-colors duration-300`}></i>
                </div>
                <h3 className="text-2xl font-bold text-[#222222] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Testimonials Section */}
      <section>
        <Testimonials theme="dark" />
      </section>

      

    </div>
  );
};

export default AboutPage;
