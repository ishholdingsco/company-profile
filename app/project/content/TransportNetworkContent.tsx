"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

export function TransportNetworkContent() {
  return (
    <>
      {/* Transport Network: Research Content */}
      <section className="w-full py-16 md:py-24 bg-background">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2
                className="text-xl md:text-3xl lg:text-5xl font-bold text-foreground leading-tight"
                style={{ fontFamily: "var(--font-merriweather)" }}
              >
                "Have you ever wondered why Jalan Kramat Kwitang becomes so congested during rush hour, even though there are no large buildings with many workers?"
              </h2>
            </motion.div>

            {/* Abstract */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3
                className="text-3xl md:text-4xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-merriweather)" }}
              >
                Abstract
              </h3>
              <div
                className="text-sm md:text-base leading-relaxed text-foreground/80 space-y-4"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                <p>
                  What happens to Jakarta if a major intersection fails? A flood, an earthquake, a single point of collapse—how much does the city break?
                </p>
                <p>
                  This analysis models Jakarta's transportation network as a graph, treating intersections as nodes and roads as edges. Using betweenness centrality, we identify which intersections carry the most weight—where the highest number of shortest paths converge. The answer: the intersection near Wisma Mandiri, through which 8% of all possible routes flow.
                </p>
                <p>
                  We then stress-test the network. Remove the most critical node. Recalculate. Remove the next. Repeat 40 times. The result: Jakarta's road network is not robust. Most eliminations produce statistically significant increases in travel distance—longer detours, more congestion, compounding delays.
                </p>
                <p>
                  Other findings: Jalan Kramat Kwitang's notorious traffic finally explained (8 of the top 10 critical intersections sit on that corridor). Jakarta splits into west and east under stress. And critically—only 7 of the 41 most important intersections are within 500 meters of a fire station.
                </p>
                <p>
                  The data is public. The methodology is reproducible. The implications are for the city to decide.
                </p>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>
    </>
  );
}
