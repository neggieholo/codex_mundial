'use client'

import { useState, useEffect } from "react";
import MobNavCopy from "@/app/utlis/MobNavCopy";
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
    subMessage:
      "Browse, compare, and purchase the latest medical devices for hospitals and clinics.",
    image: "/doctor.png",
    position: "left",
    objectPosition: "center",
  },
  {
    message: "Advanced Lab & Diagnostic Tools",
    subMessage:
      "Microscopes, diagnostic machines, and laboratory essentials — all in one place.",
    image: "/microscope.png",
    position: "right",
    objectPosition: "center",
  },
  {
    message: "Warehouse-Ready Inventory",
    subMessage:
      "Fast delivery of high-quality medical equipment directly from our warehouses.",
    image: "/warehouse.png",
    position: "center",
    objectPosition: "center",
  },
];

export default function MobileHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const positionClasses = {
    left: "top-1/2 left-4 transform -translate-y-1/2",
    right: "top-1/2 right-4 transform -translate-y-1/2 text-right",
    center: "top-4 left-1/2 transform -translate-x-1/2",
  };

  const slideInClasses = {
    left: "translate-x-[-100%] opacity-0",
    right: "translate-x-[100%] opacity-0",
    center: "translate-y-[-50%] opacity-0",
  };

  return (
    <section className="w-full min-h-[65vh] overflow-hidden flex flex-col relative">
        <div className="relative w-full flex-1">
        {slides.map((s, idx) => (
            <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ${
                idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            >
            <Image
                src={s.image}
                alt="Hero Background"
                fill
                style={{ objectFit: "cover", objectPosition: s.objectPosition }}
                priority
            />

            {/* Sliding message */}
            <div
                className={`absolute max-w-xs sm:max-w-sm p-4 bg-base-300/70 rounded-xl shadow-lg
                ${positionClasses[s.position]}
                transition-all duration-700
                ${
                    idx === current
                    ? "translate-x-0 translate-y-0 opacity-100"
                    : slideInClasses[s.position]
                }`}
            >
                <h1 className="text-xl sm:text-2xl font-bold mb-2">{s.message}</h1>
                <p className="text-sm sm:text-base">{s.subMessage}</p>
            </div>
            </div>
        ))}
        </div>
    </section>
  );
}
