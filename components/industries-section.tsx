"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { sectors } from "@/lib/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

// Industry icon mapping
const getIndustryIcon = (sectorId: string) => {
  const iconMap: Record<string, string> = {
    logistics: "/icons/logistic.png",
    mining: "/icons/mining.png",
    government: "/icons/government.png",
    retail: "/icons/retail.png",
    manufacturing: "/icons/manufacturing.png",
    agriculture: "/icons/agriculture.png",
    construction: "/icons/construction.png",
    finance: "/icons/finance.png",
    healthcare: "/icons/healthcare.png",
  };
  return iconMap[sectorId] || "/icons/logistic.png";
};

// Industry image mapping
const getIndustryImage = (sectorId: string) => {
  const imageMap: Record<string, string> = {
    logistics: "/industries/logistic.webp",
    mining: "/industries/mining.jpg",
    government: "/industries/government.jpg",
    retail: "/industries/retail.jpg",
    manufacturing: "/industries/manufacturing.jpg",
    agriculture: "/industries/agriculutre.webp",
    construction: "/industries/construction.jpg",
    finance: "/industries/finance.webp",
    healthcare: "/industries/healthcare.jpg",
  };
  return imageMap[sectorId] || "/industries/logistic.webp";
};

export function IndustriesSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>({});
  const totalPages = sectors.length;

  const currentIndustry = sectors[currentPage - 1];

  const getPageNumbers = () => {
    const delta = 1; // Changed from 2 to 1 for max 5 boxes
    const range = [];
    const rangeWithDots: (number | string)[] = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleIndustryChange = (industryId: string) => {
    const index = sectors.findIndex((s) => s.id === industryId);
    if (index !== -1) {
      setCurrentPage(index + 1);
    }
  };

  return (
    <section id="industries" className="py-12">
      <Container>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-10">Industries We Serve</h2>

        {/* Mobile Dropdown Selector */}
        <div className="md:hidden mb-6">
          <label className="block text-sm font-bold mb-2">
            Select Industry:
          </label>
          <Select value={currentIndustry.id} onValueChange={handleIndustryChange}>
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

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              {/* Desktop Layout - Only for lg (1024px+) */}
              <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center">
                {/* Left: Content */}
                <div className="space-y-6">
                  {/* Icon and Title - Side by Side */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 relative shrink-0">
                      {loadingImages[`icon-${currentIndustry.id}`] !== false && (
                        <Skeleton className="absolute inset-0" />
                      )}
                      <Image
                        src={getIndustryIcon(currentIndustry.id)}
                        alt={`${currentIndustry.name} icon`}
                        fill
                        className={`object-contain ${loadingImages[`icon-${currentIndustry.id}`] !== false ? 'opacity-0' : 'opacity-100'}`}
                        onLoadingComplete={() => {
                          setLoadingImages(prev => ({ ...prev, [`icon-${currentIndustry.id}`]: false }));
                        }}
                      />
                    </div>
                    <h3 className="text-3xl font-bold">{currentIndustry.name}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {currentIndustry.detailedDescription || currentIndustry.description}
                  </p>

                  {/* View More Button */}
                  <Link
                    href={`/industries?id=${currentIndustry.id}`}
                    className="inline-block px-6 py-3 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-all font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
                  >
                    View More
                  </Link>
                </div>

                {/* Right: Image */}
                <div className="relative h-[400px] rounded-lg overflow-hidden border-2 border-foreground">
                  {loadingImages[`main-${currentIndustry.id}`] !== false && (
                    <Skeleton className="absolute inset-0 rounded-none" />
                  )}
                  <Image
                    src={getIndustryImage(currentIndustry.id)}
                    alt={currentIndustry.name}
                    fill
                    className={`object-cover brightness-75 grayscale ${loadingImages[`main-${currentIndustry.id}`] !== false ? 'opacity-0' : 'opacity-100'}`}
                    onLoadingComplete={() => {
                      setLoadingImages(prev => ({ ...prev, [`main-${currentIndustry.id}`]: false }));
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              </div>

              {/* Mobile & Tablet Layout - Vertical */}
              <div className="lg:hidden space-y-6">
                {/* Image - Larger for tablet, full view for mobile */}
                <div className="relative h-[250px] md:h-[350px] rounded-lg overflow-hidden border-2 border-foreground">
                  {loadingImages[`mobile-${currentIndustry.id}`] !== false && (
                    <Skeleton className="absolute inset-0 rounded-none" />
                  )}
                  <Image
                    src={getIndustryImage(currentIndustry.id)}
                    alt={currentIndustry.name}
                    fill
                    className={`object-contain md:object-cover brightness-75 grayscale ${loadingImages[`mobile-${currentIndustry.id}`] !== false ? 'opacity-0' : 'opacity-100'}`}
                    onLoadingComplete={() => {
                      setLoadingImages(prev => ({ ...prev, [`mobile-${currentIndustry.id}`]: false }));
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Content */}
                <div className="space-y-4 md:space-y-5">
                  {/* Icon and Title - Side by Side */}
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 relative shrink-0">
                      {loadingImages[`icon-mobile-${currentIndustry.id}`] !== false && (
                        <Skeleton className="absolute inset-0" />
                      )}
                      <Image
                        src={getIndustryIcon(currentIndustry.id)}
                        alt={`${currentIndustry.name} icon`}
                        fill
                        className={`object-contain ${loadingImages[`icon-mobile-${currentIndustry.id}`] !== false ? 'opacity-0' : 'opacity-100'}`}
                        onLoadingComplete={() => {
                          setLoadingImages(prev => ({ ...prev, [`icon-mobile-${currentIndustry.id}`]: false }));
                        }}
                      />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">{currentIndustry.name}</h3>
                  </div>

                  {/* Description - short for mobile, full for tablet */}
                  <p className="text-sm leading-relaxed text-muted-foreground md:hidden">
                    {currentIndustry.shortDescription}
                  </p>
                  <p className="hidden md:block text-base leading-relaxed text-muted-foreground">
                    {currentIndustry.detailedDescription || currentIndustry.description}
                  </p>

                  {/* View More Button */}
                  <Link
                    href={`/industries?id=${currentIndustry.id}`}
                    className="inline-block px-5 py-2.5 md:px-6 md:py-3 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-all font-bold text-sm md:text-base shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
                  >
                    View More
                  </Link>

                  {/* Mobile Navigation Buttons */}
                  <div className="flex items-center justify-center gap-3 pt-2 md:hidden">
                    <button
                      onClick={handlePrevious}
                      disabled={currentPage === 1}
                      className="px-4 py-2 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-all font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:bg-transparent disabled:hover:text-foreground"
                      aria-label="Previous industry"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </button>

                    <span className="text-sm font-bold text-muted-foreground">
                      {currentPage} / {totalPages}
                    </span>

                    <button
                      onClick={handleNext}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-all font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:bg-transparent disabled:hover:text-foreground"
                      aria-label="Next industry"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination - Bottom Right (Hidden on mobile) */}
          {totalPages > 1 && (
            <div className="mt-8 hidden md:flex justify-end">
              <div className="flex items-center gap-2">
                {/* Previous Button */}
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-all font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:bg-transparent disabled:hover:text-foreground"
                  aria-label="Previous page"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>

                {/* Page Numbers */}
                {getPageNumbers().map((pageNumber, index) => (
                  <div key={index}>
                    {pageNumber === "..." ? (
                      <span className="px-2 text-muted-foreground">...</span>
                    ) : (
                      <button
                        onClick={() => handlePageChange(Number(pageNumber))}
                        className={`px-4 py-2 border-2 border-foreground rounded-lg transition-all font-bold ${
                          currentPage === pageNumber
                            ? "bg-foreground text-background shadow-[3px_3px_0px_0px_rgb(75,85,99)]"
                            : "hover:bg-foreground hover:text-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px]"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    )}
                  </div>
                ))}

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-all font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:bg-transparent disabled:hover:text-foreground"
                  aria-label="Next page"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
      </Container>
    </section>
  );
}
