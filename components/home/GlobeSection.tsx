import React from "react";
import { Globe } from "@/components/ui/globe";
import { MapPin } from "lucide-react";
import { HyperText } from "../ui/hyper-text";
import { Highlighter } from "../ui/highlighter";

import { MorphingText } from "../ui/morphing-text";

export default function GlobeSection() {
  return (
    <section className="relative w-full px-6 lg:px-10 pt-20 pb-32">
      <div className="w-[82vw] mx-auto grid grid-cols-12 gap-y-16 gap-x-6 items-center">
        
        {/* Left Section */}
        <div className="col-span-12 lg:col-span-6 xl:col-span-5 flex flex-col justify-center order-2 lg:order-1 relative z-20">
          
          <div className="flex items-center gap-2 mb-6">
            <div className="text-[#1A4DFF] text-[14px] leading-none">
              ✳
            </div>

            <HyperText className="font-bold text-[20px] text-[#111111] uppercase tracking-wide">
              Current Base
            </HyperText>
          </div>

          <h2 className="font-normal text-[#1A4DFF] text-[clamp(4rem,7vw,10rem)] leading-[0.9] tracking-[-0.06em] mb-8">
            <Highlighter
              action="underline"
              color="#FF9800"
            >
              Engineering
            </Highlighter>

            <br />

            From India
          </h2>

          <p className="text-[14px] leading-[1.7] text-[#111111] max-w-md">
            Currently architecting scalable backend systems and intelligent infrastructure at IIT Kanpur, contributing to global tech innovation through open-source and research.
          </p>
        </div>

        {/* Right Section */}
        <div className="col-span-12 lg:col-span-6 xl:col-span-7 flex flex-col items-center order-1 lg:order-2 relative z-10 lg:translate-x-10 xl:translate-x-20">

          {/* Globe */}
          <div className="relative w-full max-w-[600px] aspect-square mx-auto">
            <Globe />
          </div>

          {/* Location Badge */}
          <div className="flex items-center justify-center w-full mt-4 relative z-10">
            <div className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/60 bg-white/40 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:bg-white/60 transition-colors duration-300">
              
              <MapPin className="w-5 h-5 text-[#1A4DFF] shrink-0" />

              <MorphingText
                compact
                className="
                  min-w-[220px]
                  h-7
                  text-[25px]
                  font-semibold
                  tracking-[0.08em]
                  text-[#222]
                "
                texts={[
                  "IIT Kanpur",
                  "Kanpur, UP",
                  "208016",
                  "India",
                  "Remote",
                ]}
              />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}