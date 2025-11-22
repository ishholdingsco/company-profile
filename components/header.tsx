"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md w-full mb-8"
    >
      <div className="w-full px-6 py-8">
        <div className="flex items-center justify-between min-h-[100px]">
          <div>
            <Link href="/" className="block">
              <h1 className="text-4xl font-bold tracking-tight">ISH Technologies</h1>
              <p className="text-base text-muted-foreground mt-1">Perteknologian ISH</p>
            </Link>
          </div>

          <nav className="flex items-center gap-3">
            <Link
              href="/solutions"
              className="px-20 py-7 border-2 border-gray-400 text-xl font-medium shadow-lg hover:shadow-xl hover:border-gray-500 transition-all bg-white"
            >
              Solutions
            </Link>
            <Link
              href="/industries"
              className="px-20 py-7 border-2 border-gray-400 text-xl font-medium shadow-lg hover:shadow-xl hover:border-gray-500 transition-all bg-white"
            >
              Industries
            </Link>
            <Link
              href="/about"
              className="px-20 py-7 border-2 border-gray-400 text-xl font-medium shadow-lg hover:shadow-xl hover:border-gray-500 transition-all bg-white"
            >
              About Us
            </Link>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
