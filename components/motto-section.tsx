"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export function MottoSection() {
  // Refs for each text element
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  // Scroll progress for each element independently
  const { scrollYProgress: progress1 } = useScroll({
    target: text1Ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const { scrollYProgress: progress2 } = useScroll({
    target: text2Ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const { scrollYProgress: progress3 } = useScroll({
    target: text3Ref,
    offset: ["start 0.8", "end 0.2"],
  });

  // Opacity animations - slower, smoother fade in/out
  const opacity1Raw = useTransform(progress1, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const opacity2Raw = useTransform(progress2, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const opacity3Raw = useTransform(progress3, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);

  // Y position - more noticeable slide up effect
  const y1Raw = useTransform(progress1, [0, 0.25], [100, 0]);
  const y2Raw = useTransform(progress2, [0, 0.25], [100, 0]);
  const y3Raw = useTransform(progress3, [0, 0.25], [100, 0]);

  // Add spring physics for smooth animation!
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const opacity1 = useSpring(opacity1Raw, springConfig);
  const opacity2 = useSpring(opacity2Raw, springConfig);
  const opacity3 = useSpring(opacity3Raw, springConfig);
  const y1 = useSpring(y1Raw, springConfig);
  const y2 = useSpring(y2Raw, springConfig);
  const y3 = useSpring(y3Raw, springConfig);

  return (
    <section className="relative w-full bg-white">
      {/* Space kosong di awal - supaya layar putih dulu semua */}
      <div className="h-[50vh] w-full"></div>

      {/* Text 1 - Ars technologia */}
      <div ref={text1Ref} className="h-screen w-full flex items-center justify-center px-8 md:px-16">
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="max-w-7xl mx-auto w-full text-center "
        >
          <h2
            style={{ fontFamily: "var(--font-merriweather)" }}
            className="text-4xl md:text-6xl lg:text-7xl italic font-normal text-black"
          >
            Ars technologia
          </h2>
        </motion.div>
      </div>

      {/* Text 2 - There's a way */}
      <div ref={text2Ref} className="h-screen w-full flex items-center justify-start px-8 md:px-16">
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="max-w-7xl mx-auto w-full"
        >
          <p
            style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            className="text-xl md:text-3xl lg:text-4xl text-left leading-relaxed text-black w-full md:w-2/3 lg:w-1/2"
          >
            There's a way technology should{" "}
            <span className="font-bold italic">feel</span>—inhumanly{" "}
            <span className="font-bold italic">reliable</span>, but humanly{" "}
            <span className="font-bold italic">freeing</span> and{" "}
            <span className="font-bold italic">empowering</span>.
          </p>
        </motion.div>
      </div>

      {/* Text 3 - Our software */}
      <div ref={text3Ref} className="h-screen w-full flex items-center justify-end px-8 md:px-16">
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="max-w-7xl mx-auto w-full flex justify-end"
        >
          <p
            style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            className="text-xl md:text-3xl lg:text-4xl text-right leading-relaxed text-black w-full md:w-2/3 lg:w-1/2"
          >
            Our software is shaped by{" "}
            <span className="font-bold italic">empathy</span>. Every screen,
            every interaction, designed around how{" "}
            <span className="font-bold italic">you</span> want to be{" "}
            <span className="font-bold italic">understood</span>.
          </p>
        </motion.div>
      </div>

      {/* Space kosong di akhir - supaya text hilang dulu sebelum Projects muncul */}
      <div className="h-[50vh] w-full"></div>
    </section>
  );
}
