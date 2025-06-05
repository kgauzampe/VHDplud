import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './slider.css';

import img1 from "../../assets/img/1.jpeg";
import img2 from "../../assets/img/2.jpeg";
import img3 from "../../assets/img/3.jpeg";
import img4 from "../../assets/img/4.jpeg";
import img5 from "../../assets/img/5.jpeg";
import img6 from "../../assets/img/6.jpeg";
import img7 from "../../assets/img/7.jpeg";
import img8 from "../../assets/img/8.jpeg";


const images = [img1, img2, img3];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);

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
    </div>
  );
}
