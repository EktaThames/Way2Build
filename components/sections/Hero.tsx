"use client"; // Add this directive for client-side components

import Image from "next/image";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import the Slider component with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Hero() {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // Hiding arrows for a cleaner look like the example
  };

  const slides = [
    {
      id: 1,
      src: "/images/hero-bg.jpg",
      alt: "Modern architecture 1",
    },
    {
      id: 2,
      src: "/images/hero-bg2.jpg", // You'll need to add this image to your public/images
      alt: "Modern architecture 2",
    },
    {
      id: 3,
      src: "/images/hero-bg3.jpg", // You'll need to add this image to your public/images
      alt: "Modern architecture 3",
    },
  ];
  return (
     <section className="relative h-screen w-full overflow-hidden ">
      <Slider {...settings} className="w-full h-full">
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-screen w-full flex items-center justify-center text-center transition-opacity duration-500">
            <Image
              src={slide.src}
              alt={slide.alt}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="-z-10"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-40 z-0"></div> {/* Changed -z-10 to z-0 */}
            <div className="z-10 w-full h-full flex flex-col items-center justify-center px-4 text-white">
              <p className="tracking-[0.3em] uppercase text-[12px] md:text-[13px] mb-[15px] font-light text-[#b19777]">
                Creative Architectural Design
              </p>
              <h1 className="text-5xl  md:text-[85px] font-extrabold leading-[1.1]">
                We Create The Art<br />
                Of Stylish Living
              </h1> 
              {/* <button className="mt-8 px-8 py-3 md:px-10 md:py-4 bg-white text-black text-[12px] md:text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300">
                Our Portfolio
              </button> */}
            </div>
          </div>
        ))}
      </Slider>
      </section>
  );
}
