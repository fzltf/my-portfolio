"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const images = [
  {
    src: "/about/picture1.webp",
    alt: "Refactoring Modul Distribution",
  },
  {
    src: "/about/picture2.webp",
    alt: "UI/UX Design BaMeets",
  },
  {
    src: "/about/picture3.webp",
    alt: "Project Lokasnap",
  },
];

export default function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = images[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <div className="relative mx-auto w-full max-w-[300px] animate-[slideLeftReveal_0.75s_ease-out_0.35s_forwards] opacity-0 sm:max-w-[360px] lg:mx-0 lg:ml-auto">
      <div className="absolute -right-3 top-5 h-full w-full border-2 border-[#111111] bg-[#FFCC00] sm:-right-4 sm:top-6 dark:border-[#FFCC00]" />

      <div className="relative border-2 border-[#111111] bg-white p-3 shadow-[6px_6px_0px_#111111] sm:p-4 sm:shadow-[7px_7px_0px_#111111] dark:border-[#3A3A3A] dark:bg-[#151515] dark:shadow-[6px_6px_0px_#FFCC00] sm:dark:shadow-[7px_7px_0px_#FFCC00]">
        <div className="relative h-60 overflow-hidden border-2 border-[#111111] bg-[#EDE9DD] sm:h-64 md:h-80 dark:border-[#3A3A3A] dark:bg-[#1F1F1F]">
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            sizes="(max-width: 640px) 300px, 360px"
            className="object-cover"
          />

          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center border-2 border-[#111111] bg-white text-[#111111] shadow-[3px_3px_0px_#111111] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#FFCC00] hover:shadow-none sm:left-3 sm:h-10 sm:w-10 dark:border-[#FFCC00] dark:bg-[#151515] dark:text-[#FFCC00] dark:shadow-[3px_3px_0px_#FFCC00] dark:hover:bg-[#FFCC00] dark:hover:text-[#111111]"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Next image"
            className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center border-2 border-[#111111] bg-white text-[#111111] shadow-[3px_3px_0px_#111111] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#FFCC00] hover:shadow-none sm:right-3 sm:h-10 sm:w-10 dark:border-[#FFCC00] dark:bg-[#151515] dark:text-[#FFCC00] dark:shadow-[3px_3px_0px_#FFCC00] dark:hover:bg-[#FFCC00] dark:hover:text-[#111111]"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-3 flex items-center justify-between border-t-2 border-[#111111] pt-3 sm:mt-4 sm:pt-4 dark:border-[#3A3A3A]">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#111111] sm:text-xs dark:text-[#F5F5F5]">
            Preview
          </p>

          <div className="flex gap-2">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`h-3 border-2 border-[#111111] transition dark:border-[#3A3A3A] ${
                  activeIndex === index
                    ? "w-8 bg-[#FFCC00]"
                    : "w-3 bg-white dark:bg-[#1F1F1F]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}