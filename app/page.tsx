import HeroSection from "@/components/home/main/hero-section";
import Navbar from "@/components/home/navbar/navbar";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-items-center overflow-x-clip bg-secondary p-4 font-[family-name:var(--font-geist-sans)] dark:bg-background">
      <div className="fixed top-0 z-50 h-16 w-full rounded-b-[40px] bg-background/10 backdrop-blur-sm"></div>
      <div className="absolute -left-12 -top-8 size-1/3 rounded-full bg-background blur-3xl dark:bg-secondary/40"></div>
      <Navbar />
      <main className="mx-auto flex max-w-screen-lg flex-col items-center justify-center gap-20 p-8 pt-10 md:gap-32 md:pt-24">
        <HeroSection />
      </main>
    </div>
  );
}
