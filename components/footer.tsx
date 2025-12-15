"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";

interface FooterProps {
  variant?: "default" | "blue" | "white";
}

export function Footer({ variant = "default" }: FooterProps) {
  const pathname = usePathname();
  const isBlue = variant === "blue";
  const isWhite = variant === "white";
  const textColor = isBlue ? "text-[#003680]" : isWhite ? "text-white" : "";
  const borderColor = isBlue ? "border-[#003680]" : isWhite ? "border-white" : "border-foreground";

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="py-8">
      <Container>
        {/* Mobile Layout - Centered and Compact */}
        <div className="md:hidden">
          <nav className="flex items-center justify-center gap-1 mb-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm transition-all ${textColor} ${isActive
                      ? `border ${borderColor} rounded-[50px] font-medium`
                      : "hover:font-medium"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex justify-center">
            <a
              href="https://id.linkedin.com/company/soft-roc"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm hover:font-medium transition-all ${textColor}`}
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Desktop/Tablet Layout - Original */}
        <div className="hidden md:flex items-center justify-between">
          {/* Navigation Links */}
          <nav className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-6 py-3 text-sm transition-all ${textColor} ${isActive
                      ? `border ${borderColor} rounded-[50px] font-medium`
                      : "hover:font-medium"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* LinkedIn Link */}
          <a
            href="https://id.linkedin.com/company/soft-roc"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm hover:font-medium transition-all ${textColor}`}
          >
            LinkedIn
          </a>
        </div>
      </Container>
    </footer>
  );
}
