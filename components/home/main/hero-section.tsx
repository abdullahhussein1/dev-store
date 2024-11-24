"use client";

import BlurFade from "@/components/ui/blur-fade";
import ShineBorder from "@/components/ui/shine-border";
import ShinyButton from "@/components/ui/shiny-button";
import { useLanguage } from "@/hooks/use-language";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const { dict } = useLanguage();
  return (
    <section className="flex flex-col gap-20 md:gap-28">
      <div className="flex w-full flex-col items-start gap-4">
        <BlurFade className="text-5xl font-bold lg:text-6xl">
          {dict.hero.title}
        </BlurFade>
        <BlurFade
          className="flex flex-col gap-6 font-medium text-foreground/60 lg:text-xl"
          delay={0.25}
        >
          {dict.hero.description}
          <Link href="/dashboard">
            <ShinyButton>
              {dict.hero.ctaButton}
              <div className="rtl:rotate-180">
                <ArrowRight />
              </div>
            </ShinyButton>
          </Link>
        </BlurFade>
      </div>
      <BlurFade className="w-full" delay={0.5}>
        <ShineBorder
          className="relative mx-4 h-fit w-fit translate-x-[40%] -rotate-[10deg] skew-x-[20deg] scale-150 select-none p-0 text-center text-2xl font-bold capitalize rtl:-translate-x-[40%] rtl:rotate-[10deg] rtl:skew-x-[-20deg]"
          duration={30}
          color="#999"
        >
          <Image
            src="/images/dashboard-dark.png"
            height="900"
            width="1600"
            alt="dashboard - dark"
            className="hidden rounded-[8px] object-cover dark:block"
          />
          <Image
            src="/images/dashboard-light.png"
            height="900"
            width="1600"
            alt="dashboard - light"
            className="rounded-[8px] object-cover dark:hidden"
          />
          <div className="absolute -bottom-1 -start-1 h-full w-full bg-gradient-to-b from-transparent from-25% via-secondary via-80% to-secondary dark:via-background dark:to-background" />
          <div className="absolute h-full w-full bg-gradient-to-r from-transparent from-25% via-secondary via-80% to-secondary dark:via-background dark:to-background rtl:bg-gradient-to-l" />
        </ShineBorder>
      </BlurFade>
    </section>
  );
}
