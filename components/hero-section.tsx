"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Container } from "@/components/ui/container";
import { useEffect } from "react";

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for mouse position
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Transform mouse position to wave offset values (smaller range for subtler effect)
  const mouseInfluenceY = useTransform(smoothMouseY, [0, 800], [-30, 30]);
  const mouseInfluenceX = useTransform(smoothMouseX, [0, 1200], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#e8e8f0] via-[#e0e0ea] to-[#d8d8e5]">
      {/* Animated Wave Background with Mouse Tracking */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#2626a8", stopOpacity: 0.15 }} />
              <stop offset="100%" style={{ stopColor: "#4040c0", stopOpacity: 0.08 }} />
            </linearGradient>
            <linearGradient id="wave-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#3535b5", stopOpacity: 0.12 }} />
              <stop offset="100%" style={{ stopColor: "#5050d0", stopOpacity: 0.06 }} />
            </linearGradient>
            <linearGradient id="wave-gradient-3" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#4545bb", stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: "#6060dd", stopOpacity: 0.05 }} />
            </linearGradient>
          </defs>

          {/* Wave 1 - Primary wave with ambient + mouse tracking */}
          <motion.path
            fill="url(#wave-gradient-1)"
            animate={{
              d: [
                `M0,300 Q300,100 600,300 T1200,300 L1200,0 L0,0 Z`,
                `M0,280 Q300,120 600,280 T1200,280 L1200,0 L0,0 Z`,
                `M0,300 Q300,100 600,300 T1200,300 L1200,0 L0,0 Z`,
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              translateY: mouseInfluenceY,
            }}
          />

          {/* Wave 2 - Secondary wave with different timing + mouse */}
          <motion.path
            fill="url(#wave-gradient-2)"
            animate={{
              d: [
                `M0,200 Q300,50 600,200 T1200,200 L1200,0 L0,0 Z`,
                `M0,230 Q300,80 600,230 T1200,230 L1200,0 L0,0 Z`,
                `M0,200 Q300,50 600,200 T1200,200 L1200,0 L0,0 Z`,
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            style={{
              translateY: useTransform(mouseInfluenceY, (y) => y * 0.7),
              translateX: useTransform(mouseInfluenceX, (x) => x * 0.5),
            }}
          />

          {/* Wave 3 - Tertiary wave + mouse */}
          <motion.path
            fill="url(#wave-gradient-3)"
            opacity="0.6"
            animate={{
              d: [
                `M0,150 Q200,80 400,150 T800,150 T1200,150 L1200,0 L0,0 Z`,
                `M0,170 Q200,100 400,170 T800,170 T1200,170 L1200,0 L0,0 Z`,
                `M0,150 Q200,80 400,150 T800,150 T1200,150 L1200,0 L0,0 Z`,
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            style={{
              translateY: useTransform(mouseInfluenceY, (y) => y * 0.5),
              translateX: useTransform(mouseInfluenceX, (x) => x * 0.8),
            }}
          />

          {/* Wave 4 - Background ambient wave */}
          <motion.path
            d="M0,350 Q400,250 800,350 T1200,350 L1200,0 L0,0 Z"
            fill="url(#wave-gradient-1)"
            opacity="0.04"
            animate={{
              d: [
                "M0,350 Q400,250 800,350 T1200,350 L1200,0 L0,0 Z",
                "M0,320 Q400,220 800,320 T1200,320 L1200,0 L0,0 Z",
                "M0,350 Q400,250 800,350 T1200,350 L1200,0 L0,0 Z",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              translateY: useTransform(mouseInfluenceY, (y) => y * 0.3),
            }}
          />
        </svg>
      </div>

      {/* Interactive particles/dots following mouse */}
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-blue-400/30 pointer-events-none"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-blue-300/20 pointer-events-none"
        style={{
          x: useTransform(smoothMouseX, (x) => x * 0.8),
          y: useTransform(smoothMouseY, (y) => y * 0.8),
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-blue-500/15 pointer-events-none"
        style={{
          x: useTransform(smoothMouseX, (x) => x * 1.2),
          y: useTransform(smoothMouseY, (y) => y * 1.2),
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Content Overlay - Centered */}
      <Container className="relative h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center"
        >
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight"
            style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
          >
            <span className="text-gray-900">Make idea </span>
            <motion.span
              className="italic font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              style={{ fontFamily: "var(--font-merriweather)" }}
            >
              make sense
            </motion.span>
            <span className="text-gray-900">.</span>
          </motion.h1>
        </motion.div>
      </Container>
    </section>
  );
}
