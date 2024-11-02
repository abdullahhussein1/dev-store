import { FeatureCards } from "@/components/home/main/feature-cards";
import HeroSection from "@/components/home/main/hero-section";
import { StackMarquee } from "@/components/home/main/stack-marquee";
import Navbar from "@/components/home/navbar/navbar";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-items-center overflow-x-clip bg-secondary p-4 font-[family-name:var(--font-geist-sans)] dark:bg-background">
      <div className="fixed top-0 z-50 h-16 w-full rounded-b-[40px] bg-background/10 backdrop-blur-sm"></div>
      <div className="absolute -left-12 -top-8 hidden size-1/3 rounded-full bg-background blur-3xl dark:block dark:bg-secondary/40" />
      <Navbar />
      <main className="flex flex-col items-center justify-center gap-44 p-4 pt-12 md:mx-auto md:max-w-screen-lg md:gap-64 md:p-12 md:pt-20">
        <HeroSection />
        <FeatureCards />
        <StackMarquee />
      </main>
    </div>
  );
}
