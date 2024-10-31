import BlurFade from "@/components/ui/blur-fade";
import ShineBorder from "@/components/ui/shine-border";
import ShinyButton from "@/components/ui/shiny-button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col gap-20 md:gap-32">
      <div className="flex w-full flex-col items-start gap-4">
        <BlurFade className="text-5xl font-semibold lg:text-6xl">
          Equip Yourself for Code
        </BlurFade>
        <BlurFade
          className="flex flex-col gap-6 font-medium text-foreground/60 lg:text-xl"
          delay={0.25}
        >
          Dev Store is crafted to provide a simple, fast, and intuitive shopping
          experience designed with developers in mind.
          <Link href="/dashboard">
            <ShinyButton>
              Get Started <ArrowRight />
            </ShinyButton>
          </Link>
        </BlurFade>
      </div>
      <BlurFade className="w-full" delay={0.5}>
        <ShineBorder
          className="relative mx-4 h-fit w-fit translate-x-1/3 -rotate-[10deg] skew-x-[20deg] scale-150 p-0 text-center text-2xl font-bold capitalize xl:translate-x-12 xl:scale-125"
          duration={30}
          color="#999"
        >
          <Image
            src="/dashboard2.png"
            height="900"
            width="1600"
            alt="dashboard"
            className="hidden object-cover dark:block"
          />
          <Image
            src="/dashboard-light.png"
            height="900"
            width="1600"
            alt="dashboard"
            className="object-cover dark:hidden"
          />
          <div className="absolute h-full w-full bg-gradient-to-b from-transparent via-secondary via-80% to-secondary dark:via-background dark:to-background"></div>
          <div className="absolute h-full w-full bg-gradient-to-r from-transparent via-secondary via-80% to-secondary dark:via-background dark:to-background"></div>
        </ShineBorder>
      </BlurFade>
    </section>
  );
}
