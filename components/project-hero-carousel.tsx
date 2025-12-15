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
  interval = 7000
}: ProjectHeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManualChange, setIsManualChange] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const goToNext = useCallback(() => {
    setDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setDirection('prev');
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
    <div className="relative w-full h-full overflow-hidden bg-black">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{
            x: direction === 'next' ? '100%' : '-100%',
            opacity: 0
          }}
          animate={{
            x: 0,
            opacity: 1
          }}
          exit={{
            x: direction === 'next' ? '-100%' : '100%',
            opacity: 0
          }}
          transition={{
            duration: 1.5,
            ease: [0.25, 0.1, 0.25, 1]
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
