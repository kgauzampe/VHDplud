import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import './slider.css';

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
    <div className="slider-container">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={`Slide ${index + 1}`}
          loading="lazy"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="slider-image"
        />
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button onClick={prevSlide} aria-label="Previous Slide" className="slider-button left">
        <ChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} aria-label="Next Slide" className="slider-button right">
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="dots-container">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`dot ${i === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
