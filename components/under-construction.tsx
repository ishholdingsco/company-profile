"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "@/public/animations/coming soon.json";
import Image from "next/image";
import { Container } from "@/components/ui/container";

export function UnderConstruction() {
  return (
    <div className="min-h-screen bg-background w-full flex items-center justify-center py-12">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="space-y-8"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <Image
                src="/logo.png"
                alt="ISH Technologies"
                width={656}
                height={129}
                className="h-16 md:h-20 w-auto"
                priority
              />
            </motion.div>

            {/* Lottie Animation */}
            <div className="w-full max-w-2xl mx-auto">
              <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                className="w-full h-auto"
              />
            </div>

            {/* Text Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
                  We Are Evolving!
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
                Our digital home is going through a major level-up.
                <br />
                To match our growing capabilities and vision, we are meticulously re-engineering our digital presence.
              </p>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
                Please check back soon to watch us coming back better than ever before!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
