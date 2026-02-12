"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ImageZoomOverlayProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export function ImageZoomOverlay({ src, alt, onClose }: ImageZoomOverlayProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center cursor-zoom-out"
      style={{ background: "rgba(0, 0, 0, 0.95)" }}
      onClick={onClose}
    >
      <div
        className="relative max-w-[90vw] max-h-[90vh] cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[90vh] object-contain rounded-lg cursor-default"
        />
        <button
          onClick={onClose}
          className="absolute -top-[50px] right-0 bg-transparent border-none text-white text-5xl cursor-pointer p-0 w-[50px] h-[50px] flex items-center justify-center transition-transform duration-300 hover:rotate-90"
        >
          &times;
        </button>
      </div>
    </div>,
    document.body
  );
}
