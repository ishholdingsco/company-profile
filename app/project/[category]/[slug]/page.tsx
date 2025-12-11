"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProjectHeroCarousel } from "@/components/project-hero-carousel";
import { YantoHeroCarousel } from "@/components/yanto-hero-carousel";
import { projectData } from "../../content/projectData";
import { PocketMineContent } from "../../content/PocketMineContent";
import { YantoContent } from "../../content/YantoContent";
import { FMSContent } from "../../content/FMSContent";
import { WanderoundContent } from "../../content/WanderoundContent";
import { ElectricWheelerContent } from "../../content/ElectricWheelerContent";
import { TransportNetworkContent } from "../../content/TransportNetworkContent";

interface ProjectPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { category, slug } = use(params);

  // Get project data
  const categoryData = projectData[category];
  if (!categoryData) {
    notFound();
  }

  const project = categoryData[slug];
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background w-full">
      <Header
        variant="dark"
        pageTitle="Project"
        pageSubtitle={project.subtitle}
      />

      <main className="w-full">
        {/* Hero Carousel Section */}
        <section className="relative w-full h-screen">
          {project.customLayout === "yanto" ? (
            <YantoHeroCarousel images={project.heroImages} interval={5000} />
          ) : (
            <ProjectHeroCarousel images={project.heroImages} interval={5000} />
          )}

          {/* Dark Overlay and Text for PocketMine */}
          {project.customLayout === "pocketmine" && (
            <>
              {/* Dark overlay to improve text visibility */}
              <motion.div
                className="absolute inset-0 z-10 bg-black/30 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* Hero text */}
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <motion.h1
                  className="text-white font-bold text-center px-8 text-5xl md:text-7xl lg:text-8xl"
                  style={{
                    fontFamily: "var(--font-merriweather)",
                    lineHeight: "1.1",
                    textShadow: "0 4px 20px rgba(0, 0, 0, 0.5)"
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  PocketMine
                </motion.h1>
              </div>
            </>
          )}

          {/* Dark Overlay and Text for Yanto */}
          {project.customLayout === "yanto" && (
            <>
              {/* Dark overlay to improve text visibility */}
              <motion.div
                className="absolute inset-0 z-10 bg-black/30 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* Hero text */}
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <motion.h1
                  className="text-white font-bold text-center px-8 text-5xl md:text-7xl lg:text-8xl"
                  style={{
                    fontFamily: "var(--font-merriweather)",
                    lineHeight: "1.1",
                    textShadow: "0 4px 20px rgba(0, 0, 0, 0.5)"
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  His name is Yanto
                </motion.h1>
              </div>
            </>
          )}

          {/* Dark Overlay and Text for FMS */}
          {project.customLayout === "fms" && (
            <>
              {/* Dark overlay to improve text visibility */}
              <motion.div
                className="absolute inset-0 z-10 bg-black/30 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* Hero text */}
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <motion.h1
                  className="text-white font-bold text-center px-8 text-4xl md:text-6xl lg:text-7xl"
                  style={{
                    fontFamily: "var(--font-merriweather)",
                    lineHeight: "1.1",
                    textShadow: "0 4px 20px rgba(0, 0, 0, 0.5)"
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  Fleet Management System
                </motion.h1>
              </div>
            </>
          )}

          {/* Dark Overlay and Text for Wanderound */}
          {project.customLayout === "wanderound" && (
            <>
              {/* Dark overlay to improve text visibility */}
              <motion.div
                className="absolute inset-0 z-10 bg-black/30 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* Hero text */}
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <motion.h1
                  className="text-white font-bold text-center px-8 text-5xl md:text-7xl lg:text-8xl"
                  style={{
                    fontFamily: "var(--font-merriweather)",
                    lineHeight: "1.1",
                    textShadow: "0 4px 20px rgba(0, 0, 0, 0.5)"
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  Wanderound
                </motion.h1>
              </div>
            </>
          )}

          {/* Dark Overlay and Text for Electric Wheeler Modelling */}
          {project.customLayout === "electric-wheeler-modelling" && (
            <>
              {/* Dark overlay to improve text visibility */}
              <motion.div
                className="absolute inset-0 z-10 bg-black/30 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* Hero text */}
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none px-8">
                <motion.h1
                  className="text-white font-bold text-center max-w-6xl text-3xl md:text-5xl lg:text-7xl"
                  style={{
                    fontFamily: "var(--font-merriweather)",
                    lineHeight: "1.15",
                    textShadow: "0 4px 20px rgba(0, 0, 0, 0.5)"
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  Electric 2-Wheelers Adoption Rate Modelling via System Dynamics
                </motion.h1>
              </div>
            </>
          )}

          {/* Dark Overlay and Text for Transport Network */}
          {project.customLayout === "transport-network" && (
            <>
              {/* Dark overlay to improve text visibility */}
              <motion.div
                className="absolute inset-0 z-10 bg-black/30 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* Hero text */}
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none px-8">
                <motion.h1
                  className="text-white font-bold text-center max-w-6xl text-3xl md:text-5xl lg:text-7xl"
                  style={{
                    fontFamily: "var(--font-merriweather)",
                    lineHeight: "1.15",
                    textShadow: "0 4px 20px rgba(0, 0, 0, 0.5)"
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  How Resilient is the Jakarta Transportation Network?
                </motion.h1>
              </div>
            </>
          )}
        </section>

        {/* Content Section - Load appropriate content component based on project */}
        {project.customLayout === "yanto" && <YantoContent />}
        {project.customLayout === "pocketmine" && <PocketMineContent />}
        {project.customLayout === "fms" && <FMSContent />}
        {project.customLayout === "wanderound" && <WanderoundContent />}
        {project.customLayout === "electric-wheeler-modelling" && <ElectricWheelerContent />}
        {project.customLayout === "transport-network" && <TransportNetworkContent />}
      </main>

      <Footer />
    </div>
  );
}
