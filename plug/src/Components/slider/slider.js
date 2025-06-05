import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../../assets/img/1.jpeg";
import img2 from "../../assets/img/2.jpeg";
import img3 from "../../assets/img/3.jpeg";

const images = [img1, img2, img3];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="
            w-full 
            h-[250px] sm:h-[400px] md:h-[480px] 
            object-cover 
            rounded-t-2xl
            select-none
            "
          loading="lazy"
          alt={`Slide ${index + 1}`}
        />
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="
          absolute top-1/2 left-4 
          transform -translate-y-1/2 
          bg-black bg-opacity-40 text-white 
          p-2 rounded-full
          hover:bg-opacity-60
          transition
          z-10
          "
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="
          absolute top-1/2 right-4 
          transform -translate-y-1/2 
          bg-black bg-opacity-40 text-white 
          p-2 rounded-full
          hover:bg-opacity-60
          transition
          z-10
          "
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-4 h-4 rounded-full transition-colors duration-300 ${
              i === index ? "bg-white" : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
