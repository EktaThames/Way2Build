"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";
const testimonialsData = [
  {
    id: 1,
    quote:
      "Working with this team was a game-changer. Their architectural vision and attention to detail are unparalleled. They transformed our space into something truly extraordinary. We couldn't be happier with the results.",
    name: "Jessica Miller",
    title: "CEO, Innovate Co.",
    avatar: "/images/avatar1.jpg",
  },
  {
    id: 2,
    quote:
      "From concept to completion, the process was seamless. Their professionalism and creative solutions exceeded all our expectations. The final building is not just a structure, but a piece of art that inspires us daily.",
    name: "Michael Chen",
    title: "Founder, Tech Solutions",
    avatar: "/images/avatar2.jpg",
  },
  {
    id: 3,
    quote:
      "The interior design team has a remarkable talent for creating spaces that are both beautiful and functional. They listened to our needs and delivered a design that perfectly reflects our brand's identity. Highly recommended!",
    name: "Sarah Johnson",
    title: "Marketing Director, Creative Minds",
    avatar: "/images/avatar3.jpg",
  },
];

interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const CustomNextArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} group w-12 h-12 bg-transparent border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#b19777] hover:border-[#b19777] transition-all duration-300`}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    >
      <i className="ri-arrow-right-s-line text-2xl text-gray-500 group-hover:text-white"></i>
    </div>
  );
};

const CustomPrevArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} group w-12 h-12 bg-transparent border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#b19777] hover:border-[#b19777] transition-all duration-300`}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    >
      <i className="ri-arrow-left-s-line text-2xl text-gray-500 group-hover:text-white"></i>
    </div>
  );
};

interface TestimonialsProps {
  theme?: 'light' | 'dark';
}

const Testimonials: React.FC<TestimonialsProps> = ({ theme = 'light' }) => {
  const sliderRef = useRef<Slider>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }; 

  return (
    <section
      className={`py-24 md:py-32 font-sans overflow-hidden ${theme === 'light' ? 'bg-[#f8f4f3]' : 'bg-black'}`}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <div className="relative inline-block"><p className="tracking-[0.3em] uppercase text-[12px] md:text-[13px] mb-[15px] font-light text-[#b19777]">
                Testimonials
              </p>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider ${theme === 'light' ? 'text-[#222222]' : 'text-white'}`}>
              What Client's Say?
            </h2>
            <div className="absolute w-16 h-px bg-[#b19777] left-1/2 transform -translate-x-1/2 bottom-0"></div>
          </div>
        </div>

        <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="px-4 outline-none">
              <div className="relative text-left min-h-[320px] p-8">
                <div className="mb-8">
                  <i className="ri-double-quotes-l text-7xl text-[#b19777] opacity-20"></i>
                </div>
                <p className={`text-lg italic leading-relaxed mb-8 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                  {testimonial.quote}
                </p>
                <div className="h-px w-16 bg-gray-300 mb-8"></div>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image src={testimonial.avatar} alt={testimonial.name} width={64} height={64} className="object-cover" />
                  </div>
                  <div>
                    <h4 className={`text-lg font-bold ${theme === 'light' ? 'text-[#222222]' : 'text-white'}`}>{testimonial.name}</h4>
                    <p className="text-sm text-[#b19777]">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider> 
        <div className="flex justify-center items-center space-x-4 mt-12">
            <CustomPrevArrow onClick={() => sliderRef.current?.slickPrev()}  />
            <CustomNextArrow onClick={() => sliderRef.current?.slickNext()}  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
