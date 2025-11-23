"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-md w-full"
      >
        <div className="page-container py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="block" onClick={closeMenu}>
                <h1 className="text-2xl md:text-4xl font-bold tracking-tight">ISH Technologies</h1>
                <p className="text-sm md:text-base text-muted-foreground mt-1">Perteknologian ISH</p>
              </Link>
            </div>

            {/* Desktop Navigation - Shows at 768px+ (md) */}
            <nav className="hidden md:flex items-center gap-3 md:gap-4">
              <Link
                href="/solutions"
                className="w-32 h-11 lg:w-48 lg:h-14 flex items-center justify-center border-2 border-gray-800 text-lg lg:text-xl font-medium bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] lg:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] lg:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] lg:hover:translate-x-[3px] lg:hover:translate-y-[3px] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px] lg:active:translate-x-[6px] lg:active:translate-y-[6px]"
              >
                Solutions
              </Link>
              <Link
                href="/industries"
                className="w-32 h-11 lg:w-48 lg:h-14 flex items-center justify-center border-2 border-gray-800 text-lg lg:text-xl font-medium bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] lg:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] lg:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] lg:hover:translate-x-[3px] lg:hover:translate-y-[3px] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px] lg:active:translate-x-[6px] lg:active:translate-y-[6px]"
              >
                Industries
              </Link>
              <Link
                href="/about"
                className="w-32 h-11 lg:w-48 lg:h-14 flex items-center justify-center border-2 border-gray-800 text-lg lg:text-xl font-medium bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] lg:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] lg:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] lg:hover:translate-x-[3px] lg:hover:translate-y-[3px] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px] lg:active:translate-x-[6px] lg:active:translate-y-[6px]"
              >
                About Us
              </Link>
            </nav>

            {/* Burger Menu Button - Shows below 768px (mobile only) */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex flex-col gap-1.5 p-2 z-50 transition-all active:scale-95"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-8 h-1 bg-gray-800 rounded-sm block"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-8 h-1 bg-gray-800 rounded-sm block"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-8 h-1 bg-gray-800 rounded-sm block"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={closeMenu}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
                {/* Navigation Buttons */}
                <nav className="flex flex-col gap-4 items-center">
                  <Link
                    href="/solutions"
                    onClick={closeMenu}
                    className="w-44 py-4 border-2 border-gray-800 text-lg font-medium bg-white text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
                  >
                    Solutions
                  </Link>
                  <Link
                    href="/industries"
                    onClick={closeMenu}
                    className="w-44 py-4 border-2 border-gray-800 text-lg font-medium bg-white text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
                  >
                    Industries
                  </Link>
                  <Link
                    href="/about"
                    onClick={closeMenu}
                    className="w-44 py-4 border-2 border-gray-800 text-lg font-medium bg-white text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
                  >
                    About Us
                  </Link>
                </nav>

                {/* Logo */}
                <div className="text-center mt-4">
                  <h2 className="text-xl font-bold">ISH Technologies</h2>
                  <p className="text-sm text-muted-foreground mt-1">Perteknologian ISH</p>
                </div>

                {/* Copyright */}
                <p className="text-sm text-muted-foreground">© 2025 ISH Technologies</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
