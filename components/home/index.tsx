import React from "react";
import HeroSection from "./HeroSection";
import DescriptionSection from "./DescriptionSection";
import GlobeSection from "./GlobeSection";
import ReportSection from "./ReportSection";

export default function HomeComponents() {
  return (
    <>
      <HeroSection />
      <DescriptionSection />
      <ReportSection />
      {/* <GlobeSection /> */}
    </>
  );
}
