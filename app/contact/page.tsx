import React from 'react';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className="bg-[#1f1f1f] text-white font-sans">
      {/* Page Header */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center">
        <Image
          src="/images/contact-hero.jpg" // You can replace this with your image path
          alt="Contact background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-7xl font-bold">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4">Get in Touch</p>
        </div>
      </div>

      <div className="bg-[#1f1f1f] py-24">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-20 h-20 bg-[#2a2a2a] rounded-full flex items-center justify-center text-[#b19777] text-4xl mb-4">
              <i className="ri-map-pin-line"></i>
            </div>
            <h3 className="text-2xl font-semibold">Our Office</h3>
            <p className="text-gray-400">123 Architecture Lane, Build City, BC 54321</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-20 h-20 bg-[#2a2a2a] rounded-full flex items-center justify-center text-[#b19777] text-4xl mb-4">
              <i className="ri-mail-line"></i>
            </div>
            <h3 className="text-2xl font-semibold">Email Us</h3>
            <p className="text-gray-400">contact@way2build.com</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-20 h-20 bg-[#2a2a2a] rounded-full flex items-center justify-center text-[#b19777] text-4xl mb-4">
              <i className="ri-phone-line"></i>
            </div>
            <h3 className="text-2xl font-semibold">Call Us</h3>
            <p className="text-gray-400">(123) 456-7890</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#b19777] transition-colors duration-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#b19777] transition-colors duration-300"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#b19777] transition-colors duration-300"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#b19777] transition-colors duration-300"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#b19777] text-white font-semibold py-4 px-12 rounded-lg hover:bg-[#a08665] transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactPage;
