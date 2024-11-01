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

interface StackMarqueeProps {
  title?: string;
  duration?: string;
}

function StackImage({ src, alt, className }: StackImage) {
  return (
    <Image src={src} alt={alt} className={className} height={40} width={160} />
  );
}

export function StackMarquee({
  title = "Build With",
  duration = "20s",
}: StackMarqueeProps) {
  const stackImages = useMemo(
    () => [
      {
        src: "/stacks/nextjs-dark.svg",
        alt: "Next.js Logo",
        className: "hidden w-24 px-2 dark:block md:w-28",
      },
      {
        src: "/stacks/supabase-dark.svg",
        alt: "Supabase Logo",
        className: "hidden w-32 px-2 dark:block md:w-36",
      },
      {
        src: "/stacks/vercel-light.svg",
        alt: "Vercel Logo",
        className: "hidden w-24 px-2 dark:block md:w-28",
      },
      {
        src: "/stacks/framer-light.svg",
        alt: "Framer Logo",
        className: "hidden w-24 px-2 dark:block md:w-28",
      },
      {
        src: "/stacks/nextjs-light.svg",
        alt: "Next.js Logo",
        className: "block w-24 px-2 dark:hidden md:w-28",
      },
      {
        src: "/stacks/supabase-light.svg",
        alt: "Supabase Logo",
        className: "block w-32 px-2 dark:hidden md:w-36",
      },
      {
        src: "/stacks/vercel-dark.svg",
        alt: "Vercel Logo",
        className: "block w-24 px-2 dark:hidden md:w-28",
      },
      {
        src: "/stacks/framer-dark.svg",
        alt: "Framer Logo",
        className: "block w-24 px-2 dark:hidden md:w-28",
      },
    ],
    [],
  );

  return (
    <div className="relative flex max-w-sm flex-col items-center justify-center gap-8 overflow-hidden py-12 md:max-w-2xl md:gap-12 lg:max-w-none">
      <BlurFade className="z-10 text-3xl font-bold md:text-5xl">
        {title}
      </BlurFade>
      <Marquee className={`[--duration:20s]`}>
        {stackImages.map((image, index) => (
          <StackImage key={index} {...image} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-secondary dark:from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-secondary dark:from-background" />
    </div>
  );
}
