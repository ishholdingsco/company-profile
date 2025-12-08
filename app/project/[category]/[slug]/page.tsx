"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProjectHeroCarousel } from "@/components/project-hero-carousel";
import { YantoHeroCarousel } from "@/components/yanto-hero-carousel";
import { projectData } from "../../content/projectData";
import { PocketMineContent } from "../../content/PocketMineContent";
import { YantoContent } from "../../content/YantoContent";

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
        </section>

        {/* Content Section - Load appropriate content component based on project */}
        {project.customLayout === "yanto" && <YantoContent />}
        {project.customLayout === "pocketmine" && <PocketMineContent />}
      </main>

      <Footer />
    </div>
  );
}
