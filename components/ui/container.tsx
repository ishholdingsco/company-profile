import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide" | "full";
}

/**
 * Global Container Component
 * Provides consistent max-width and padding across all screen sizes
 *
 * Sizes:
 * - default: max-w-[1400px] (for most content)
 * - narrow: max-w-[1200px] (for focused content like articles)
 * - wide: max-w-[1600px] (for wider layouts)
 * - full: max-w-full (full width with padding)
 *
 * Responsive padding:
 * - Mobile (< 768px): 2rem (32px)
 * - Tablet (768px - 1023px): 3rem (48px)
 * - Desktop (≥ 1024px): 4rem (64px)
 * - Large Desktop (≥ 1280px): 5rem (80px)
 */
export function Container({ children, className, size = "default" }: ContainerProps) {
  const sizeClasses = {
    default: "max-w-[1400px]",
    narrow: "max-w-[1200px]",
    wide: "max-w-[1600px]",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "w-full mx-auto",
        "px-8 sm:px-12 md:px-12 lg:px-16 xl:px-20",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
}
