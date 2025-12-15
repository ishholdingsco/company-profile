"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const scrollingWords = [
  "design.",
  "prototype.",
  "solve.",
  "build.",
  "develop.",
];

interface Solution {
  id: string;
  name: string;
  shortName?: string; // For mobile/tablet display
  title: string;
  description: string;
  images: string[];
  folder: string;
}

const solutions: Solution[] = [
  {
    id: "dev",
    name: "Web & Mobile Dev",
    shortName: "Web Dev", // Used on mobile/tablet only
    title: "Web & Mobile Development",
    description: "Software people actually want to use. We craft web and mobile products through design thinking—researching real behavior, prototyping relentlessly, building on modern architecture that scales.\n\nClean interfaces. Seamless experience. Robust backend. From first concept to long-term iteration, we build digital products that feel right from the first tap.",
    folder: "dev",
    images: ["/solutions/dev/image-1.png", "/solutions/dev/image-2.png"]
  },
  {
    id: "boi",
    name: "Business & Operational Intelligence",
    shortName: "BOI", // Used on mobile/tablet only
    title: "Business & Operational Intelligence",
    description: "Data you collect should work as hard as you do. We build dashboards and analytics systems that surface what actually matters—KPIs that drive decisions, trends that reveal opportunity, alerts that catch problems early.\n\nNo vanity metrics. No dashboard graveyards. Just clear, actionable insight designed around how your team thinks and operates. Intelligence that earns its place in your workflow.",
    folder: "boi",
    images: ["/solutions/boi/image-1.png", "/solutions/boi/image-2.png", "/solutions/boi/image-3.png"]
  },
  {
    id: "cv",
    name: "CV",
    title: "Computer Vision",
    description: "Machines that see—and understand. We build vision systems that detect, classify, and interpret the visual world with precision: quality inspection, object recognition, anomaly detection, and beyond.\n\nWhether embedded at the edge or running in the cloud, our solutions are engineered for accuracy at scale. Because when machines can truly see, humans can focus on what matters more.",
    folder: "cv",
    images: ["/solutions/cv/image-1.png", "/solutions/cv/image-2.png", "/solutions/cv/image-3.png"]
  },
  {
    id: "rag",
    name: "RAG",
    title: "RAG (Retrieval-Augmented Generation)",
    description: "AI that knows what you know. We build RAG systems that ground large language models in your actual data—documents, knowledge bases, internal records—so answers are accurate, relevant, and traceable.\n\nNo hallucinations. No generic responses. Just AI that speaks with authority because it's drawing from sources you trust. Searchable intelligence, finally contextualized.",
    folder: "rag",
    images: ["/solutions/rag/image-1.png", "/solutions/rag/image-2.png", "/solutions/rag/image-3.png"]
  },
  {
    id: "nlp",
    name: "NLP",
    title: "Natural Language Processing",
    description: "Language is messy. We make sense of it. From document parsing to conversational AI, we build systems that understand human language in context—extracting meaning, automating workflows, enabling natural interaction.\n\nMultilingual. Domain-adaptable. Designed to handle real-world complexity, not just textbook examples. So your team spends less time reading and more time deciding.",
    folder: "nlp",
    images: ["/solutions/nlp/image-1.png", "/solutions/nlp/image-2.png", "/solutions/nlp/image-3.png"]
  },
  {
    id: "iot",
    name: "IoT",
    title: "Internet-of-Things",
    description: "Connected systems, unified intelligence. We design IoT solutions that bring scattered devices into coherent ecosystems—sensors, gateways, dashboards, all speaking the same language. Real-time monitoring. Predictive insight. Remote control.\n\nBuilt on robust architecture, secured by design, and scaled to grow with your operations. Technology that keeps you informed without overwhelming you.",
    folder: "iot",
    images: ["/solutions/iot/image-2.png", "/solutions/iot/image-3.png"]
  },
  {
    id: "hmi",
    name: "HMI",
    title: "Human Machine Interface",
    description: "Where humans meet machines, clarity is everything. We design interfaces and control systems that make complex operations intuitive—dashboards operators trust, controls that feel immediate, feedback that informs without noise.\n\nPrecision-engineered, human-tested. Because critical systems deserve interfaces that reduce error, not invite it.",
    folder: "hmi",
    images: ["/solutions/hmi/image-1.png", "/solutions/hmi/image-2.png"]
  },
];

// Carousel Component
function ImageCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reset index if images array changes
    setCurrentIndex(0);
  }, [images]);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds - give time for transition to complete

    return () => clearInterval(interval);
  }, [images.length]);

  // Guard clause: Don't render if no images
  if (!images || images.length === 0) {
    return (
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  // Guard clause: Ensure current image exists
  const currentImage = images[currentIndex];
  if (!currentImage || currentImage.trim() === '') {
    return (
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={currentImage}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-gray-800 w-6' : 'bg-gray-800/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function SolutionsPage() {
  const mainRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);
  const [scrollPage, setScrollPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // Set default to "dev" on mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 1024; // lg breakpoint
    if (isMobile && !selectedSolution) {
      setSelectedSolution("dev");
    }
  }, []);

  // Handle scroll pagination for mobile pills
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;

      // Calculate total pages (approximation based on visible width)
      const pages = Math.ceil(scrollWidth / clientWidth);
      setTotalPages(pages);

      // Calculate current page based on scroll position
      const currentPage = Math.round(scrollLeft / clientWidth);
      setScrollPage(currentPage);
    };

    // Initial calculation
    handleScroll();

    // Listen to scroll events
    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [selectedSolution]);

  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start end", "start start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [60, 0]);

  // Track scroll progress through the scrolling words section
  const { scrollYProgress: wordsScrollProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });

  // Map scroll progress to translateY - adjusted for 25vh position
  // More compressed timing since highlight zone moved from 50vh to 25vh
  const youCanTranslateY = useTransform(
    wordsScrollProgress,
    [0, 0.21, 0.38, 0.51, 0.63, 1],
    ['0.1em', '1.3em', '2.75em', '4.1em', '5.3em', '5.3em']
  );

  const selected = solutions.find(s => s.id === selectedSolution);

  return (
    <div className="min-h-screen bg-[#f9f7f2]">
      <Header
        pageTitle="Solutions"
        hideRightNav={true}
        variant="light"
      />

      {/* Hero Section with Scrolling Text */}
      <section className="relative min-h-screen flex items-start pt-20 pb-20">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, #d4cfc2 1px, transparent 1px),
              linear-gradient(to bottom, #d4cfc2 1px, transparent 1px)
            `,
            backgroundSize: '45px 45px',
            maskImage: 'linear-gradient(-20deg, transparent 50%, white)',
            WebkitMaskImage: 'linear-gradient(-20deg, transparent 50%, white)'
          }}
        />

        <div className="relative w-full">
          {/* Sticky Header with Scrolling Words */}
          <header
            ref={headerRef}
            className="sticky flex items-start w-full"
            style={{
              top: 'calc((5 - 1) * -1 * 1.3em)',
              marginBottom: '50vh',
              lineHeight: '1.3'
            }}
          >
            <section className="flex items-start justify-center w-full" style={{ paddingTop: 'calc(25vh - 0.65em)' }}>
              <h1 className="flex items-start justify-center text-4xl md:text-6xl lg:text-8xl font-semibold">
                <motion.span
                  className="font-merriweather text-black"
                  aria-hidden="true"
                  style={{
                    y: youCanTranslateY,
                    display: 'inline-block'
                  }}
                >
                  you can&nbsp;
                </motion.span>
                <span className="sr-only">you can design.</span>
              </h1>
              <ul
                className="list-none m-0 p-0 font-merriweather text-4xl md:text-6xl lg:text-8xl font-semibold"
                aria-hidden="true"
              >
                {scrollingWords.map((word, index) => (
                  <li
                    key={index}
                    className="scrolling-word"
                    style={{
                      lineHeight: '1.3',
                      background: `linear-gradient(
                        180deg,
                        color-mix(in oklch, #000000, transparent 80%) 0 calc(25vh - 0.65em),
                        #4d29ff calc(25vh - 0.65em) calc(25vh + 0.65em),
                        color-mix(in oklch, #000000, transparent 80%) calc(25vh + 0.65em)
                      )`,
                      backgroundAttachment: 'fixed',
                      color: 'transparent',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {word}
                  </li>
                ))}
              </ul>
            </section>
          </header>

          {/* Main Content Section with Solution Buttons */}
          <motion.main
            ref={mainRef}
            className="relative w-full z-10 overflow-hidden"
            style={{
              scale,
              borderTopLeftRadius: borderRadius,
              borderTopRightRadius: borderRadius,
              backgroundColor: '#f9f7f2'
            }}
          >
            {/* Initial Layout - Before Selection */}
            {!selectedSolution && (
              <section className="relative h-full w-full flex flex-col items-center justify-center py-12 px-6">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-merriweather font-bold text-center mb-16 text-black"
                >
                  You can <span className="italic text-[#4d29ff]">build</span> with us.
                </motion.h2>

                {/* Solution Buttons Grid */}
                <div className="w-full max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {solutions.map((solution, index) => (
                      <motion.div
                        key={solution.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className={index === 6 ? "lg:col-start-2" : ""}
                      >
                        <button
                          onClick={() => setSelectedSolution(solution.id)}
                          className="w-full h-[70px] px-6 py-3 bg-[#EAE5D7] rounded-[48px] font-plus-jakarta-sans font-bold text-base text-black transition-all hover:scale-105 flex items-center justify-center leading-tight"
                        >
                          <span className="lg:hidden">{solution.shortName || solution.name}</span>
                          <span className="hidden lg:inline">{solution.title}</span>
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Expanded Layout - After Selection */}
            {selectedSolution && selected && (
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-full py-12 px-6"
              >
                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-merriweather font-bold text-center mb-12 text-black"
                >
                  You can <span className="italic text-[#4d29ff]">build</span> with us.
                </motion.h2>

                {/* Desktop Layout: 2 Columns */}
                <div className="hidden lg:flex gap-8 max-w-7xl mx-auto min-h-[500px]">
                  {/* Left: Buttons with Inline Descriptions - Scrollable */}
                  <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-col gap-4 flex-shrink-0 max-h-[500px] overflow-y-auto pr-4 pb-3 custom-scrollbar"
                  >
                    {solutions.map((solution, index) => (
                      <div key={solution.id} className={`flex flex-col gap-3 w-[380px] ${index === solutions.length - 1 ? 'mb-2' : ''}`}>
                        {/* Button */}
                        <button
                          onClick={() => setSelectedSolution(solution.id)}
                          className={`w-[320px] px-6 py-4 rounded-[48px] font-plus-jakarta-sans font-bold text-base text-center transition-all leading-none ${
                            solution.id === selectedSolution
                              ? 'bg-[#f8f6f3] border-2 border-[#EAE5D7]'
                              : 'bg-[#EAE5D7] hover:bg-[#E0DBD0]'
                          }`}
                        >
                          {solution.title}
                        </button>

                        {/* Description Card - Appears Below Clicked Button */}
                        <AnimatePresence>
                          {solution.id === selectedSolution && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden w-[320px] mb-3"
                            >
                              <div className="bg-[#f8f6f3] border-2 border-[#EAE5D7] rounded-[48px] p-5">
                                <h3 className="text-lg font-plus-jakarta-sans font-bold mb-3 text-black text-center">
                                  {solution.title}
                                </h3>
                                <p className="text-xs font-plus-jakarta-sans text-gray-700 leading-relaxed whitespace-pre-line">
                                  {solution.description}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>

                  {/* Right: Image Carousel FULL */}
                  <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex-1"
                  >
                    <ImageCarousel key={selectedSolution} images={selected.images} />
                  </motion.div>
                </div>

                {/* Mobile Layout: Stacked */}
                <div className="lg:hidden flex flex-col gap-6 max-w-2xl mx-auto">
                  {/* Horizontal Scrollable Pills with Pagination */}
                  <div className="relative">
                    <motion.div
                      ref={scrollContainerRef}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="flex gap-3 overflow-x-auto pb-4 px-2 snap-x snap-mandatory hide-scrollbar"
                    >
                      {solutions.map((solution) => (
                        <button
                          key={solution.id}
                          onClick={() => setSelectedSolution(solution.id)}
                          className={`flex-shrink-0 px-6 py-3 rounded-full font-plus-jakarta-sans font-bold text-sm whitespace-nowrap snap-center transition-all ${
                            solution.id === selectedSolution
                              ? 'bg-[#f8f6f3] border-2 border-[#EAE5D7] scale-105'
                              : 'bg-[#EAE5D7]'
                          }`}
                        >
                          {solution.shortName || solution.name}
                        </button>
                      ))}
                    </motion.div>

                    {/* Pagination Indicators - Only show on mobile (< md) when there are multiple pages */}
                    {totalPages > 1 && (
                      <div className="flex justify-center gap-2 mt-2 md:hidden">
                        {Array.from({ length: totalPages }).map((_, index) => (
                          <div
                            key={index}
                            className={`h-2 rounded-full transition-all ${
                              index === scrollPage ? 'bg-gray-800 w-6' : 'bg-gray-800/50 w-2'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Carousel */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <ImageCarousel key={selectedSolution} images={selected.images} />
                  </motion.div>

                  {/* Description Card */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="bg-[#f8f6f3] border-2 border-[#EAE5D7] rounded-[48px] p-6"
                  >
                    <h3 className="text-2xl font-plus-jakarta-sans font-bold mb-4 text-black">
                      {selected.title}
                    </h3>
                    <p className="text-sm font-plus-jakarta-sans text-gray-700 leading-relaxed whitespace-pre-line">
                      {selected.description}
                    </p>
                  </motion.div>
                </div>

              </motion.section>
            )}
          </motion.main>
        </div>
      </section>

      <Footer />
    </div>
  );
}
