"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface YantoHeroCarouselProps {
  images: string[];
  interval?: number;
}

export function YantoHeroCarousel({
  images,
  interval = 5000
}: YantoHeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManualChange, setIsManualChange] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  // Auto-scroll effect
  useEffect(() => {
    if (isManualChange) {
      const resetTimer = setTimeout(() => {
        setIsManualChange(false);
      }, interval);
      return () => clearTimeout(resetTimer);
    }

    const timer = setInterval(() => {
      if (!isManualChange) {
        goToNext();
      }
    }, interval);

    return () => clearInterval(timer);
  }, [interval, isManualChange, goToNext]);

  // Handle manual navigation
  const handleManualChange = (direction: 'next' | 'prev') => {
    setIsManualChange(true);
    if (direction === 'next') {
      goToNext();
    } else {
      goToPrevious();
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{
            opacity: 0,
            scale: 1.2,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
          }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`Yanto hero image ${currentIndex + 1}`}
            fill
            className="object-contain"
            priority={currentIndex === 0}
            quality={100}
          />
          {/* Dark vignette overlay for horror effect */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Swipe gesture area */}
      <div
        className="absolute inset-0 z-10 touch-pan-y"
        onTouchStart={(e) => {
          const touch = e.touches[0];
          const startX = touch.clientX;

          const handleTouchEnd = (endEvent: TouchEvent) => {
            const endX = endEvent.changedTouches[0].clientX;
            const diff = startX - endX;

            if (Math.abs(diff) > 50) {
              handleManualChange(diff > 0 ? 'next' : 'prev');
            }

            document.removeEventListener('touchend', handleTouchEnd);
          };

          document.addEventListener('touchend', handleTouchEnd);
        }}
      />
    </div>
  );
}
