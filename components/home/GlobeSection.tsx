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
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-center order-2 lg:order-1">
          
          <div className="flex items-center gap-2 mb-6">
            <div className="text-[#1A4DFF] text-[14px] leading-none">
              ✳
            </div>

            <HyperText className="font-bold text-[20px] text-[#111111] uppercase tracking-wide">
              Venue Location
            </HyperText>
          </div>

          <h2 className="font-normal text-[#1A4DFF] text-[clamp(5rem,12vw,10rem)] leading-[0.9] tracking-[-0.06em] mb-8">
            <Highlighter
              action="underline"
              color="#FF9800"
            >
              Global
            </Highlighter>

            <br />

            Gathering
          </h2>

          <p className="text-[14px] leading-[1.7] text-[#111111]">
            Join thousands of innovators from across the globe. We are
            converging at a premier technical institution to shape the future
            of software and systems architecture.
          </p>
        </div>

        {/* Right Section */}
        <div className="col-span-12 lg:col-span-7 lg:col-start-6 flex flex-col items-center order-1 lg:order-2">

          {/* Globe */}
          <div className="relative w-full max-w-[600px] aspect-square mx-auto">
            <Globe />
          </div>

          {/* Location Badge */}
          <div className="flex items-center justify-center w-full -mt-2 relative z-10">
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-md border border-[#D8D8D8] bg-white/80 backdrop-blur-md shadow-sm">
              
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
                  "Hall 5",
                  "IIT Kanpur",
                  "Kanpur, UP",
                  "208016",
                  "India",
                ]}
              />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}