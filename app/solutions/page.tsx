"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { solutions, getSectorsForSolution, getUseCases } from "@/lib/data";

export default function SolutionsPage() {
  const [selectedSolutionId, setSelectedSolutionId] = useState(solutions[0].id);
  const selectedSolution = solutions.find((s) => s.id === selectedSolutionId);

  if (!selectedSolution) return null;

  const applicableSectors = getSectorsForSolution(selectedSolution.name);

  return (
    <div className="min-h-screen bg-background w-full">
      <Header />
      <main className="w-full pt-24 pb-20">
        <div className="w-full">
          {/* Hero with Background */}
          <div className="relative w-full h-[80vh] overflow-hidden mb-12">
            <div className="absolute inset-0">
              <Image
                src="/solutions.webp"
                alt="Solutions Background"
                fill
                className="object-cover brightness-75 grayscale"
                priority
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative h-full flex items-center px-12">
              <motion.div
                initial={{ opacity: 0, x: -50, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                className="max-w-4xl"
              >
                <div className="space-y-6">
                  <motion.div
                    className="w-full border-t-2 border-white"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                    style={{ transformOrigin: "left" }}
                  />
                  <motion.h1
                    className="text-5xl font-bold text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    Our Solutions
                  </motion.h1>
                  <motion.p
                    className="text-xl text-white/90 max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    Cutting-edge technology solutions designed to transform your operations and drive innovation.
                  </motion.p>
                  <motion.div
                    className="w-full border-t-2 border-white"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Content with Sidebar */}
          <div className="flex gap-8 px-12">
            {/* Left Sidebar - Glossary Navigation */}
            <aside className="w-64 shrink-0">
              <div className="sticky top-32 space-y-4">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="text-sm font-bold uppercase tracking-wider text-muted-foreground"
                >
                  Browse Solutions
                </motion.h3>
                <nav className="flex flex-col gap-2">
                  {solutions.map((solution, index) => (
                    <motion.button
                      key={solution.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      onClick={() => setSelectedSolutionId(solution.id)}
                      className={`px-4 py-3 border-2 rounded-lg transition-all font-medium text-left ${
                        selectedSolutionId === solution.id
                          ? "bg-foreground text-background border-foreground"
                          : "border-foreground hover:bg-foreground hover:text-background"
                      }`}
                    >
                      {solution.name}
                    </motion.button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Right Content - Selected Solution */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSolutionId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`p-8 border-2 border-foreground rounded-lg ${
                    selectedSolution.featured
                      ? "bg-foreground text-background"
                      : ""
                  }`}
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="text-3xl font-bold mb-3"
                  >
                    {selectedSolution.name}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="text-base mb-6 leading-relaxed"
                  >
                    {selectedSolution.description}
                  </motion.p>

                  <div className="space-y-6">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      className="text-lg font-bold border-b-2 border-current pb-2"
                    >
                      Applications by Sector:
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                      {applicableSectors.map((sectorName, index) => {
                        const useCases = getUseCases(selectedSolution.name, sectorName);
                        if (useCases.length === 0) return null;

                        return (
                          <motion.div
                            key={sectorName}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                            className="space-y-3"
                          >
                            <h4 className="font-bold text-base">{sectorName}</h4>
                            <ul className="space-y-1.5">
                              {useCases.map((useCase, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm leading-snug">
                                  <span className="font-bold mt-0.5">•</span>
                                  <span>{useCase}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
