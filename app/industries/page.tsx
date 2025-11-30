"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { sectors, getSolutionsForSector, getUseCases } from "@/lib/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function IndustriesContent() {
  const searchParams = useSearchParams();
  const initialId = searchParams.get("id") || sectors[0].id;

  const [selectedSectorId, setSelectedSectorId] = useState(initialId);
  const [currentSolutionIndex, setCurrentSolutionIndex] = useState(0);
  const selectedSector = sectors.find((s) => s.id === selectedSectorId);

  // Update selected sector when URL parameter changes
  useEffect(() => {
    const urlId = searchParams.get("id");
    if (urlId && sectors.find((s) => s.id === urlId)) {
      setSelectedSectorId(urlId);
      setCurrentSolutionIndex(0);
    }
  }, [searchParams]);

  if (!selectedSector) return null;

  const applicableSolutions = getSolutionsForSector(selectedSector.name);
  const isMining = selectedSector.name === "Mining";

  // Reset solution index when sector changes
  const handleSectorChange = (sectorId: string) => {
    setSelectedSectorId(sectorId);
    setCurrentSolutionIndex(0);
  };

  const handleNextSolution = () => {
    setCurrentSolutionIndex((prev) =>
      prev < applicableSolutions.length - 1 ? prev + 1 : 0
    );
  };

  const handlePrevSolution = () => {
    setCurrentSolutionIndex((prev) =>
      prev > 0 ? prev - 1 : applicableSolutions.length - 1
    );
  };

  const currentSolution = applicableSolutions[currentSolutionIndex];
  const currentUseCases = currentSolution ? getUseCases(currentSolution, selectedSector.name) : [];

  return (
    <div className="min-h-screen bg-background w-full">
      <Header />
      <main className="w-full">
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
            <div className="relative h-full flex items-center page-container">
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
          <div className="page-container flex gap-8 pb-12">
            {/* Left Sidebar - Glossary Navigation */}
            <aside className="hidden lg:block w-64 shrink-0">
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
                      onClick={() => handleSectorChange(sector.id)}
                      className={`px-4 py-3 border-2 rounded-lg transition-all font-medium text-center ${
                        selectedSectorId === sector.id
                          ? "bg-foreground text-background border-foreground shadow-[3px_3px_0px_0px_rgb(75,85,99)]"
                          : "border-foreground hover:bg-foreground hover:text-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px]"
                      }`}
                    >
                      {sector.name}
                    </motion.button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Right Content - Selected Sector */}
            <div className="flex-1 space-y-6">
              {/* Mobile/Tablet Sector Selector */}
              <div className="lg:hidden mb-6">
                <label className="block text-sm font-bold mb-2">
                  Select Industry:
                </label>
                <Select value={selectedSectorId} onValueChange={handleSectorChange}>
                  <SelectTrigger className="w-full border-2 border-foreground">
                    <SelectValue placeholder="Select an industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {sectors.map((sector) => (
                      <SelectItem key={sector.id} value={sector.id}>
                        {sector.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSectorId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-lg"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="text-3xl font-bold mb-3"
                  >
                    {selectedSector.name}
                  </motion.h2>
                  {/* Mobile description - shorter version */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="text-base mb-6 leading-relaxed md:hidden"
                  >
                    {selectedSector.shortDescription}
                  </motion.p>
                  {/* Desktop/Tablet description - full version */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="text-base mb-6 leading-relaxed hidden md:block"
                  >
                    {selectedSector.description}
                  </motion.p>

                  <div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      className="pb-4 mt-4"
                    >
                      <h3 className="text-lg font-bold mb-3">
                        Solutions Available:
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {applicableSolutions.map((solution, index) => (
                          <button
                            key={solution}
                            onClick={() => setCurrentSolutionIndex(index)}
                            className={`px-4 py-2 border-2 rounded-lg transition-all font-medium text-sm ${
                              currentSolutionIndex === index
                                ? "bg-foreground text-background border-foreground shadow-[3px_3px_0px_0px_rgb(75,85,99)]"
                                : "border-foreground hover:bg-foreground hover:text-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px]"
                            }`}
                          >
                            {solution}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                    <div className="min-h-[120px] flex flex-col pt-4">
                      <AnimatePresence mode="wait">
                        {currentUseCases.length > 0 && (
                          <motion.div
                            key={currentSolution}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="flex-grow"
                          >
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5">
                              {currentUseCases.map((useCase, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm leading-snug">
                                  <span className="font-bold mt-0.5">•</span>
                                  <span>{useCase}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="flex items-center justify-center gap-4 pt-4">
                      <button
                        onClick={handlePrevSolution}
                        className="px-6 py-3 md:px-5 md:py-2.5 lg:px-8 lg:py-4 border-2 border-foreground rounded-full hover:bg-foreground hover:text-background transition-all font-bold text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
                        aria-label="Previous solution"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="md:w-5 md:h-5 lg:w-6 lg:h-6">
                          <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                      </button>
                      <button
                        onClick={handleNextSolution}
                        className="px-6 py-3 md:px-5 md:py-2.5 lg:px-8 lg:py-4 border-2 border-foreground rounded-full hover:bg-foreground hover:text-background transition-all font-bold text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
                        aria-label="Next solution"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="md:w-5 md:h-5 lg:w-6 lg:h-6">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </button>
                    </div>
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

export default function IndustriesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background w-full">
        <Header />
        <main className="w-full flex items-center justify-center min-h-[60vh]">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-foreground border-t-transparent rounded-full animate-spin shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
          </div>
        </main>
        <Footer />
      </div>
    }>
      <IndustriesContent />
    </Suspense>
  );
}
