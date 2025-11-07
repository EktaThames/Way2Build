"use client";

import React from "react";

const Contact = () => {
  return (
    <section className="py-24 md:py-32 bg-white font-sans">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="text-center mb-16 md:mb-20">
          <div className="relative inline-block">
            <p className="tracking-[0.3em] uppercase text-[12px] md:text-[13px] mb-[15px] font-light text-[#b19777]">
                Contact Us
              </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4 uppercase tracking-wider">
              Get In Touch
            </h2>
            <div className="absolute w-16 h-px bg-[#b19777] left-1/2 transform -translate-x-1/2 bottom-0"></div>
          </div>
          <p className="text-lg text-[#666666] max-w-3xl mx-auto mt-8 leading-relaxed">
            Have a project in mind? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form action="#" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mb-8">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name *"
                required
                className="w-full bg-white border-b-2 border-gray-200 py-4 px-5 text-lg text-[#222222] focus:outline-none focus:border-[#b19777] transition-colors"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email *"
                required
                className="w-full bg-white border-b-2 border-gray-200 py-4 px-5 text-lg text-[#222222] focus:outline-none focus:border-[#b19777] transition-colors"
              />
            </div>
            <div className="mb-8">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                className="w-full bg-white border-b-2 border-gray-200 py-4 px-5 text-lg text-[#222222] focus:outline-none focus:border-[#b19777] transition-colors"
              />
            </div>
            <div className="mb-12">
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="Your Message"
                className="w-full bg-white border-b-2 border-gray-200 py-4 px-5 text-lg text-[#222222] focus:outline-none focus:border-[#b19777] transition-colors resize-none"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#b19777] text-white uppercase tracking-widest font-semibold text-sm px-12 py-4 rounded-full hover:bg-[#a18667] transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
