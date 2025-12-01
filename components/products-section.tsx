"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

export function ProductsSection() {
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>({});

  return (
    <section id="products" className="py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Our Product</h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Advanced mobile technology solutions for the mining industry
          </p>

          {/* PocketMine Product - Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Image, Logo, Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* App Screenshot - Large with border & shadow */}
              <div className="relative h-[500px] rounded-lg overflow-hidden border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {loadingImages['screenshot-desktop'] !== false && (
                  <Skeleton className="absolute inset-0 rounded-none" />
                )}
                <Image
                  src="/pocketmine/pocketmine.png"
                  alt="PocketMine - Advanced Mining Data Visualization"
                  fill
                  className={`object-contain bg-muted p-4 ${loadingImages['screenshot-desktop'] !== false ? 'opacity-0' : 'opacity-100'}`}
                  priority
                  onLoadingComplete={() => {
                    setLoadingImages(prev => ({ ...prev, 'screenshot-desktop': false }));
                  }}
                />
              </div>

              {/* Logo and Description - Flex Horizontal */}
              <div className="flex items-center gap-1">
                {/* Logo */}
                <div className="relative w-40 h-20 shrink-0">
                  {loadingImages['logo-desktop'] !== false && (
                    <Skeleton className="absolute inset-0" />
                  )}
                  <Image
                    src="/pocketmine/logo+tulisan.png"
                    alt="PocketMine"
                    fill
                    className={`object-contain object-left ${loadingImages['logo-desktop'] !== false ? 'opacity-0' : 'opacity-100'}`}
                    onLoadingComplete={() => {
                      setLoadingImages(prev => ({ ...prev, 'logo-desktop': false }));
                    }}
                  />
                </div>

                {/* Description */}
                <p className="text-base leading-relaxed text-muted-foreground">
                  Advanced mobile application for mining operations, enabling real-time geological data visualization and navigation directly in the field. Built with cutting-edge technology to transform how mining professionals interact with geological data.
                </p>
              </div>
            </motion.div>

            {/* Right: Key Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold">Key Features</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1 font-bold">•</span>
                  <div>
                    <strong className="text-foreground">PDF Map Overlay</strong> - Import and overlay engineering maps and geological reports for enhanced visualization and field reference
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1 font-bold">•</span>
                  <div>
                    <strong className="text-foreground">Pit Design Processing</strong> - CAD drawing integration (DXF format) for pit boundaries, mine planning, and design validation in the field
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1 font-bold">•</span>
                  <div>
                    <strong className="text-foreground">Cross-Section Visualization</strong> - Interactive geological cross-section analysis with real-time rendering and multi-layer support
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1 font-bold">•</span>
                  <div>
                    <strong className="text-foreground">3D Block Model View</strong> - Top-down and interactive visualization of mining block models with customizable color schemes and attribute filtering
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1 font-bold">•</span>
                  <div>
                    <strong className="text-foreground">GPS Navigation</strong> - Real-time location tracking with continuous position updates for precise navigation within mining sites
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1 font-bold">•</span>
                  <div>
                    <strong className="text-foreground">Coordinate System Support</strong> - Multiple UTM zones (46-57) and coordinate transformations (WGS84, local mine coordinates) for global operations
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1 font-bold">•</span>
                  <div>
                    <strong className="text-foreground">Offline Capability</strong> - Full functionality without internet connection, with local data storage and processing for remote mining locations
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Mobile & Tablet Layout - Vertical */}
          <div className="lg:hidden space-y-6">
            {/* App Screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[450px] md:h-[450px] rounded-lg overflow-hidden border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              {loadingImages['screenshot-mobile'] !== false && (
                <Skeleton className="absolute inset-0 rounded-none" />
              )}
              <Image
                src="/pocketmine/pocketmine.png"
                alt="PocketMine - Advanced Mining Data Visualization"
                fill
                className={`object-cover md:object-contain bg-muted md:p-4 ${loadingImages['screenshot-mobile'] !== false ? 'opacity-0' : 'opacity-100'}`}
                priority
                onLoadingComplete={() => {
                  setLoadingImages(prev => ({ ...prev, 'screenshot-mobile': false }));
                }}
              />
            </motion.div>

            {/* Logo and Description - Horizontal on Tablet, Vertical on Mobile */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-1 space-y-4 md:space-y-0">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative w-full max-w-sm mx-auto md:mx-0 md:w-40 h-20 md:shrink-0"
              >
                {loadingImages['logo-mobile'] !== false && (
                  <Skeleton className="absolute inset-0" />
                )}
                <Image
                  src="/pocketmine/logo+tulisan.png"
                  alt="PocketMine"
                  fill
                  className={`object-contain md:object-left ${loadingImages['logo-mobile'] !== false ? 'opacity-0' : 'opacity-100'}`}
                  onLoadingComplete={() => {
                    setLoadingImages(prev => ({ ...prev, 'logo-mobile': false }));
                  }}
                />
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base leading-relaxed text-muted-foreground"
              >
                <span className="md:hidden">
                  Mobile app for real-time geological data visualization and navigation in mining operations.
                </span>
                <span className="hidden md:inline">
                  Advanced mobile application for mining operations, enabling real-time geological data visualization and navigation directly in the field. Built with cutting-edge technology to transform how mining professionals interact with geological data.
                </span>
              </motion.p>
            </div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold">Key Features</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1 font-bold">•</span>
                  <div>
                    <strong className="text-foreground">PDF Map Overlay</strong> - Import and overlay engineering maps
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1 font-bold">•</span>
                  <div>
                    <strong className="text-foreground">Pit Design Processing</strong> - CAD drawing integration (DXF)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1 font-bold">•</span>
                  <div>
                    <strong className="text-foreground">Cross-Section Visualization</strong> - Interactive geological analysis
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1 font-bold">•</span>
                  <div>
                    <strong className="text-foreground">3D Block Model View</strong> - Mining block model visualization
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1 font-bold">•</span>
                  <div>
                    <strong className="text-foreground">GPS Navigation</strong> - Real-time location tracking
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1 font-bold">•</span>
                  <div>
                    <strong className="text-foreground">Coordinate System Support</strong> - Multiple UTM zones
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground mt-1 font-bold">•</span>
                  <div>
                    <strong className="text-foreground">Offline Capability</strong> - Works without internet
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
