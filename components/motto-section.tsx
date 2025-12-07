"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function MottoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll progress relative to this section's position in viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // Start when section enters bottom, end when it exits top
  });

  // Parallax movements - text slides up as user scrolls
  const headingY = useTransform(scrollYProgress, [0, 0.3, 0.7], [150, 0, -200]);
  const firstParaY = useTransform(scrollYProgress, [0.1, 0.4, 0.8], [200, 0, -200]);
  const secondParaY = useTransform(scrollYProgress, [0.2, 0.55, 0.9], [250, 0, -200]);

  // Sequential fade in/out based on scroll position
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6], [0, 1, 1, 0.3]);
  const firstParaOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.55, 0.75], [0, 1, 1, 0.3]);
  const secondParaOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7, 0.9], [0, 1, 1, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-gradient-to-br from-[#e8e8f0] via-[#e0e0ea] to-[#d8d8e5]"
    >
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 relative">
          {/* Heading - Ars technologia */}
          <motion.h2
            style={{
              y: headingY,
              opacity: headingOpacity,
              fontFamily: "var(--font-merriweather)",
            }}
            className="text-5xl md:text-6xl lg:text-7xl italic font-normal text-gray-900 text-center mb-24 md:mb-32"
          >
            Ars technologia
          </motion.h2>

          {/* First Paragraph - Left aligned */}
          <motion.p
            style={{
              y: firstParaY,
              opacity: firstParaOpacity,
              fontFamily: "var(--font-plus-jakarta-sans)",
            }}
            className="text-base md:text-lg lg:text-xl text-left leading-relaxed text-gray-800 mb-16 md:mb-24 max-w-2xl"
          >
            There's a way technology should{" "}
            <span className="font-bold italic">feel</span>—inhumanly{" "}
            <span className="font-bold italic">reliable</span>, but humanly{" "}
            <span className="font-bold italic">freeing</span> and{" "}
            <span className="font-bold italic">empowering</span>.
          </motion.p>

          {/* Second Paragraph - Right aligned */}
          <motion.p
            style={{
              y: secondParaY,
              opacity: secondParaOpacity,
              fontFamily: "var(--font-plus-jakarta-sans)",
            }}
            className="text-base md:text-lg lg:text-xl text-right leading-relaxed text-gray-800 max-w-2xl ml-auto"
          >
            Our software is shaped by{" "}
            <span className="font-bold italic">empathy</span>. Every screen,
            every interaction, designed around how{" "}
            <span className="font-bold italic">you</span> want to be{" "}
            <span className="font-bold italic">understood</span>.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
