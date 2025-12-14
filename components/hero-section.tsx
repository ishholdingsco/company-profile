"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { WebGLParticles } from "@/components/webgl-particles";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#003680]">
      {/* WebGL Particle Background */}
      <WebGLParticles />

      {/* Content Overlay - Centered */}
      <Container className="relative h-full flex items-center justify-center z-10">
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
            <span className="text-white">Make idea </span>
            <motion.span
              className="italic font-normal text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              style={{ fontFamily: "var(--font-merriweather)" }}
            >
              make sense.
            </motion.span>
          </motion.h1>
        </motion.div>
      </Container>
    </section>
  );
}
