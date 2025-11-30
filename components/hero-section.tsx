"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
    })
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
    // Reset autoplay timer ketika user klik pagination dot
    autoplayRef.current.reset();
  };

  return (
    <section className="mt-0 pb-4">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[autoplayRef.current]}
        className="w-full"
      >
        <CarouselContent>
          {/* Slide 1: Consolidated Technologies */}
          <CarouselItem>
            <div className="relative w-full h-[90vh] overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/hero.jpg"
                  alt="Hero Background"
                  fill
                  className="object-cover brightness-75 grayscale"
                  priority
                  quality={100}
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center page-container">
                <motion.div
                  key={`slide-0-${current}`}
                  initial={{ opacity: 0, x: -50, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="max-w-4xl"
                >
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <motion.div
                      className="w-full border-t-2 border-white"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                      style={{ transformOrigin: "left" }}
                    />
                    <motion.p
                      className="text-3xl md:text-4xl text-white leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      We are a{" "}
                      <span className="font-bold">consolidated technologies company</span>
                      , offering cutting-edge solutions at scale.
                    </motion.p>
                    <motion.div
                      className="w-full border-t-2 border-white"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                      style={{ transformOrigin: "left" }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </CarouselItem>

          {/* Slide 2: Digital Technology Startup */}
          <CarouselItem>
            <div className="relative w-full h-[90vh] overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/about-bg.jpg"
                  alt="Technology Background"
                  fill
                  className="object-cover brightness-75 grayscale"
                  quality={100}
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center page-container">
                <motion.div
                  key={`slide-1-${current}`}
                  initial={{ opacity: 0, x: -50, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="max-w-4xl"
                >
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <motion.div
                      className="w-full border-t-2 border-white"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                      style={{ transformOrigin: "left" }}
                    />
                    <motion.h2
                      className="text-4xl md:text-5xl font-bold text-white mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      About Us
                    </motion.h2>
                    <motion.p
                      className="text-2xl md:text-3xl text-white leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      We are a <span className="font-bold">digital technology startup</span> with
                      expertise in developing innovative solutions for a broad range of
                      industries.
                    </motion.p>
                    <motion.div
                      className="w-full border-t-2 border-white"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                      style={{ transformOrigin: "left" }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </CarouselItem>

          {/* Slide 3: Our Products */}
          <CarouselItem>
            <div className="relative w-full h-[90vh] overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/products-bg.jpg"
                  alt="Products Background"
                  fill
                  className="object-cover brightness-75 grayscale"
                  quality={100}
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center page-container">
                <motion.div
                  key={`slide-2-${current}`}
                  initial={{ opacity: 0, x: -50, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="w-full"
                >
                  <div className="space-y-6">
                    <motion.div
                      className="w-full border-t-2 border-white"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                      style={{ transformOrigin: "left" }}
                    />
                    <motion.h2
                      className="text-4xl md:text-5xl font-bold text-white mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      Our Product
                    </motion.h2>

                    {/* PocketMine - Left-Right Layout */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
                      {/* Left: Icon */}
                      <motion.div
                        className="flex items-center justify-center"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                      >
                        <Image
                          src="/pocketmine/icon.png"
                          alt="PocketMine"
                          width={300}
                          height={300}
                          className="w-32 md:w-full md:max-w-sm h-auto"
                        />
                      </motion.div>

                      {/* Right: Content */}
                      <motion.div
                        className="space-y-3 md:space-y-4"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                      >
                        <h3 className="text-xl md:text-3xl font-bold text-white">PocketMine</h3>
                        <p className="text-white/95 text-sm md:text-lg leading-relaxed">
                          Advanced mobile application for mining operations.
                        </p>

                        <div className="space-y-2 md:space-y-3">
                          <h4 className="text-base md:text-xl font-semibold text-white/90">Key Features:</h4>
                          <ul className="space-y-1 md:space-y-2 text-white/90 text-sm md:text-base">
                            <li className="flex items-start gap-2">
                              <span className="text-white mt-1">•</span>
                              <span className="md:hidden"><strong>PDF Map Overlay</strong></span>
                              <span className="hidden md:inline"><strong>PDF Map Overlay</strong> - Import and overlay engineering maps for enhanced visualization</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-white mt-1">•</span>
                              <span className="md:hidden"><strong>Pit Design Processing</strong></span>
                              <span className="hidden md:inline"><strong>Pit Design Processing</strong> - CAD drawing integration (DXF) for pit boundaries and mine planning</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-white mt-1">•</span>
                              <span className="md:hidden"><strong>Cross-Section Visualization</strong></span>
                              <span className="hidden md:inline"><strong>Cross-Section Visualization</strong> - Interactive geological cross-section analysis with real-time rendering</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-white mt-1">•</span>
                              <span className="md:hidden"><strong>3D Block Model View</strong></span>
                              <span className="hidden md:inline"><strong>3D Block Model View</strong> - Top-down and interactive visualization of mining block models</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-white mt-1">•</span>
                              <span className="md:hidden"><strong>GPS Navigation</strong></span>
                              <span className="hidden md:inline"><strong>GPS Navigation</strong> - Real-time location tracking and navigation within mining sites</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-white mt-1">•</span>
                              <span className="md:hidden"><strong>Coordinate System Support</strong></span>
                              <span className="hidden md:inline"><strong>Coordinate System Support</strong> - Multiple UTM zones and coordinate transformations for global operations</span>
                            </li>
                          </ul>
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      className="w-full border-t-2 border-white mt-6"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
                      style={{ transformOrigin: "left" }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-300 ${
                current === index
                  ? "w-12 h-3 bg-white rounded-full"
                  : "w-3 h-3 bg-white/50 hover:bg-white/75 rounded-full"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
