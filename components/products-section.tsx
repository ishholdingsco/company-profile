"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "PocketMine",
    description: "Mobile application for navigation and visualization of mining block models",
    image: "/pocketmine.png",
    features: [
      "3D Block Model Visualization",
      "Real-time Navigation",
      "Offline Capability",
      "Mobile Optimized",
      "Subscription-based Access"
    ]
  },
  {
    name: "Lite Fleet",
    description: "Fleet management system for vehicle tracking using smartphones, monitored through web dashboard",
    image: "/fms.png",
    features: [
      "Real-time Vehicle Tracking",
      "Smartphone Integration",
      "Web Dashboard Monitoring",
      "Fleet Analytics",
      "Subscription-based Access"
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ProductsSection() {
  return (
    <section id="products" className="py-12 page-container">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Innovative solutions designed to enhance efficiency and productivity
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-12 items-center"
          >
            {products.map((product) => (
              <motion.div
                key={product.name}
                variants={item}
                whileHover={{ scale: 1.01 }}
                className="group w-full max-w-5xl"
              >
                <div className="border-2 border-foreground rounded-lg overflow-hidden hover:shadow-xl transition-all bg-background w-full">
                  {/* Product Image */}
                  <div className="relative w-full bg-muted overflow-hidden h-[400px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm uppercase tracking-wide">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {product.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-sm text-muted-foreground flex items-start"
                          >
                            <span className="mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
