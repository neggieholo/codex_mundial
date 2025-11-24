import { useState, useEffect } from "react";
import NavBarCopy from "../utlis/NavBarCopy";
import Image from "next/image";

interface HeroSlide {
  message: string;
  subMessage: string;
  image: string;
  position: "left" | "right" | "center";
  objectPosition?: string;
}

const slides: HeroSlide[] = [
  {
    message: "Top-Quality Medical Equipment",
    subMessage: "Browse, compare, and purchase the latest medical devices for hospitals and clinics.",
    image: "/doctor.png", // can be microscope, hospital, or lab image
    position: "left",
    objectPosition: "center",
  },
  {
    message: "Advanced Lab & Diagnostic Tools",
    subMessage: "Microscopes, diagnostic machines, and laboratory essentials — all in one place.",
    image: "/microscope.png",
    position: "right",
    objectPosition: "center",
  },
  {
    message: "Warehouse-Ready Inventory",
    subMessage: "Fast delivery of high-quality medical equipment directly from our warehouses.",
    image: "/warehouse.png",
    position: "center",
    objectPosition: "center",
  },
];


export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const positionClasses = {
    left: "top-1/2 left-10 transform -translate-y-1/2",
    right: "top-1/2 right-10 transform -translate-y-1/2 text-right",
    center: "top-10 left-1/2 transform -translate-x-1/2",
  };

  return (
    <section className="w-full min-h-[90vh] overflow-hidden flex flex-col justify-center items-center relative">
      <NavBarCopy />

      {/* Slides container */}
      <div className="relative w-full flex-1">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image}
              alt="Hero Background"
              fill
              style={{ objectFit: "cover", objectPosition: slide.objectPosition }}
              priority
            />
            {/* Message box */}
            <div
              className={`absolute max-w-lg p-6 bg-base-300/70 rounded-xl shadow-lg ${positionClasses[slide.position]} transition-opacity duration-1000`}
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.message}</h1>
              <p className="text-base md:text-lg">{slide.subMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
