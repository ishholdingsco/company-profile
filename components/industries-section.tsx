"use client";

import { motion } from "framer-motion";
import { sectors } from "@/lib/data";

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

export function IndustriesSection() {
  return (
    <section id="industries" className="py-12 page-container">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-10">Industries</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Industries cards */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {sectors.map((sector) => (
                <motion.div
                  key={sector.id}
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <div className="p-8 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-all cursor-pointer h-full flex items-center justify-center min-h-[140px]">
                    {sector.featured ? (
                      <span className="font-bold text-xl block text-center">
                        {sector.name}
                      </span>
                    ) : (
                      <span className="text-xl block text-center">
                        {sector.name}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Image placeholders */}
            <div className="grid grid-cols-1 gap-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="aspect-video bg-muted border-2 border-foreground rounded-lg relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground text-base">Mining Solutions</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="aspect-video bg-muted border-2 border-foreground rounded-lg relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground text-base">Technology Innovation</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
