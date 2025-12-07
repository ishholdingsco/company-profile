"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  size: "large" | "small";
  width: number;
  height: number;
  textColor: string;
}

const projects: Project[] = [
  {
    id: "pocketmine",
    title: "Pocketmine",
    subtitle: "",
    image: "/products/pocketmine.png",
    size: "large",
    width: 741,
    height: 563,
    textColor: "text-white",
  },
  {
    id: "fms",
    title: "FMS",
    subtitle: "Fleet Management System",
    image: "/products/fms.png",
    size: "small",
    width: 518,
    height: 342,
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

          {/* Desktop Layout - Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Card with shadow - no container background */}
                <div
                  className="relative overflow-hidden rounded-2xl shadow-2xl bg-transparent"
                  style={{
                    width: `${project.width}px`,
                    height: `${project.height}px`,
                    maxWidth: '100%',
                  }}
                >
                  {/* Loading skeleton */}
                  {loadingImages[project.id] !== false && (
                    <Skeleton className="absolute inset-0 rounded-2xl" />
                  )}

                  {/* Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover ${
                      loadingImages[project.id] !== false ? 'opacity-0' : 'opacity-100'
                    }`}
                    priority={index === 0}
                    onLoadingComplete={() => {
                      setLoadingImages(prev => ({ ...prev, [project.id]: false }));
                    }}
                  />

                  {/* White shadow-like gradient overlay at bottom - fade effect */}
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />

                  {/* Text overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 z-10">
                    <h3 className={`text-2xl lg:text-3xl ${project.textColor} font-[family-name:var(--font-plus-jakarta-sans)] mb-1`}>
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className={`text-sm lg:text-base ${project.textColor} opacity-80 font-[family-name:var(--font-plus-jakarta-sans)]`}>
                        {project.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Layout - Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-4 min-w-max">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0"
                >
                  {/* Card with shadow - no container background */}
                  <div
                    className="relative overflow-hidden rounded-2xl shadow-2xl bg-transparent"
                    style={{
                      width: `${project.width * 0.4}px`,
                      height: `${project.height * 0.4}px`,
                    }}
                  >
                    {/* Loading skeleton */}
                    {loadingImages[`${project.id}-mobile`] !== false && (
                      <Skeleton className="absolute inset-0 rounded-2xl" />
                    )}

                    {/* Image */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`object-cover ${
                        loadingImages[`${project.id}-mobile`] !== false ? 'opacity-0' : 'opacity-100'
                      }`}
                      priority={index === 0}
                      onLoadingComplete={() => {
                        setLoadingImages(prev => ({ ...prev, [`${project.id}-mobile`]: false }));
                      }}
                    />

                    {/* White shadow-like gradient overlay at bottom - fade effect */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />

                    {/* Text overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                      <h3 className={`text-lg ${project.textColor} font-[family-name:var(--font-plus-jakarta-sans)] mb-1`}>
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className={`text-xs ${project.textColor} opacity-80 font-[family-name:var(--font-plus-jakarta-sans)]`}>
                          {project.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
