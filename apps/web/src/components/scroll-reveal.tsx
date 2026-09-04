"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("has-motion-js");
    const element = revealRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.unobserve(entry.target);
      },
      { threshold: 0.12, rootMargin: "0px 0px -6%" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={revealRef}
      className={`scroll-reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
