import React from "react";
import { siteConfig } from "@/config/site";

export default function HeroSection() {
  const { hero } = siteConfig.home;

  return (
    <section className="relative w-full px-6 lg:px-10 pt-8 pb-20">
      <div className="max-w-[1800px] mx-auto flex flex-col justify-between min-h-[80vh]">
        {/* HERO */}
        <div className="grid grid-cols-12 gap-x-4 mt-6">
          <div className="col-span-12">
            <h1
              className="
                font-medium
                leading-[0.82]
                tracking-[-0.05em]
                text-[#2E3129]
                text-[clamp(3rem,9vw,9rem)]
              "
            >
              <span className="block">{hero.titleLine1}</span>

              <span className="flex items-center gap-4 lg:gap-8 mt-2 lg:mt-4">
                <span className="whitespace-nowrap">
                  {hero.titleLine2}
                </span>

                <span className="hidden sm:flex relative overflow-hidden rounded-full w-[8rem] h-[4rem] lg:w-[12rem] lg:h-[6rem] bg-gradient-to-r from-[#D0D5FF] to-[#E2E5FF]">
                  <div className="absolute inset-0 border border-white/40 rounded-full" />

                  <div className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A4B1FF] opacity-50 blur-xl" />
                </span>
              </span>

              <span className="block text-[#1A4DFF] mt-2 lg:mt-4">
                {hero.titleHighlight}
              </span>
            </h1>
          </div>
        </div>

        {/* FOOTER */}
        <div className="grid grid-cols-12 gap-x-4 mt-16 lg:mt-24 items-end">
          {/* LEFT */}
          <div className="col-span-12 md:col-span-3 flex items-center mb-6 md:mb-0">
            <span className="font-bold text-[18px]">
              {hero.footerPrefix}
            </span>

            <span className="ml-2 text-[18px] text-[#111111]">
              {hero.footerText}
            </span>
          </div>

          {/* CENTER CTA */}
          <div className="col-span-12 md:col-span-5 lg:col-start-3 lg:col-span-4 mb-6 md:mb-0">
            <button className="w-full bg-[#1A4DFF] hover:bg-[#0036FF] transition-colors text-white py-6 px-10 rounded-sm font-bold tracking-widest text-[14px] flex items-center justify-center gap-2">
              {hero.cta}

              <span className="inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="12"
                  fill="none"
                  viewBox="0 0 8 11"
                >
                  <circle
                    cx="2.429"
                    cy="2.358"
                    r="1.111"
                    className="fill-current"
                    transform="rotate(45 2.429 2.358)"
                  />

                  <circle
                    cx="5.571"
                    cy="5.5"
                    r="1.111"
                    className="fill-current"
                    transform="rotate(135 5.571 5.5)"
                  />

                  <circle
                    cx="2.429"
                    cy="8.642"
                    r="1.111"
                    className="fill-current"
                    transform="rotate(135 2.429 8.642)"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* RIGHT */}
          <div className="col-span-12 md:col-span-4 lg:col-start-11 lg:col-span-2">
            <span className="text-[#1A4DFF] text-[32px] leading-none mb-4 block">
              *
            </span>

            <p className="text-[13px] leading-[1.5] text-[#111111]">
              {hero.descriptionInfo}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}