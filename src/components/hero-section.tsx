"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const heroImages = [
  "/wjw-sand-background.jpg",
  "/wjw-sunset.jpg",
  "/wjw-background-2.jpg",
  "/wjw-jericho-palestine.jpg",
  "/wjw-sea-of-galilee.jpg",
  // Add more image paths as needed
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[60vh] flex items-center justify-center text-secondary-foreground overflow-hidden">
      {heroImages.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Background ${index + 1}`}
          layout="fill"
          objectFit="cover"
          className={`absolute inset-0 z-0 transition-opacity duration-3000
            ${currentImageIndex === index ? "opacity-100" : "opacity-0"}`}
          priority={index === 0}
        />
      ))}
      <div className="absolute inset-0 bg-black/20 z-[1]"></div>
      <div className="relative z-10 text-center text-white flex flex-col items-center max-w-4xl mx-auto px-4">
        <div className="w-full max-w-[600px] mb-8">
          <Image
            src="/wjw-logo-white.png"
            alt="Where Jesus Walked Logo"
            width={600}
            height={100}
            className="w-full h-auto"
          />
        </div>
        <h2 className="text-5xl font-bold mb-4">
          Experience the Life of Jesus
        </h2>
        <p className="text-xl mb-8">
          An immersive 360° theater experience that transports you back in time
          to the Holy Land to walk alongside Jesus during key moments of his
          life.
        </p>
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
        >
          Book Now
        </Button>
      </div>
    </section>
  );
}
