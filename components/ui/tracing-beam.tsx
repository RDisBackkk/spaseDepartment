"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);
  const [checkpoints, setCheckpoints] = useState<number[]>([]);

  useEffect(() => {
    if (!contentRef.current) return;

    const updateDimensions = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight);

        // Find all elements with the "timeline-item" class to map their positions
        const items = contentRef.current.querySelectorAll(".timeline-item");
        const positions: number[] = [];
        items.forEach((item: any) => {
          // Offset to align with the role title text in the card
          positions.push(item.offsetTop + 18);
        });
        setCheckpoints(positions);
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(contentRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [children]);

  // Spring values for the tracing beam progress
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.85], [50, svgHeight]),
    {
      stiffness: 400,
      damping: 70,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 150]),
    {
      stiffness: 400,
      damping: 70,
    }
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full w-full max-w-4xl", className)}
    >
      <div className="absolute top-3 -left-4 md:-left-20">
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          {/* Base path */}
          <path
            d={`M 10 0 V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
          />
          {/* Active tracing path */}
          <motion.path
            d={`M 10 0 V ${svgHeight}`}
            fill="none"
            stroke="url(#beam-gradient)"
            strokeWidth="2"
            className="motion-reduce:hidden"
          />
          {/* Dynamic Checkpoints */}
          {checkpoints.map((y, idx) => (
            <CheckpointCircle key={idx} y={y} yProgress={y1} />
          ))}
          <defs>
            <motion.linearGradient
              id="beam-gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#1A4DFF" stopOpacity="0"></stop>
              <stop stopColor="#1A4DFF"></stop>
              <stop offset="0.5" stopColor="#7C3AED"></stop>
              <stop offset="1" stopColor="#10B981" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};

const CheckpointCircle = ({ y, yProgress }: { y: number; yProgress: any }) => {
  // Map progress to colors and size when scroll passes the checkpoint height
  const fill = useTransform(yProgress, [y - 35, y], ["#dee1e4", "#1A4DFF"]);
  const stroke = useTransform(yProgress, [y - 35, y], ["rgba(0, 0, 0, 0.15)", "#1A4DFF"]);
  const r = useTransform(yProgress, [y - 35, y], [4, 6]);
  const glowOpacity = useTransform(yProgress, [y - 35, y], [0, 0.25]);
  const glowRadius = useTransform(yProgress, [y - 35, y], [4, 14]);

  return (
    <g>
      {/* Outer glow ring when active */}
      <motion.circle
        cx="10"
        cy={y}
        r={glowRadius}
        fill="#1A4DFF"
        opacity={glowOpacity}
      />
      {/* Core checkpoint circle */}
      <motion.circle
        cx="10"
        cy={y}
        r={r}
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
      />
    </g>
  );
};
