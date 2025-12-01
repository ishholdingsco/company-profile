import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: "default" | "card" | "text" | "circle" | "image";
  animate?: boolean;
}

/**
 * Skeleton Component
 * Used to display loading states for content
 *
 * Variants:
 * - default: Basic rectangular skeleton
 * - card: Card-shaped skeleton with rounded corners
 * - text: Text line skeleton
 * - circle: Circular skeleton (for avatars)
 * - image: Full image skeleton with aspect ratio
 *
 * Usage:
 * <Skeleton variant="card" className="h-64" />
 * <Skeleton variant="text" className="h-4 w-3/4" />
 */
export function Skeleton({
  className,
  variant = "default",
  animate = true
}: SkeletonProps) {
  const variantClasses = {
    default: "rounded",
    card: "rounded-lg",
    text: "rounded h-4",
    circle: "rounded-full",
    image: "rounded-lg aspect-video",
  };

  return (
    <div
      className={cn(
        "bg-muted",
        animate && "animate-pulse",
        variantClasses[variant],
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

/**
 * Skeleton Card Component
 * Pre-configured skeleton for card layouts
 */
export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-3", className)}>
      <Skeleton variant="image" className="w-full h-48" />
      <div className="space-y-2 p-4">
        <Skeleton variant="text" className="h-4 w-3/4" />
        <Skeleton variant="text" className="h-4 w-1/2" />
      </div>
    </div>
  );
}

/**
 * Skeleton Text Component
 * Pre-configured skeleton for text content
 */
export function SkeletonText({
  lines = 3,
  className
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          className={cn(
            "h-4",
            i === lines - 1 ? "w-2/3" : "w-full"
          )}
        />
      ))}
    </div>
  );
}

/**
 * Skeleton Image Component
 * Pre-configured skeleton for images with optional aspect ratio
 */
export function SkeletonImage({
  className,
  aspectRatio = "video" // "video" (16:9), "square", "portrait", "landscape"
}: {
  className?: string;
  aspectRatio?: "video" | "square" | "portrait" | "landscape";
}) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
  };

  return (
    <Skeleton
      variant="image"
      className={cn(aspectClasses[aspectRatio], className)}
    />
  );
}
