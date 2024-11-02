"use client";

import { useMemo } from "react";
import Image from "next/image";
import BlurFade from "@/components/ui/blur-fade";
import Marquee from "@/components/ui/marquee";

interface StackImage {
  src: string;
  alt: string;
  className: string;
}

function StackImage({ src, alt, className }: StackImage) {
  return (
    <Image src={src} alt={alt} className={className} height={40} width={160} />
  );
}

export function StackMarquee() {
  const stackImages = useMemo(
    () => [
      {
        src: "/stacks/nextjs-dark.svg",
        alt: "Next.js Logo",
        className: "hidden w-24 pe-4 dark:block md:w-28",
      },
      {
        src: "/stacks/supabase-dark.svg",
        alt: "Supabase Logo",
        className: "hidden w-32 pe-4 dark:block md:w-36",
      },
      {
        src: "/stacks/vercel-light.svg",
        alt: "Vercel Logo",
        className: "hidden w-24 pe-4 dark:block md:w-28",
      },
      {
        src: "/stacks/framer-light.svg",
        alt: "Framer Logo",
        className: "hidden w-24 pe-4 dark:block md:w-28",
      },
      {
        src: "/stacks/nextjs-light.svg",
        alt: "Next.js Logo",
        className: "block w-24 pe-4 dark:hidden md:w-28",
      },
      {
        src: "/stacks/supabase-light.svg",
        alt: "Supabase Logo",
        className: "block w-32 pe-4 dark:hidden md:w-36",
      },
      {
        src: "/stacks/vercel-dark.svg",
        alt: "Vercel Logo",
        className: "block w-24 pe-4 dark:hidden md:w-28",
      },
      {
        src: "/stacks/framer-dark.svg",
        alt: "Framer Logo",
        className: "block w-24 pe-4 dark:hidden md:w-28",
      },
    ],
    [],
  );

  return (
    <div className="relative flex flex-col items-center justify-center gap-8 overflow-hidden md:gap-12">
      <div className="flex w-full flex-col gap-2">
        <BlurFade className="z-10 text-3xl font-bold md:text-5xl" inView>
          Stack
        </BlurFade>
        <BlurFade
          delay={0.1}
          className="z-10 font-medium text-foreground/50 md:text-xl"
          inView
        >
          Built with the latest tech stack to deliver a seamless,
          high-performance shopping experience.
        </BlurFade>
      </div>
      <BlurFade delay={0.2} inView>
        <Marquee
          className={`max-w-sm [--duration:20s] md:max-w-2xl lg:max-w-screen-md`}
        >
          {stackImages.map((image, index) => (
            <StackImage key={index} {...image} />
          ))}
          <div className="flex items-center gap-1 pe-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="h-6 w-6 md:size-8"
            >
              <rect width="256" height="256" fill="none"></rect>
              <line
                x1="208"
                y1="128"
                x2="128"
                y2="208"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              ></line>
              <line
                x1="192"
                y1="40"
                x2="40"
                y2="192"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              ></line>
            </svg>
            <p className="font-bold md:text-xl">shadcn/ui</p>
          </div>
        </Marquee>
      </BlurFade>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-secondary dark:from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-secondary dark:from-background" />
    </div>
  );
}
