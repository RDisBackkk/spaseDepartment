import React from "react";
import { siteConfig } from "@/config/site";

export default function HeroSection() {
  const { hero } = siteConfig.home;

  return (
    <section className="relative w-full px-6 lg:px-10 pt-8 pb-20 border-4 border-black">
      <div className="max-w-[100vw] mx-auto flex flex-col min-h-[80vh]  border-4 border-purple-500">
        
        {/* HERO */}
        <div className="flex flex-1 mt-6 border-4 border-orange-500">
          <div className="w-full p-4 border-4 border-cyan-500">
            <h1
              className="
                font-normal
                leading-[0.82]
                tracking-[-0.05em]
                text-[#2E3129]
                text-[clamp(3rem,9vw,9rem)]
                border-4 border-green-500
                p-4
              "
            >
              <span className="block border-2 border-red-500">
                {hero.titleLine1}
              </span>

              <span className="flex items-center gap-4 lg:gap-8 mt-2 lg:mt-4 border-2 border-blue-500">
                <span className="whitespace-nowrap border-2 border-pink-500">
                  {hero.titleLine2}
                </span>
              </span>

              <span className="block text-[#1A4DFF] mt-2 lg:mt-4 border-2 border-yellow-500">
                {hero.titleHighlight}
              </span>
            </h1>
          </div>
        </div>

        {/* FOOTER */}
        <div className="grid grid-cols-12 items-end gap-y-8 gap-x-6 mt-auto pt-12 border-4 border-red-600">
          
          {/* LEFT */}
          <div className="col-span-12 lg:col-span-2 flex items-center border-4 border-green-600 p-4">
            <div className="font-bold text-[22px] mr-2 border-2 border-black p-2">
              {hero.footerPrefix}
            </div>

            <div className="text-[18px] text-[#111111] border-2 border-black p-2">
              {hero.footerText}
            </div>
          </div>

          {/* CENTER CTA */}
          <div className="col-span-12 lg:col-start-3 lg:col-span-4 border-4 border-blue-600 p-4">
            <button className="w-full bg-[#1A4DFF] hover:bg-[#0036FF] transition-colors text-white py-6 px-10 rounded-sm font-bold uppercase tracking-wide text-[14px] flex items-center justify-center gap-3 border-4 border-white">
              {hero.cta}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="12"
                fill="none"
                viewBox="0 0 8 11"
                className="border border-white"
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
            </button>
          </div>

          {/* EMPTY COLUMNS (5-10) */}
          

          {/* RIGHT */}
          <div className="col-span-12 lg:col-start-11 lg:col-span-2 border-4 border-yellow-500 p-4">
            <div className="text-[#1A4DFF] text-[28px] leading-none mb-4 border-2 border-black inline-block p-2">
              ✳
            </div>

            <p className="text-[14px] leading-[1.8] text-[#111111] border-2 border-black p-2">
              {hero.descriptionInfo}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}