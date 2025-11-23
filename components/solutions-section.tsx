"use client";

import { motion } from "framer-motion";
import { solutions } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-12 page-container">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-10">Solutions</h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {solutions.map((solution) => (
              <motion.div
                key={solution.name}
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="p-8 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-all cursor-pointer h-full flex items-center justify-center min-h-[140px]">
                  {solution.featured ? (
                    <span className="font-bold text-xl block text-center">
                      {solution.name}
                    </span>
                  ) : (
                    <span className="text-xl block text-center">
                      {solution.name}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
