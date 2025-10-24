"use client";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

interface GalleryModalProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export default function GalleryModal({
  images,
  initialIndex,
  onClose,
}: GalleryModalProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const prevImage = () =>
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  const nextImage = () =>
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex flex-col justify-center items-center p-4"
      onClick={onClose}>
      <div
        className="relative w-full max-w-6xl"
        onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition z-50">
          <FaTimes />
        </button>

        {/* Main Image */}
        <img
          src={images[activeIndex]}
          alt={`Image ${activeIndex + 1}`}
          className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl mx-auto"
        />

        {/* Left/Right Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition">
              <FaChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition">
              <FaChevronRight />
            </button>
          </>
        )}

        {/* Bottom Thumbnails */}
        <div className="flex gap-2 overflow-x-auto mt-4 px-1 justify-center">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Thumbnail ${i + 1}`}
              onClick={() => setActiveIndex(i)}
              className={`w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg cursor-pointer border-2 ${
                i === activeIndex ? "border-blue-500" : "border-transparent"
              } transition`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
