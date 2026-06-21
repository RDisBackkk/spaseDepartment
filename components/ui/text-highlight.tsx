"use client";

import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface TextHighlightProps {
  children: ReactNode;
  variant?: "pill" | "underline" | "block";
  color?: "neonPurple" | "voltage" | "cyan" | string;
  className?: string;
}

export function TextHighlight({
  children,
  variant = "pill",
  color = "neonPurple",
  className = "",
}: TextHighlightProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Map known color names to actual hex/rgb values, fallback to the raw string
  const activeColor =
    color === "neonPurple"
      ? "#a855f7" // Tailwind purple-500
      : color === "voltage"
      ? "#2bee4b" // NewForm green
      : color === "cyan"
      ? "#06b6d4" // Tailwind cyan-500
      : color;

  let highlightStyle: React.CSSProperties = { backgroundColor: activeColor };
  let initialAnim: any = { opacity: 0 };
  let hoverAnim: any = { opacity: isHovered ? 1 : 0 };
  let transitionAnim: any = { type: "spring", stiffness: 400, damping: 25 };

  if (variant === "pill") {
    highlightStyle = { ...highlightStyle, top: "-6px", bottom: "-6px", left: "-14px", right: "-14px" };
    initialAnim = { ...initialAnim, scale: 0 };
    hoverAnim = { opacity: isHovered ? 0.9 : 0, scale: isHovered ? 1 : 0 };
  } else if (variant === "block") {
    highlightStyle = { ...highlightStyle, top: "-2px", bottom: "-2px", left: "-4px", right: "-4px" };
    initialAnim = { ...initialAnim, scaleY: 0 };
    hoverAnim = { opacity: isHovered ? 0.9 : 0, scaleY: isHovered ? 1 : 0 };
  } else if (variant === "underline") {
    highlightStyle = { ...highlightStyle, bottom: "-4px", left: "0", right: "0", height: "2px" };
    initialAnim = { ...initialAnim, scaleX: 0 };
    hoverAnim = { opacity: isHovered ? 1 : 0, scaleX: isHovered ? 1 : 0 };
    transitionAnim = { type: "spring", stiffness: 300, damping: 30 };
  }

  return (
    <span
      className={`relative inline-flex items-center justify-center cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        className={`absolute z-0 ${
          variant === "pill" ? "rounded-full" : "rounded-sm"
        }`}
        style={{ ...highlightStyle, transformOrigin: variant === "underline" ? "left center" : "center" }}
        initial={initialAnim}
        animate={hoverAnim}
        transition={transitionAnim}
      />
      <span
        className="relative z-10 transition-colors duration-200"
        style={{ color: isHovered && variant !== "underline" ? "#ffffff" : "inherit" }}
      >
        {children}
      </span>
    </span>
  );
}
