import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-gray-400 font-sans">
      <div className="max-w-screen-xl mx-auto pt-24 pb-12 px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Us */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white">Way2Build</h3>
            <p className="leading-relaxed">
              We are a team of passionate architects and designers dedicated to creating innovative and sustainable spaces that inspire.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-lg font-semibold text-white uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              <li className="group">
                <Link href="/services" className="text-gray-400 hover:text-[#b19777] transition-colors duration-300 flex items-center">
                  <i className="ri-arrow-right-s-line mr-2 transition-transform duration-300 group-hover:translate-x-1"></i>Services
                </Link>
              </li>
              <li className="group">
                <Link href="/about" className="text-gray-400 hover:text-[#b19777] transition-colors duration-300 flex items-center">
                  <i className="ri-arrow-right-s-line mr-2 transition-transform duration-300 group-hover:translate-x-1"></i>About
                </Link>
              </li>
              <li className="group">
                <Link href="/portfolio" className="text-gray-400 hover:text-[#b19777] transition-colors duration-300 flex items-center">
                  <i className="ri-arrow-right-s-line mr-2 transition-transform duration-300 group-hover:translate-x-1"></i>Portfolio
                </Link>
              </li>
              <li className="group">
                <Link href="/contact" className="text-gray-400 hover:text-[#b19777] transition-colors duration-300 flex items-center">
                  <i className="ri-arrow-right-s-line mr-2 transition-transform duration-300 group-hover:translate-x-1"></i>Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-lg font-semibold text-white uppercase tracking-widest">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="ri-map-pin-line text-[#b19777] text-xl mr-4 mt-1"></i>
                <span>123 Architecture Lane, Build City, BC 54321</span>
              </li>
              <li className="flex items-start">
                <i className="ri-phone-line text-[#b19777] text-xl mr-4 mt-1"></i>
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <i className="ri-mail-line text-[#b19777] text-xl mr-4 mt-1"></i>
                <span>contact@way2build.com</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-8">
            <h4 className="text-lg font-semibold text-white uppercase tracking-widest">Follow Us</h4>
            <p>
              Stay connected with us on social media for the latest news and updates.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 bg-[#2a2a2a] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#b19777] transition-colors duration-300">
                <i className="ri-facebook-fill"></i>
              </Link>
              <Link href="#" className="w-10 h-10 bg-[#2a2a2a] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#b19777] transition-colors duration-300">
                <i className="ri-twitter-fill"></i>
              </Link>
              <Link href="#" className="w-10 h-10 bg-[#2a2a2a] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#b19777] transition-colors duration-300">
                <i className="ri-instagram-line"></i>
              </Link>
              <Link href="#" className="w-10 h-10 bg-[#2a2a2a] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#b19777] transition-colors duration-300">
                <i className="ri-linkedin-fill"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#111111] py-6">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16 text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} Way2Build. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
