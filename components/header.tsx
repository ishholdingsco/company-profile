"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";

interface HeaderProps {
  variant?: "dark" | "light";
  pageTitle?: string;
}

export function Header({ variant = "light", pageTitle }: HeaderProps) {
  const isDark = variant === "dark";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const bgColor = isDark ? "bg-transparent" : "bg-white/95 backdrop-blur-md";

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 w-full ${bgColor}`}
    >
      <Container className="py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo or Page Title */}
          <div>
            {pageTitle ? (
              <h1
                className={`text-2xl md:text-4xl font-normal ${textColor}`}
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                {pageTitle}
              </h1>
            ) : (
              <Link href="/" className="block">
                <Image
                  src={isDark ? "/logo-white.png" : "/logo.png"}
                  alt="ISH Technologies"
                  width={656}
                  height={129}
                  className="h-10 md:h-14 w-auto"
                  priority
                />
              </Link>
            )}
          </div>

          {/* Right Side - Solutions Button */}
          <Link
            href="/solutions"
            className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium ${textColor} hover:opacity-70 transition-opacity`}
            style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
          >
            solutions
          </Link>
        </div>
      </Container>
    </motion.header>
  );
}
