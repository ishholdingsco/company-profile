"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { solutions, type SolutionData } from "@/lib/data";

export function SolutionsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSolution, setSelectedSolution] = useState<SolutionData | null>(null);
  const maxVisible = 3;

  // Get solution image path based on solution id
  const getSolutionImage = (solutionId: string) => {
    const imageMap: Record<string, string> = {
      "cv": "/solutions/cv.jpg",
      "iot": "/solutions/iot.jpg",
      "nlp": "/solutions/nlp.webp",
      "robotics": "/solutions/robotics.jpg",
      "web-mobile": "/solutions/programming.avif",
    };
    return imageMap[solutionId] || "/solutions/cv.jpg";
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + maxVisible < solutions.length ? prev + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : Math.max(0, solutions.length - maxVisible)
    );
  };

  const visibleSolutions = solutions.slice(currentIndex, currentIndex + maxVisible);

  return (
    <section id="solutions" className="py-12">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-10 page-container">Solutions</h2>

          {/* Desktop View with Navigation Buttons */}
          <div className="relative hidden lg:block page-container">
            {/* Navigation Buttons */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 xl:-translate-x-24 z-10">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="p-3 xl:p-4 border-2 border-foreground rounded-full hover:bg-foreground hover:text-background transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] disabled:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:hover:translate-x-0 disabled:hover:translate-y-0"
                aria-label="Previous solutions"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="xl:w-6 xl:h-6">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 xl:translate-x-24 z-10">
              <button
                onClick={handleNext}
                disabled={currentIndex + maxVisible >= solutions.length}
                className="p-3 xl:p-4 border-2 border-foreground rounded-full hover:bg-foreground hover:text-background transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] disabled:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:hover:translate-x-0 disabled:hover:translate-y-0"
                aria-label="Next solutions"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="xl:w-6 xl:h-6">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>

            {/* Cards Container - Desktop */}
            <div className="grid grid-cols-3 gap-5">
              <AnimatePresence mode="wait">
                {visibleSolutions.map((solution, idx) => (
                  <motion.div
                    key={`${solution.id}-${currentIndex}`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="group"
                  >
                    <div
                      onClick={() => setSelectedSolution(selectedSolution?.id === solution.id ? null : solution)}
                      className="relative overflow-hidden border-2 border-foreground rounded-lg cursor-pointer h-[320px] flex items-center justify-center hover:border-foreground/80 transition-all"
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <Image
                          src={getSolutionImage(solution.id)}
                          alt={solution.name}
                          fill
                          className={`object-cover brightness-75 grayscale transition-all duration-300 ${
                            selectedSolution?.id === solution.id ? 'blur-sm scale-105' : ''
                          }`}
                        />
                        <div className={`absolute inset-0 transition-all duration-300 ${
                          selectedSolution?.id === solution.id ? 'bg-black/70' : 'bg-black/40 group-hover:bg-black/30'
                        }`} />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 text-center px-6 w-full">
                        <AnimatePresence mode="wait">
                          {selectedSolution?.id === solution.id ? (
                            <motion.div
                              key="detail"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="flex flex-col items-center justify-center h-full space-y-4"
                            >
                              <h3 className="font-bold text-xl text-white">{solution.name}</h3>
                              <p className="text-white/90 text-sm leading-snug line-clamp-4">
                                {solution.shortDescription}
                              </p>
                              <Link
                                href={`/solutions?id=${solution.id}`}
                                className="text-white font-bold underline hover:text-white/80 transition-colors mt-2"
                                onClick={(e) => e.stopPropagation()}
                              >
                                View More
                              </Link>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="title"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <span className="font-bold text-2xl block text-white">
                                {solution.name}
                              </span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile & Tablet View with Horizontal Scroll */}
          <div className="lg:hidden overflow-x-scroll scrollbar-hide">
            <div className="flex gap-5 pl-6 md:pl-12">
              {solutions.map((solution) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex-shrink-0 w-[85vw] md:w-[45vw] group"
                >
                  <div
                    onClick={() => setSelectedSolution(selectedSolution?.id === solution.id ? null : solution)}
                    className="relative overflow-hidden border-2 border-foreground rounded-lg cursor-pointer h-[320px] flex items-center justify-center hover:border-foreground/80 transition-all"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={getSolutionImage(solution.id)}
                        alt={solution.name}
                        fill
                        className={`object-cover brightness-75 grayscale transition-all duration-300 ${
                          selectedSolution?.id === solution.id ? 'blur-[2px] scale-105' : ''
                        }`}
                      />
                      <div className={`absolute inset-0 transition-all duration-300 ${
                        selectedSolution?.id === solution.id ? 'bg-black/70' : 'bg-black/40 group-hover:bg-black/30'
                      }`} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center px-6 w-full">
                      <AnimatePresence mode="wait">
                        {selectedSolution?.id === solution.id ? (
                          <motion.div
                            key="detail"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col items-center justify-center h-full space-y-4"
                          >
                            <h3 className="font-bold text-xl text-white">{solution.name}</h3>
                            <p className="text-white/90 text-sm leading-snug line-clamp-4">
                              {solution.shortDescription}
                            </p>
                            <Link
                              href={`/solutions?id=${solution.id}`}
                              className="text-white font-bold underline hover:text-white/80 transition-colors mt-2"
                              onClick={(e) => e.stopPropagation()}
                            >
                              View More
                            </Link>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="title"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="font-bold text-2xl block text-white">
                              {solution.name}
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
              {/* Spacer element to create symmetrical space at the end */}
              <div className="flex-shrink-0 w-1 md:w-2" aria-hidden="true"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
