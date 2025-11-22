"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { sectors, getSolutionsForSector, getUseCases } from "@/lib/data";

export default function IndustriesPage() {
  const [selectedSectorId, setSelectedSectorId] = useState(sectors[0].id);
  const selectedSector = sectors.find((s) => s.id === selectedSectorId);

  if (!selectedSector) return null;

  const applicableSolutions = getSolutionsForSector(selectedSector.name);
  const isMining = selectedSector.name === "Mining";

  return (
    <div className="min-h-screen bg-background w-full">
      <Header />
      <main className="w-full pt-24 pb-20">
        <div className="w-full">
          {/* Hero with Background */}
          <div className="relative w-full h-[80vh] overflow-hidden mb-12">
            <div className="absolute inset-0">
              <Image
                src="/industry.avif"
                alt="Industries Background"
                fill
                className="object-contain brightness-75 grayscale"
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
                    Industries We Serve
                  </motion.h1>
                  <motion.p
                    className="text-xl text-white/90 max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    Delivering specialized technology solutions across diverse industries with proven expertise.
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
                  Browse Industries
                </motion.h3>
                <nav className="flex flex-col gap-2">
                  {sectors.map((sector, index) => (
                    <motion.button
                      key={sector.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.3 }}
                      onClick={() => setSelectedSectorId(sector.id)}
                      className={`px-4 py-3 border-2 rounded-lg transition-all font-medium text-left ${
                        selectedSectorId === sector.id
                          ? "bg-foreground text-background border-foreground"
                          : "border-foreground hover:bg-foreground hover:text-background"
                      }`}
                    >
                      {sector.name}
                    </motion.button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Right Content - Selected Sector */}
            <div className="flex-1 space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSectorId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`p-8 border-2 border-foreground rounded-lg ${
                    selectedSector.featured
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
                    {selectedSector.name}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="text-base mb-6 leading-relaxed"
                  >
                    {selectedSector.description}
                  </motion.p>

                  <div className="space-y-6">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      className="text-lg font-bold border-b-2 border-current pb-2"
                    >
                      Solutions Available:
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                      className="space-y-6"
                    >
                      {applicableSolutions.map((solutionName, index) => {
                        const useCases = getUseCases(solutionName, selectedSector.name);
                        if (useCases.length === 0) return null;

                        return (
                          <motion.div
                            key={solutionName}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                            className="space-y-3"
                          >
                            <h4 className="font-bold text-lg">{solutionName}</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5">
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

              {/* Mining Focus - Only show when Mining is selected */}
              <AnimatePresence>
                {isMining && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <motion.h2
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      className="text-3xl font-bold"
                    >
                      Mining: Our Primary Focus
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className="p-6 border-2 border-foreground rounded-lg"
                      >
                        <h3 className="text-xl font-bold mb-3">Specialized Expertise</h3>
                        <p className="text-sm leading-relaxed">
                          We have developed extensive experience in mining technology, creating solutions that address the unique challenges of the mining industry.
                        </p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                        className="p-6 border-2 border-foreground rounded-lg"
                      >
                        <h3 className="text-xl font-bold mb-3">Proven Track Record</h3>
                        <p className="text-sm leading-relaxed">
                          Our mining applications have been successfully deployed in various operations, improving safety, efficiency, and environmental compliance.
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
