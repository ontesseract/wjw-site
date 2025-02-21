"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageModal } from "@/components/image-modal";

const galleryImages = [
  "/wjw-sunset.jpg",
  "/wjw-background-1.jpg",
  "/wjw-background-2.jpg",
  "/wjw-jericho-palestine.jpg",
  "/wjw-sea-of-galilee.jpg",
  "/wjw-jerusalem-gates.jpg",
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="py-16 bg-muted text-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src) => (
              <div
                key={src}
                className="relative aspect-[4/3] cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt="Gallery image"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(min-width: 768px) 33vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt="Gallery image"
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
