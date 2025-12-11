"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

export function FMSContent() {
  return (
    <>
      {/* FMS: Section 1: Fleet Management */}
      <section className="w-full pt-0 pb-24 md:pb-32 lg:pb-40 bg-background relative overflow-visible">
        <div className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
          {/* Left: Image - positioned at center-left with margin */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute left-16 md:left-20 lg:left-34 top-1/2 -translate-y-[20%] w-[42%] md:w-[38%] lg:w-[35%] z-10"
          >
            <Image
              src="/project/product/fms/fms-section.png"
              alt="Fleet Management System"
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
              className="ml-auto w-full md:w-[58%] lg:w-[60%] pt-8 md:pt-12"
            >
              <p
                className="text-base md:text-lg lg:text-xl text-black text-right"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                FMS software aimed to make smarter fleet management as accessible as possible. Low cost and zero friction onboarding, a B2B that feels like B2C.
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
              className="ml-auto w-full md:w-[58%] lg:w-[60%]"
            >
              <h2
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight"
                style={{ fontFamily: "var(--font-merriweather)", lineHeight: "1.1" }}
              >
                Made smarter fleet
                <br />
                management, as
                <br />
                accessible as possible.
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
                  Fleet management software has long been built for enterprises—complex implementations, expensive licenses, and months
                  of onboarding. Small to mid-sized operators are left choosing between clunky spreadsheets or overpaying for features they&apos;ll
                  never use. The result: inefficient fleet operations, poor visibility, and margins lost to preventable downtime.
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
                  Our FMS makes smarter fleet management accessible to everyone. Consumer-grade simplicity meets enterprise capability—low
                  cost, zero friction onboarding, and intuitive enough that your team starts managing fleets in minutes, not months. B2B
                  software that finally feels like B2C. No consultants. No training. Just results.
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
                  <strong className="font-bold">Real Time Tracking</strong>
                  <br />
                  <span className="text-foreground/80">Monitor your entire fleet&apos;s location live on an intuitive dashboard—know where every vehicle is, anytime.</span>
                </li>
                <li>
                  <strong className="font-bold">Zero Friction Onboarding</strong>
                  <br />
                  <span className="text-foreground/80">Get started in minutes, not months. No consultants, no complex setup—just sign up and go.</span>
                </li>
                <li>
                  <strong className="font-bold">Driver Management</strong>
                  <br />
                  <span className="text-foreground/80">Assign drivers, track performance, and manage schedules all in one place.</span>
                </li>
                <li>
                  <strong className="font-bold">Maintenance Alerts</strong>
                  <br />
                  <span className="text-foreground/80">Automated reminders for servicing, inspections, and repairs—prevent downtime before it happens.</span>
                </li>
                <li>
                  <strong className="font-bold">Mobile App</strong>
                  <br />
                  <span className="text-foreground/80">Drivers and managers stay connected on the go with full functionality from any device.</span>
                </li>
                <li>
                  <strong className="font-bold">Analytics & Reports</strong>
                  <br />
                  <span className="text-foreground/80">Actionable insights on fleet performance, costs, and utilization—presented simply, not buried in spreadsheets.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
