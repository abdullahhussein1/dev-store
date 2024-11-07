import React from "react";
import HeroSection from "./hero-section";
import { FeatureCards } from "./feature-cards";
import { StackMarquee } from "./stack-marquee";

export default function Main() {
  return (
    <main className="flex flex-col items-center justify-center gap-44 scroll-smooth p-4 pt-12 md:mx-auto md:max-w-screen-lg md:gap-64 md:p-12">
      <HeroSection />
      <FeatureCards />
      <StackMarquee />
    </main>
  );
}
