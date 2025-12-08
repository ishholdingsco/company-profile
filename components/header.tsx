"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";

interface HeaderProps {
  variant?: "dark" | "light" | "blue";
  pageTitle?: string;
  pageSubtitle?: string;
}

export function Header({ variant = "light", pageTitle, pageSubtitle }: HeaderProps) {
  const isDark = variant === "dark";
  const isBlue = variant === "blue";
  const textColor = isBlue ? "text-[#003680]" : isDark ? "text-white" : "text-gray-900";

  return (
    <header
      className="absolute top-0 left-0 right-0 z-50 w-full"
    >
      <Container className="py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo or Page Title */}
          <div>
            {pageTitle ? (
              <div className="flex flex-col gap-1">
                <h1
                  className={`text-2xl md:text-4xl font-bold ${textColor}`}
                  style={{ fontFamily: "var(--font-merriweather)" }}
                >
                  {pageTitle}
                </h1>
                {pageSubtitle && (
                  <p
                    className={`text-sm md:text-base ${textColor} opacity-80`}
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                  >
                    {pageSubtitle}
                  </p>
                )}
              </div>
            ) : (
              <Link href="/" className="block">
                <Image
                  src={isDark ? "/logo-white.png" : "/logo.png"}
                  alt="ISH Technologies"
                  width={656}
                  height={129}
                  className="h-10 md:h-14 w-auto"
                  style={isBlue ? { filter: "invert(14%) sepia(98%) saturate(3521%) hue-rotate(202deg) brightness(95%) contrast(101%)" } : undefined}
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
    </header>
  );
}
