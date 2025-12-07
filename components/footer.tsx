"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";

export function Footer() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="py-8">
      <Container>
        <div className="flex items-center justify-between">
          {/* Navigation Links */}
          <nav className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-6 py-3 text-sm transition-all ${
                    isActive
                      ? "border border-foreground rounded-[50px] font-medium"
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
            className="text-sm hover:font-medium transition-all"
          >
            LinkedIn
          </a>
        </div>
      </Container>
    </footer>
  );
}
