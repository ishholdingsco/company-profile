"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background w-full flex flex-col">
      <Header variant="blue" />
      <main className="w-full flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl text-center space-y-8">
          {/* Animated 404 Face SVG */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <svg
              className="face w-full max-w-[200px] md:max-w-[280px] lg:max-w-[320px] h-auto"
              viewBox="0 0 320 380"
              aria-label="A 404 becomes a face, looks to the sides, and blinks."
            >
              <g
                fill="none"
                stroke="#003680"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="25"
              >
                <g className="face__eyes" transform="translate(0, 112.5)">
                  <g transform="translate(15, 0)">
                    <polyline
                      className="face__eye-lid"
                      points="37,0 0,120 75,120"
                    />
                    <polyline
                      className="face__pupil"
                      points="55,120 55,155"
                      strokeDasharray="35 35"
                    />
                  </g>
                  <g transform="translate(230, 0)">
                    <polyline
                      className="face__eye-lid"
                      points="37,0 0,120 75,120"
                    />
                    <polyline
                      className="face__pupil"
                      points="55,120 55,155"
                      strokeDasharray="35 35"
                    />
                  </g>
                </g>
                <rect
                  className="face__nose"
                  rx="4"
                  ry="4"
                  x="132.5"
                  y="112.5"
                  width="55"
                  height="155"
                />
                <g strokeDasharray="102 102" transform="translate(65, 334)">
                  <path
                    className="face__mouth-left"
                    d="M 0 30 C 0 30 40 0 95 0"
                    strokeDashoffset="-102"
                    fill="none"
                  />
                  <path
                    className="face__mouth-right"
                    d="M 95 0 C 150 0 190 30 190 30"
                    strokeDashoffset="102"
                    fill="none"
                  />
                </g>
              </g>
            </svg>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-[#003680]">
              Page Not Found
            </h2>
            <p className="text-sm md:text-base lg:text-lg font-sans text-gray-600 max-w-xl mx-auto px-4">
              Oops! The page you are looking for does not exist or has been moved.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer variant="blue" />
    </div>
  );
}
