"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ProgressSlider,
  SliderContent,
  SliderWrapper,
  SliderBtnGroup,
  SliderBtn,
  useProgressSliderContext,
} from "@/components/ui/progress-slider";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────

const items = [
  {
    category: "Portfolio",
    title: "Projects & Research",
    desc: "Deep learning research for ISRO, accepted at IEEE IGARSS 2026. Production-scale systems.",
    videoSrc: "/part1.webm",
    fallbackSrc: "/part1.mp4",
    targetUrl: "/projects-research",
    sliderName: "projects",
  },
  {
    category: "Work",
    title: "Experience & Leadership",
    desc: "Senior SWE & Team Lead at IIT Kanpur RAS — managing 37K+ LOC for 20K+ students.",
    videoSrc: "/part1.webm",
    fallbackSrc: "/part1.mp4",
    targetUrl: "/experience",
    sliderName: "experience",
  },
  {
    category: "Services",
    title: "Client Process",
    desc: "A clear, collaborative methodology — from brief to delivery with full transparency.",
    videoSrc: "/part3.webm",
    fallbackSrc: "/part3.mp4",
    targetUrl: "/client-process",
    sliderName: "process",
  },
  {
    category: "Testimonials",
    title: "Client Reviews",
    desc: "Feedback from students and collaborators on teaching quality and project delivery.",
    videoSrc: "/part2.webm",
    fallbackSrc: "/part2.mp4",
    targetUrl: "/client-review",
    sliderName: "reviews",
  },
];

// ─── VideoSlide ───────────────────────────────────────────────────────────────

function VideoSlide({ item }: { item: (typeof items)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {});
    return () => { v.pause(); };
  }, []);

  return (
    <Link href={item.targetUrl} className="block group relative w-full h-full">
      {/* Video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={item.videoSrc} type="video/webm" />
        <source src={item.fallbackSrc} type="video/mp4" />
      </video>

      {/* Gradient — rich at bottom for nav legibility, light elsewhere */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

      {/* Category chip — top left */}
      <div className="absolute top-6 left-6 px-3 py-1.5 rounded-full bg-[#1A4DFF] backdrop-blur-sm">
        <span className="text-[11px] font-bold text-white tracking-wider uppercase">
          {item.category}
        </span>
      </div>

      {/* Arrow — top right, appears on hover */}
      <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-white/20">
        <ArrowUpRight className="w-4 h-4 text-white" />
      </div>
    </Link>
  );
}

// ─── Mobile nav — dots only, floats over the gradient ────────────────────────

function MobileNav() {
  const { active, progress, handleButtonClick } = useProgressSliderContext();

  return (
    <div className="md:hidden absolute bottom-6 left-0 right-0 flex flex-col items-center gap-3">
      {/* Active title */}
      <p className="text-[13px] font-semibold text-white tracking-tight drop-shadow-md">
        {items.find((i) => i.sliderName === active)?.title}
      </p>

      {/* Dot + progress row */}
      <div className="flex items-center gap-2">
        {items.map((item) => (
          <button
            key={item.sliderName}
            onClick={() => handleButtonClick(item.sliderName)}
            aria-label={item.title}
            style={{
              width: active === item.sliderName ? 28 : 8,
              height: 8,
              borderRadius: 99,
              background:
                active === item.sliderName
                  ? `linear-gradient(to right, #1A4DFF ${progress}%, rgba(255,255,255,0.3) ${progress}%)`
                  : "rgba(255,255,255,0.3)",
              transition: "width 0.3s ease, background 0.2s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Desktop nav — 4 minimal text tabs floating over the video ───────────────
// No background bar. Just text + a thin progress line at the very bottom edge.

function DesktopNav() {
  const { active, handleButtonClick } = useProgressSliderContext();

  return (
    <SliderBtnGroup className="hidden md:flex absolute bottom-0 left-0 right-0">
      {items.map((item) => (
        <SliderBtn
          key={item.sliderName}
          value={item.sliderName}
          className="flex-1 text-left cursor-pointer px-6 pt-5 pb-4 transition-all duration-300 border-r border-white/10 last:border-r-0"
          progressBarClass="bg-[#1A4DFF] h-[3px] bottom-0 top-auto"
        >
          {/* Category */}
          <span
            className="block text-[10px] font-bold uppercase tracking-widest mb-1.5 transition-colors duration-300"
            style={{ color: active === item.sliderName ? "#6B9FFF" : "rgba(255,255,255,0.35)" }}
          >
            {item.category}
          </span>
          {/* Title */}
          <span
            className="block text-[14px] font-semibold leading-tight transition-colors duration-300"
            style={{ color: active === item.sliderName ? "#fff" : "rgba(255,255,255,0.35)" }}
          >
            {item.title}
          </span>
        </SliderBtn>
      ))}
    </SliderBtnGroup>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function AppleCardsCarouselDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.set(container, { opacity: 0, scale: 0.98 });
    if (titleRef.current) gsap.set(titleRef.current, { opacity: 0, y: 15 });
    if (title2Ref.current) gsap.set(title2Ref.current, { opacity: 0, y: 15 });
    if (descRef.current) gsap.set(descRef.current, { opacity: 0, y: 10 });
    if (carouselRef.current) gsap.set(carouselRef.current, { opacity: 0, y: 20 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom-=80px",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(container, { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" })
      .to(titleRef.current, { opacity: 1, y: 0, duration: 0.3, ease: "power1.out" }, "-=0.2")
      .to(title2Ref.current, { opacity: 1, y: 0, duration: 0.3, ease: "power1.out" }, "-=0.2")
      .to(descRef.current, { opacity: 1, y: 0, duration: 0.3, ease: "power1.out" }, "-=0.2")
      .to(carouselRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" }, "-=0.25");

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="w-full pt-16 pb-24 md:pt-20 md:pb-32 bg-transparent">
      <div ref={containerRef} className="will-change-transform">

        {/* ── Header ── */}
        <div className="w-[87vw] mx-auto mb-10">
          <div className="mb-6">
            <span
              ref={titleRef}
              className="block font-bold text-[clamp(2.2rem,4vw,3.8rem)] leading-[0.95] tracking-[-0.04em] text-[#111111] font-sans"
            >
              Explore
            </span>
            <span
              ref={title2Ref}
              className="block font-bold text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.95] tracking-[-0.04em] text-[#1A4DFF] mt-1 font-sans"
            >
              The{" "}
              <LineShadowText className="text-[#1A4DFF] italic" shadowColor="#111111">
                Portfolio
              </LineShadowText>
            </span>
          </div>
          <p
            ref={descRef}
            className="mt-3 text-[14px] leading-[1.7] text-[#2E3129] max-w-[500px]"
          >
            Explore sections of my work — from technical projects and research
            to client experience, process, and reviews.
          </p>
        </div>

        {/* ── ProgressSlider ── */}
        <div
          ref={carouselRef}
          className="w-[87vw] mx-auto"
          style={{ height: "84vh", minHeight: "576px", maxHeight: "1032px" }}
        >
          <ProgressSlider
            vertical={false}
            activeSlider="projects"
            duration={6000}
            className="rounded-[20px] overflow-hidden h-full"
          >
            <SliderContent className="relative h-full">
              {items.map((item) => (
                <SliderWrapper key={item.sliderName} value={item.sliderName}>
                  <VideoSlide item={item} />
                </SliderWrapper>
              ))}
            </SliderContent>

            {/* Mobile dots */}
            <MobileNav />

            {/* Desktop minimal tabs */}
            <DesktopNav />
          </ProgressSlider>
        </div>

      </div>
    </div>
  );
}
