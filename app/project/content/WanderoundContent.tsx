"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

export function WanderoundContent() {
  return (
    <>
      {/* Wanderound: Section 1 */}
      <section className="w-full pt-0 pb-24 md:pb-32 lg:pb-40 bg-background relative overflow-visible">
        <div className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
          {/* Left: Image - positioned at center-left, moved down slightly */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute left-0 top-1/2 -translate-y-[42%] w-[48%] md:w-[46%] lg:w-[44%] z-10"
          >
            <Image
              src="/project/product/wanderound/wanderound-section.png"
              alt="Wanderound App"
              width={1000}
              height={1200}
              quality={100}
              priority
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
              className="ml-auto w-full md:w-[52%] lg:w-[54%] pt-8 md:pt-12"
            >
              <p
                className="text-lg md:text-xl lg:text-2xl text-black text-right"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                Simple Agentic LLM assistant for planning trip with Overpass API
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
              className="ml-auto w-full md:w-[52%] lg:w-[54%]"
            >
              <h2
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-merriweather)" }}
              >
                Plan like a local,
                <br />
                not like an algorithm.
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
                <div
                  className="text-sm md:text-base leading-relaxed text-foreground/80 space-y-3"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                >
                  <p>
                    Planning a trip to a new city usually means juggling Google Maps tabs, scrolling through listicles, and still ending up with a route
                    that makes no geographic sense. You want to visit 15 places—but they're scattered, the order is inefficient, and you waste half
                    your day in transit instead of actually exploring.
                  </p>
                  <p>
                    Traditional routing tools choke on this. The math behind optimal routing (the Traveling Salesperson Problem) is computationally
                    brutal at city scale. And most AI travel assistants? They just spit out generic "top 10" lists without understanding how places
                    cluster together—how a morning in Blok M can naturally flow into an afternoon in Kemang, because that's how the city actually
                    works.
                  </p>
                </div>
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
                <div
                  className="text-sm md:text-base leading-relaxed text-foreground/80 space-y-3"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                >
                  <p>
                    Wanderound uses agentic AI to generate tour itineraries that respect how cities are actually structured. It pulls real point-of-interest data from OpenStreetMap via Overpass API, clusters locations using density-based algorithms (HDBSCAN) that adapt to varying urban density, then builds routes that make spatial sense.
                  </p>
                  <p>
                    The result: itineraries grouped by neighborhood, not random pins. Routes you can actually walk. Recommendations that feel like they came from someone who knows the city—not a database query.
                  </p>
                </div>
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
                  <strong className="font-bold">Density-aware clustering</strong>
                  <br />
                  <span className="text-foreground/80">Uses HDBSCAN to group POIs based on how cities actually work—adapting to dense downtown areas and sparse outskirts alike</span>
                </li>
                <li>
                  <strong className="font-bold">City-to-province scale</strong>
                  <br />
                  <span className="text-foreground/80">Handles thousands of points of interest across entire metropolitan regions, not just single neighborhoods</span>
                </li>
                <li>
                  <strong className="font-bold">Real geographic data</strong>
                  <br />
                  <span className="text-foreground/80">Pulls live POI data from OpenStreetMap via Overpass API—restaurants, landmarks, attractions, all of it</span>
                </li>
                <li>
                  <strong className="font-bold">Neighborhood-based itineraries</strong>
                  <br />
                  <span className="text-foreground/80">Routes built around clusters you can actually explore on foot, not random pins scattered across the map</span>
                </li>
                <li>
                  <strong className="font-bold">Runs on free-tier AI</strong>
                  <br />
                  <span className="text-foreground/80">Powered by Gemini-2.0-flash-thinking—no expensive API costs, no vendor lock-in</span>
                </li>
                <li>
                  <strong className="font-bold">Open source</strong>
                  <br />
                  <span className="text-foreground/80">Full codebase available on GitHub. Inspect it, fork it, improve it</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
