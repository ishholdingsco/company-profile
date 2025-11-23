"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-6 md:mt-8 lg:mt-12 pt-6 md:pt-8">
      <div className="page-container pb-8">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info - Full width on mobile, 1 column on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 md:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-4">ISH Technologies</h3>
            <p className="text-base text-muted-foreground mb-3">Perteknologian ISH</p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Consolidated technologies company, offering cutting-edge solutions at scale.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-base hover:font-semibold transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-base hover:font-semibold transition-all">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-base hover:font-semibold transition-all">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-base hover:font-semibold transition-all">
                  About Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Contact</h3>

            {/* Mobile - Icons Only */}
            <div className="flex flex-col gap-4 md:hidden">
              <p className="text-sm text-muted-foreground">Jakarta, Indonesia</p>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/6281222337568"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-all"
                  aria-label="WhatsApp"
                >
                  <Phone className="w-6 h-6" />
                </a>
                <a
                  href="mailto:ish.holdings.co@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="https://id.linkedin.com/company/soft-roc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Desktop - Full Text */}
            <ul className="hidden md:flex md:flex-col space-y-3 text-base">
              <li className="text-muted-foreground">
                Jakarta, Indonesia
              </li>
              <li>
                <a
                  href="https://wa.me/6281222337568"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground hover:font-semibold transition-all"
                >
                  +62 812-2233-7568
                </a>
              </li>
              <li>
                <a
                  href="mailto:ish.holdings.co@gmail.com"
                  className="text-muted-foreground hover:text-foreground hover:font-semibold transition-all"
                >
                  ish.holdings.co@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://id.linkedin.com/company/soft-roc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground hover:font-semibold transition-all"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-6 border-t-2 border-foreground text-center"
        >
          <p className="text-base text-muted-foreground">
            © {currentYear} ISH Technologies. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
