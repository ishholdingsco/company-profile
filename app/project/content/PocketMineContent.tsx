"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

export function PocketMineContent() {
  return (
    <>
      {/* PocketMine: Section 1: Beyond the ground */}
      <section className="w-full pt-0 pb-24 md:pb-32 lg:pb-40 bg-background relative overflow-visible">
        {/* Desktop Layout (lg) - uses absolute positioning */}
        <div className="hidden lg:block relative min-h-[800px]">
          {/* Left: Image - positioned at edge */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute left-0 top-0 w-[35%] z-10"
          >
            <Image
              src="/project/product/pocketmine/pocketmine-section.png"
              alt="PocketMine Mobile App"
              width={600}
              height={800}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Top Right: Small text */}
          <Container>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="ml-auto w-[60%] pt-12"
            >
              <p
                className="text-lg text-black text-right"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                A mining app navigation app in mobile, that can help you to improve your
                agility and accuracy on grade control and mine design compliance.
              </p>
            </motion.div>
          </Container>

          {/* Center Right: Main heading */}
          <Container className="absolute inset-0 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="ml-auto w-[70%]"
            >
              <h2
                className="text-6xl font-bold text-foreground text-left"
                style={{ fontFamily: "var(--font-merriweather)" }}
              >
                Beyond the ground,
                <br />
                in the palm of your hand.
              </h2>
            </motion.div>
          </Container>
        </div>

        {/* Mobile & Tablet Layout (default & md) - uses flex column */}
        <div className="lg:hidden">
          <Container>
            {/* Top: Small text */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pt-8 md:pt-12 pb-8"
            >
              <p
                className="text-lg md:text-xl text-black text-center"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                A mining app navigation app in mobile, that can help you to improve your
                agility and accuracy on grade control and mine design compliance.
              </p>
            </motion.div>
          </Container>

          {/* Middle: Image - positioned at left edge, outside container */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pb-8 md:pb-12"
          >
            <div className="w-[60%] md:w-[55%]">
              <Image
                src="/project/product/pocketmine/pocketmine-section.png"
                alt="PocketMine Mobile App"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <Container>
            {/* Bottom: Main heading */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pb-8"
            >
              <h2
                className="text-4xl md:text-6xl font-bold text-foreground text-center leading-tight"
                style={{ fontFamily: "var(--font-merriweather)", lineHeight: "1.2" }}
              >
                Beyond the ground,
                <br />
                in the palm of your hand.
              </h2>
            </motion.div>
          </Container>
        </div>
      </section>

      {/* Section 2: Problem, Solution, Features */}
      <section className="w-full py-16 md:py-24 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[2.1fr_1fr] gap-20">
            {/* Left Column: Problem + Solution */}
            <div className="space-y-12">
              {/* Problem */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <h3
                  className="text-3xl md:text-4xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-merriweather)" }}
                >
                  Problem
                </h3>
                <p
                  className="text-sm md:text-base leading-relaxed text-foreground/80"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                >
                  Mining operations face a critical disconnect: geological data and mine designs live in office desktop software,
                  while execution happens in remote pits with limited connectivity. Field personnel rely on printed maps, radio
                  communication, and guesswork—leading to overcut, undercut, dilution, and delayed decisions that directly
                  impact profit margins.
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <h3
                  className="text-3xl md:text-4xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-merriweather)" }}
                >
                  Solution
                </h3>
                <p
                  className="text-sm md:text-base leading-relaxed text-foreground/80"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                >
                  PocketMine puts the essentials of desktop mine plan software in every field personnel's pocket. A fully offline mobile app that overlays real-time GPS positioning with resource models, mine designs, and georeferenced maps—enabling instant, informed decisions at the pit face. No expensive hardware. No connectivity required. Just smarter mining.
                </p>
              </motion.div>
            </div>

            {/* Right Column: Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h3
                className="text-3xl md:text-4xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-merriweather)" }}
              >
                Features
              </h3>
              <ul
                className="space-y-3 text-sm md:text-base text-foreground/80 list-disc pl-5 marker:text-foreground"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                <li>
                  <strong className="font-bold">Works in your mobile</strong>
                  <br />
                  <span className="text-foreground/80">as a leading mobile mining software that is supported in mobile devices</span>
                </li>
                <li>
                  <strong className="font-bold">Works 100% offline</strong>
                  <br />
                  <span className="text-foreground/80">doesn't require any network connection, works in your remote area</span>
                </li>
                <li>
                  <strong className="font-bold">Works with custom maps</strong>
                  <br />
                  <span className="text-foreground/80">imports your custom maps by inputting your georeferenced pdf</span>
                </li>
                <li>
                  <strong className="font-bold">Works with mobile GPS</strong>
                  <br />
                  <span className="text-foreground/80">shows your live geolocation in overlay with all the imported data</span>
                </li>
                <li>
                  <strong className="font-bold">Import your Resource Model & Design</strong>
                  <br />
                  <span className="text-foreground/80">shows your live geolocation in overlay with all the imported data</span>
                </li>
                <li>
                  <strong className="font-bold">Section View</strong>
                  <br />
                  <span className="text-foreground/80">visualize all your imported resource model and mine design in section view, while also showing
                  the elevation, coordinate, and block attribute</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
