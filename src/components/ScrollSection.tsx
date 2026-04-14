import type { ReactNode } from "react";
import { useScrollFade } from "@/hooks/use-scroll-fade";
import { cn } from "@/lib/utils";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  transparent?: boolean;
}

export function ScrollSection({ children, className, transparent }: ScrollSectionProps) {
  const { ref, isVisible } = useScrollFade(0.1);

  return (
    <div
      ref={ref}
      className={cn(
        "relative z-10 transition-all duration-700 ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0",
        !transparent && "bg-black",
        className
      )}
    >
      {children}
    </div>
  );
}
