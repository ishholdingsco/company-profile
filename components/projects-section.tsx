"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  mobileImage?: string;
  category: string;
  slug: string;
  size: "large" | "medium";
  textColor: string;
}

const projects: Project[] = [
  {
    id: "pocketmine",
    title: "PocketMine",
    subtitle: "",
    image: "/project/product/pocketmine/hero-1.png",
    category: "product",
    slug: "pocketmine",
    size: "large",
    textColor: "text-white",
  },
  {
    id: "fms",
    title: "FMS",
    subtitle: "Fleet Management System",
    image: "/project/product/fms/hero-1.png",
    mobileImage: "/project/product/fms/fms-mobile.png",
    category: "product",
    slug: "fms",
    size: "medium",
    textColor: "text-foreground",
  },
  {
    id: "yanto",
    title: "Game: \"His Name is Yanto\"",
    subtitle: "",
    image: "/project/product/yanto/hero-1.png",
    mobileImage: "/project/product/yanto/yanto-mobile.png",
    category: "product",
    slug: "yanto",
    size: "medium",
    textColor: "text-white",
  },
  {
    id: "wanderound",
    title: "WandeRound",
    subtitle: "",
    image: "/project/product/wanderound/hero-1.png",
    category: "product",
    slug: "wanderound",
    size: "medium",
    textColor: "text-white",
  },
  {
    id: "transport-network",
    title: "How Resilient is the Jakarta Transportation Network?",
    subtitle: "",
    image: "/project/research/transport-network/hero-1.png",
    category: "research",
    slug: "transport-network",
    size: "medium",
    textColor: "text-white",
  },
  {
    id: "electric-wheeler",
    title: "Electric 2-Wheelers Adoption Rate Modelling via System Dynamics",
    subtitle: "",
    image: "/project/research/electric-wheeler-modelling/hero-1.png",
    category: "research",
    slug: "electric-wheeler-modelling",
    size: "medium",
    textColor: "text-foreground",
  },
];

export function ProjectsSection() {
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>({});

  return (
    <section id="projects" className="py-16 bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-[family-name:var(--font-merriweather)]">
            Projects
          </h2>

          {/* Desktop & Tablet Layout - Static Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 items-start">
            {/* First Column - PocketMine + Yanto */}
            <div className="flex flex-col gap-4">
              {/* PocketMine */}
              <ProjectCard
                project={projects[0]}
                index={0}
                loadingImages={loadingImages}
                setLoadingImages={setLoadingImages}
                height="350px"
              />
              {/* Yanto */}
              <ProjectCard
                project={projects[2]}
                index={2}
                loadingImages={loadingImages}
                setLoadingImages={setLoadingImages}
                height="230px"
              />
            </div>

            {/* Second Column - FMS + WandeRound */}
            <div className="flex flex-col gap-4">
              {/* FMS */}
              <ProjectCard
                project={projects[1]}
                index={1}
                loadingImages={loadingImages}
                setLoadingImages={setLoadingImages}
                height="180px"
              />
              {/* WandeRound */}
              <ProjectCard
                project={projects[3]}
                index={3}
                loadingImages={loadingImages}
                setLoadingImages={setLoadingImages}
                height="400px"
              />
            </div>

            {/* Third Column - Transport Network + Electric Wheeler */}
            <div className="flex flex-col gap-4">
              {/* Transport Network */}
              <ProjectCard
                project={projects[4]}
                index={4}
                loadingImages={loadingImages}
                setLoadingImages={setLoadingImages}
                height="350px"
              />
              {/* Electric Wheeler */}
              <ProjectCard
                project={projects[5]}
                index={5}
                loadingImages={loadingImages}
                setLoadingImages={setLoadingImages}
                height="230px"
              />
            </div>
          </div>

          {/* Mobile Layout - Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-8 px-8 scrollbar-hide">
            <div className="flex gap-4 min-w-max">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0"
                  style={{ width: "280px" }}
                >
                  <Link href={`/project/${project.category}/${project.slug}`}>
                    <div className="relative group cursor-pointer bg-black" style={{ borderRadius: "20px", overflow: "hidden", height: "360px" }}>
                      {/* Loading skeleton */}
                      {loadingImages[`${project.id}-mobile`] !== false && (
                        <div className="absolute inset-0 z-20">
                          <Skeleton className="w-full h-full" />
                        </div>
                      )}

                      {/* Image */}
                      <Image
                        src={project.mobileImage || project.image}
                        alt={project.title}
                        fill
                        quality={100}
                        sizes="280px"
                        className={`object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105 ${
                          loadingImages[`${project.id}-mobile`] !== false ? "opacity-0" : "opacity-100"
                        }`}
                        style={{ borderRadius: "20px" }}
                        onLoad={() => {
                          setLoadingImages((prev) => ({ ...prev, [`${project.id}-mobile`]: false }));
                        }}
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/50 to-transparent pointer-events-none" />

                      {/* Text overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                        <h3 className="text-lg text-white font-[family-name:var(--font-plus-jakarta-sans)] mb-1">
                          {project.title}
                        </h3>
                        {project.subtitle && (
                          <p className="text-xs text-white opacity-80 font-[family-name:var(--font-plus-jakarta-sans)]">
                            {project.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  loadingImages: Record<string, boolean>;
  setLoadingImages: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  height: string;
}

function ProjectCard({ project, index, loadingImages, setLoadingImages, height }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
      style={{ height }}
    >
      <Link href={`/project/${project.category}/${project.slug}`}>
        <div className="relative w-full h-full group cursor-pointer bg-black lg:bg-transparent" style={{ borderRadius: "20px", overflow: "hidden" }}>
          {/* Loading skeleton */}
          {loadingImages[project.id] !== false && (
            <div className="absolute inset-0 z-20">
              <Skeleton className="w-full h-full" />
            </div>
          )}

          {/* Image for tablet (md-lg) - use mobileImage if available */}
          {project.mobileImage && (
            <Image
              src={project.mobileImage}
              alt={project.title}
              fill
              quality={100}
              sizes="(max-width: 1024px) 400px, 500px"
              className={`lg:hidden object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105 ${
                loadingImages[project.id] !== false ? "opacity-0" : "opacity-100"
              }`}
              style={{ borderRadius: "20px" }}
              priority={index === 0}
              onLoad={() => {
                setLoadingImages((prev) => ({ ...prev, [project.id]: false }));
              }}
            />
          )}

          {/* Image for desktop (lg+) - use regular image */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            quality={100}
            sizes="(max-width: 768px) 280px, (max-width: 1024px) 400px, 500px"
            className={`${project.mobileImage ? 'hidden lg:block' : ''} object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105 ${
              loadingImages[project.id] !== false ? "opacity-0" : "opacity-100"
            }`}
            style={{ borderRadius: "20px" }}
            priority={index === 0}
            onLoad={() => {
              setLoadingImages((prev) => ({ ...prev, [project.id]: false }));
            }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none" />

          {/* Text overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 z-10">
            <h3 className="text-xl lg:text-2xl text-white font-[family-name:var(--font-plus-jakarta-sans)] mb-1">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-sm text-white opacity-80 font-[family-name:var(--font-plus-jakarta-sans)]">
                {project.subtitle}
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
