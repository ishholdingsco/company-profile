"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Container } from "@/components/ui/container";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background w-full flex flex-col">
      <Header />
      <main className="w-full flex-1">
        {/* Hero with Background */}
        <div className="relative w-full h-[80vh] overflow-hidden mb-12">
          <div className="absolute inset-0">
            <Image
              src="/about-us.jpeg"
              alt="About Us Background"
              fill
              className="object-cover brightness-75 grayscale"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <Container className="relative h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -50, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              className="max-w-4xl"
            >
              <div className="space-y-6">
                <motion.div
                  className="w-full border-t-2 border-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                />
                <motion.h1
                  className="text-5xl font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  About Us
                </motion.h1>
                <motion.p
                  className="text-xl text-white/90 max-w-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  We are a digital technology startup with expertise in developing innovative solutions for a broad range of industries.
                </motion.p>
                <motion.div
                  className="w-full border-t-2 border-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            </motion.div>
          </Container>
        </div>

        <Container className="pb-6 md:pb-8 lg:pb-12">
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-12">

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Who We Are</h2>
                {/* Mobile text - shorter */}
                <p className="text-base md:hidden leading-relaxed">
                  ISH Technologies is a <span className="font-bold">consolidated technologies company</span> delivering cutting-edge software solutions at scale across various industries.
                </p>
                {/* Desktop/Tablet text - full */}
                <div className="hidden md:block space-y-6">
                  <p className="text-lg leading-relaxed">
                    ISH Technologies is a <span className="font-bold">consolidated technologies company</span> dedicated to delivering cutting-edge software solutions at scale.
                  </p>
                  <p className="text-lg leading-relaxed">
                    We specialize in developing innovative applications across a broad range of industries, leveraging advanced technologies such as computer vision, machine learning, IoT, and automation to solve complex challenges.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-lg leading-relaxed">
                  To transform industries through intelligent technology solutions that drive efficiency, safety, and sustainability.
                </p>
                <div className="p-6 border-2 border-foreground rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Core Values</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    <li className="flex items-start gap-3">
                      <span className="font-bold">•</span>
                      <span>Innovation-driven development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold">•</span>
                      <span>Client-focused solutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold">•</span>
                      <span>Sustainable technology</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold">•</span>
                      <span>Collaborative teamwork</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold">•</span>
                      <span>Continuous improvement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold">•</span>
                      <span>Excellence in execution</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Expertise */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-all">
                  <h3 className="text-xl font-bold mb-3">IoT Solutions</h3>
                  <p className="text-sm">Intelligent IoT systems for real-time monitoring, data collection, and automation across various industries.</p>
                </div>
                <div className="p-6 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-all">
                  <h3 className="text-xl font-bold mb-3">AI & Computer Vision</h3>
                  <p className="text-sm">Advanced machine learning and computer vision applications for industrial use.</p>
                </div>
                <div className="p-6 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-all">
                  <h3 className="text-xl font-bold mb-3">Software Development</h3>
                  <p className="text-sm">Full-stack development with modern technologies and best practices.</p>
                </div>
              </div>
            </div>

            {/* Our Teams */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold">Our Teams</h2>

              {/* Top Row: Leadership & SMEs */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-3xl lg:max-w-none mx-auto">
                {/* Leadership - Left Column */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Leadership</h3>
                  <div className="space-y-6">
                    {/* CEO */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                      className="flex items-center gap-6 justify-center lg:justify-start"
                    >
                      <div className="relative w-48 shrink-0">
                        <Image
                          src="/teams/harristio.png"
                          alt="Harristio Adam"
                          width={192}
                          height={192}
                          className="w-full h-auto"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-1">Harristio Adam</h4>
                        <p className="text-base text-muted-foreground">CEO</p>
                      </div>
                    </motion.div>

                    {/* Product Manager */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="flex items-center gap-6 justify-center lg:justify-start"
                    >
                      <div className="relative w-48 shrink-0">
                        <Image
                          src="/teams/fawwaz.png"
                          alt="Fawwaz Anvilen"
                          width={192}
                          height={192}
                          className="w-full h-auto"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-1">Fawwaz Anvilen</h4>
                        <p className="text-base text-muted-foreground">Product Manager</p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* SMEs - Right Column */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold">SMEs</h3>
                    <span className="px-3 py-1 border-2 border-foreground rounded-full text-sm font-semibold">
                      External Relations
                    </span>
                  </div>
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                      className="flex items-center gap-6 justify-center lg:justify-start"
                    >
                      <div className="relative w-48 shrink-0">
                        <Image
                          src="/teams/jonathan.png"
                          alt="Jonathan Adriel"
                          width={192}
                          height={192}
                          className="w-full h-auto"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-1">Jonathan Adriel</h4>
                        <p className="text-base text-muted-foreground">External Relations</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="flex items-center gap-6 justify-center lg:justify-start"
                    >
                      <div className="relative w-48 shrink-0">
                        <Image
                          src="/teams/guntur.png"
                          alt="Guntur Suryadi"
                          width={192}
                          height={192}
                          className="w-full h-auto"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-1">Guntur Suryadi</h4>
                        <p className="text-base text-muted-foreground">Government & Public Policy</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="flex items-center gap-6 justify-center lg:justify-start"
                    >
                      <div className="relative w-48 shrink-0">
                        <Image
                          src="/teams/rayhan.png"
                          alt="Rayhan Arifinsyah"
                          width={192}
                          height={192}
                          className="w-full h-auto"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-1">Rayhan Arifinsyah</h4>
                        <p className="text-base text-muted-foreground">Intelligent Mobility</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Design Team & Technical Team */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-3xl lg:max-w-none mx-auto">
                {/* Design Team - Left Column */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Design Team</h3>
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                      className="flex items-center gap-6 justify-center lg:justify-start"
                    >
                      <div className="relative w-48 shrink-0">
                        <Image
                          src="/teams/elivina.png"
                          alt="Elivina Ragil"
                          width={192}
                          height={192}
                          className="w-full h-auto"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-1">Elivina Ragil</h4>
                        <p className="text-base text-muted-foreground">UI Designer</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="flex items-center gap-6 justify-center lg:justify-start"
                    >
                      <div className="relative w-48 shrink-0">
                        <Image
                          src="/teams/surya.png"
                          alt="Surya Citra Tri Vina"
                          width={192}
                          height={192}
                          className="w-full h-auto"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-1">Surya Citra Tri Vina</h4>
                        <p className="text-base text-muted-foreground">UX Researcher</p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Technical Team - Right Column */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Technical Team</h3>
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                      className="flex items-center gap-6 justify-center lg:justify-start"
                    >
                      <div className="relative w-48 shrink-0">
                        <Image
                          src="/teams/nadhif.png"
                          alt="Nadhif Thaher"
                          width={192}
                          height={192}
                          className="w-full h-auto"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-1">Nadhif Thaher</h4>
                        <p className="text-base text-muted-foreground">Data Engineer</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="flex items-center gap-6 justify-center lg:justify-start"
                    >
                      <div className="relative w-48 shrink-0">
                        <Image
                          src="/teams/nawaf.png"
                          alt="Nawaf Alfarizki"
                          width={192}
                          height={192}
                          className="w-full h-auto"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-1">Nawaf Alfarizki</h4>
                        <p className="text-base text-muted-foreground">DevOps Engineer</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="flex items-center gap-6 justify-center lg:justify-start"
                    >
                      <div className="relative w-48 shrink-0">
                        <Image
                          src="/teams/trian.png"
                          alt="Trian Verson Tumanan"
                          width={192}
                          height={192}
                          className="w-full h-auto"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-1">Trian Verson Tumanan</h4>
                        <p className="text-base text-muted-foreground">Full-Stack Engineer</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
