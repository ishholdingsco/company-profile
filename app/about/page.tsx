"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background w-full flex flex-col">
      <Header />
      <main className="w-full flex-1">
        <div className="page-container pb-6 md:pb-8 lg:pb-12">
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-12">
            {/* Hero */}
            <div className="space-y-6">
              <div className="w-full border-t-2 border-foreground" />
              <h1 className="text-5xl font-bold">About Us</h1>
              <div className="w-full border-t-2 border-foreground" />
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Who We Are</h2>
                <p className="text-lg leading-relaxed">
                  ISH Technologies is a <span className="font-bold">consolidated technologies company</span> dedicated to delivering cutting-edge software solutions at scale.
                </p>
                <p className="text-lg leading-relaxed">
                  We specialize in developing innovative applications for the mining industry, leveraging advanced technologies such as computer vision, machine learning, and automation to solve complex challenges.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-lg leading-relaxed">
                  To transform industries through intelligent technology solutions that drive efficiency, safety, and sustainability.
                </p>
                <div className="p-6 border-2 border-foreground rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Core Values</h3>
                  <ul className="space-y-2">
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
                  </ul>
                </div>
              </div>
            </div>

            {/* Expertise */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-all">
                  <h3 className="text-xl font-bold mb-3">Mining Technology</h3>
                  <p className="text-sm">Specialized solutions for the mining industry, from automation to safety systems.</p>
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

            {/* Mining: Our Primary Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Mining: Our Primary Focus</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="p-6 border-2 border-foreground rounded-lg"
                >
                  <h3 className="text-xl font-bold mb-3">Specialized Expertise</h3>
                  <p className="text-base leading-relaxed">
                    We have developed extensive experience in mining technology, creating solutions that address the unique challenges of the mining industry.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="p-6 border-2 border-foreground rounded-lg"
                >
                  <h3 className="text-xl font-bold mb-3">Proven Track Record</h3>
                  <p className="text-base leading-relaxed">
                    Our mining applications have been successfully deployed in various operations, improving safety, efficiency, and environmental compliance.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
