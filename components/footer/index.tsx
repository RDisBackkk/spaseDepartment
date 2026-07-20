"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, ArrowUp } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const { footer } = siteConfig;
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setEmail("");
  };

  return (
    <footer className="relative w-full border-t border-black/8 bg-[#dee1e4] text-[#111111] pt-24 pb-0 overflow-hidden">

      {/* ── Main grid ── */}
      <div className="w-[87vw] mx-auto grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 pb-16">

        {/* 1 — Brand + Newsletter */}
        <div className="relative">
          {/* Subtle glow */}
          <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-[#1A4DFF]/8 blur-3xl pointer-events-none" />

          <div className="mb-5">
            <span className="block font-bold text-[22px] tracking-tight text-[#1A4DFF] leading-none mb-0.5">
              {footer.brand}
            </span>
            <span className="block text-[13px] text-[#2E3129] font-medium">
              {footer.location} · Full-Stack Engineer
            </span>
          </div>

          <p className="text-[13px] leading-[1.75] text-[#555] mb-6 max-w-[240px]">
            Get occasional updates on projects, writing, and open-source work.
          </p>

          <form onSubmit={handleSubscribe} className="relative max-w-[260px]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full rounded-xl border border-black/12 bg-white/60 backdrop-blur-sm px-4 py-3 pr-12 text-[13px] text-[#111] placeholder:text-[#999] focus:outline-none focus:border-[#1A4DFF]/40 focus:ring-2 focus:ring-[#1A4DFF]/10 transition-all duration-200"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-[#1A4DFF] text-white flex items-center justify-center hover:bg-[#0f3acc] transition-colors duration-200 hover:scale-105 active:scale-95"
            >
              {sent ? (
                <span className="text-[10px] font-bold">✓</span>
              ) : (
                <Send className="w-3.5 h-3.5" />
              )}
            </button>
          </form>
        </div>

        {/* 2 — Quick Links */}
        <div>
          <h3 className="mb-5 text-[11px] font-bold uppercase tracking-widest text-[#1A4DFF]">
            Navigate
          </h3>
          <nav className="flex flex-col gap-3">
            {[
              { label: "Home", href: "/" },
              { label: "Experience", href: "/experience" },
              { label: "Projects & Research", href: "/projects-research" },
              { label: "Client Process", href: "/client-process" },
              { label: "Client Reviews", href: "/client-review" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] text-[#444] hover:text-[#1A4DFF] transition-colors duration-200 w-fit group flex items-center gap-1.5"
              >
                <span className="w-1 h-1 rounded-full bg-[#1A4DFF]/0 group-hover:bg-[#1A4DFF] transition-all duration-200 shrink-0" />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* 3 — Contact */}
        <div>
          <h3 className="mb-5 text-[11px] font-bold uppercase tracking-widest text-[#1A4DFF]">
            Contact
          </h3>
          <address className="not-italic flex flex-col gap-3 text-[13px] text-[#444]">
            <span>{footer.location}</span>
            <a
              href="mailto:ujjwalprakash858@gmail.com"
              className="hover:text-[#1A4DFF] transition-colors duration-200 w-fit"
            >
              ujjwalprakash858@gmail.com
            </a>
            <a
              href="https://ujjwalprakash.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1A4DFF] transition-colors duration-200 w-fit"
            >
              ujjwalprakash.netlify.app
            </a>
            <a
              href={siteConfig.navbar.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-1 text-[12px] font-semibold text-[#1A4DFF] hover:opacity-70 transition-opacity w-fit"
            >
              Download Resume ↗
            </a>
          </address>
        </div>

        {/* 4 — Socials + Back to top */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="mb-5 text-[11px] font-bold uppercase tracking-widest text-[#1A4DFF]">
              Find Me
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/ujjwal-prakash-036873336/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group w-fit"
              >
                <span className="w-9 h-9 rounded-full border border-black/10 bg-white/60 flex items-center justify-center group-hover:bg-[#1A4DFF] group-hover:border-transparent transition-all duration-300 shrink-0">
                  <FaLinkedin className="w-4 h-4 text-[#1A4DFF] group-hover:text-white transition-colors duration-300" />
                </span>
                <span className="text-[13px] text-[#444] group-hover:text-[#1A4DFF] transition-colors duration-200">
                  LinkedIn
                </span>
              </a>
              <a
                href="https://github.com/ujjwalPrakash-spike"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group w-fit"
              >
                <span className="w-9 h-9 rounded-full border border-black/10 bg-white/60 flex items-center justify-center group-hover:bg-[#111] group-hover:border-transparent transition-all duration-300 shrink-0">
                  <FaGithub className="w-4 h-4 text-[#111] group-hover:text-white transition-colors duration-300" />
                </span>
                <span className="text-[13px] text-[#444] group-hover:text-[#111] transition-colors duration-200">
                  GitHub
                </span>
              </a>
            </div>
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="mt-8 lg:mt-0 self-start flex items-center gap-2 text-[12px] font-semibold text-[#111] hover:text-[#1A4DFF] transition-colors duration-200 group"
          >
            <span className="w-9 h-9 rounded-full border border-black/10 bg-white/60 flex items-center justify-center group-hover:bg-[#1A4DFF] group-hover:border-transparent transition-all duration-300">
              <ArrowUp className="w-4 h-4 text-[#111] group-hover:text-white transition-colors duration-300" />
            </span>
            Back to top
          </button>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="w-[87vw] mx-auto flex flex-col items-center justify-between gap-4 border-t border-black/8 py-6 text-center md:flex-row">
        <p className="text-[12px] text-[#888]">{footer.copyright}</p>
        <nav className="flex gap-6 text-[12px]">
          <a
            href="/services_guide.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#888] hover:text-[#1A4DFF] transition-colors duration-200"
          >
            Services Guide
          </a>
          <a
            href="mailto:ujjwalprakash858@gmail.com"
            className="text-[#888] hover:text-[#1A4DFF] transition-colors duration-200"
          >
            Get in Touch
          </a>
          <span className="text-[#888]">{footer.creator}</span>
        </nav>
      </div>
    </footer>
  );
}
