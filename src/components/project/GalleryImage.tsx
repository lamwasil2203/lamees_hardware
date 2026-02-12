"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryImage as GalleryImageType } from "@/types/project";
import { ImageZoomOverlay } from "@/components/ui/ImageZoomOverlay";

interface GalleryImageProps {
  image: GalleryImageType;
}

export function GalleryImage({ image }: GalleryImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <div className="relative overflow-hidden bg-border border-2 border-border">
        <div
          className={`relative cursor-zoom-in transition-transform duration-400 hover:scale-[1.02] ${
            image.featured ? "aspect-video" : "aspect-[4/3]"
          }`}
          style={{ transitionTimingFunction: "var(--ease-smooth)" }}
          onClick={() => setIsZoomed(true)}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes={image.featured ? "100vw" : "(max-width: 968px) 100vw, 50vw"}
          />
        </div>
        <p className="py-4 px-4 text-[0.9rem] text-secondary italic bg-white">
          {image.caption}
        </p>
      </div>
      {isZoomed && (
        <ImageZoomOverlay
          src={image.src}
          alt={image.alt}
          onClose={() => setIsZoomed(false)}
        />
      )}
    </>
  );
}
