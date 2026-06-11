"use client";

import React, { useEffect, useRef } from "react";

export default function CursorOrb() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  // Target mouse position
  const mouse = useRef({ x: typeof window !== "undefined" ? window.innerWidth / 2 : 0, y: typeof window !== "undefined" ? window.innerHeight / 2 : 0 });
  
  // Current positions for LERP
  const ringCurrent = useRef({ x: typeof window !== "undefined" ? window.innerWidth / 2 : 0, y: typeof window !== "undefined" ? window.innerHeight / 2 : 0 });
  const dotCurrent = useRef({ x: typeof window !== "undefined" ? window.innerWidth / 2 : 0, y: typeof window !== "undefined" ? window.innerHeight / 2 : 0 });

  useEffect(() => {
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    const render = () => {
      // Ring follows smoothly with delay
      const ringEase = 0.15;
      ringCurrent.current.x += (mouse.current.x - ringCurrent.current.x) * ringEase;
      ringCurrent.current.y += (mouse.current.y - ringCurrent.current.y) * ringEase;

      // Dot follows almost instantly for precision
      const dotEase = 0.8;
      dotCurrent.current.x += (mouse.current.x - dotCurrent.current.x) * dotEase;
      dotCurrent.current.y += (mouse.current.y - dotCurrent.current.y) * dotEase;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringCurrent.current.x}px, ${ringCurrent.current.y}px, 0) translate(-50%, -50%)`;
      }
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotCurrent.current.x}px, ${dotCurrent.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* The outer transparent ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] w-10 h-10 rounded-full border-[1.5px] border-[#999999]/40 bg-transparent transition-opacity duration-300"
      />
      {/* The inner solid blue dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-2.5 h-2.5 rounded-full bg-[#1A4DFF] transition-opacity duration-300"
      />
    </>
  );
}
