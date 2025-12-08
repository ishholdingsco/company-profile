"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectHeroCarouselProps {
  images: string[];
  interval?: number; // in milliseconds
}

export function ProjectHeroCarousel({
  images,
  interval = 5000
}: ProjectHeroCarouselProps) {
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
    // Reset manual change flag after interval
    if (isManualChange) {
      const resetTimer = setTimeout(() => {
        setIsManualChange(false);
      }, interval);
      return () => clearTimeout(resetTimer);
    }

    // Auto-scroll only if not manually changed
    const timer = setInterval(() => {
      if (!isManualChange) {
        goToNext();
      }
    }, interval);

    return () => clearInterval(timer);
  }, [interval, isManualChange, goToNext]);

  // Handle manual navigation with touch/swipe
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
            filter: "blur(20px)",
            scale: 1.1
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            scale: 1
          }}
          exit={{
            opacity: 0,
            filter: "blur(20px)",
            scale: 0.95
          }}
          transition={{
            duration: 1.2,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`Hero image ${currentIndex + 1}`}
            fill
            className="object-contain"
            priority={currentIndex === 0}
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Swipe gesture area (invisible) */}
      <div
        className="absolute inset-0 z-10 touch-pan-y"
        onTouchStart={(e) => {
          const touch = e.touches[0];
          const startX = touch.clientX;

          const handleTouchEnd = (endEvent: TouchEvent) => {
            const endX = endEvent.changedTouches[0].clientX;
            const diff = startX - endX;

            if (Math.abs(diff) > 50) { // Minimum swipe distance
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
