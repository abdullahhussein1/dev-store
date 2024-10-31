import BlurFade from "@/components/ui/blur-fade";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

export function StackMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-12 bg-gradient-to-b from-background to-transparent py-12 md:shadow-xl">
      <BlurFade className="z-10 text-3xl font-semibold lg:text-5xl" inView>
        Used Cutting Edge Stacks
      </BlurFade>
      <Marquee reverse className="[--duration:20s]">
        <Image
          src="/stacks/nextjs-dark.svg"
          alt="stack image"
          className="w-24 px-2 md:w-44"
          height="80"
          width="100"
        />
        <Image
          src="/stacks/supabase-dark.svg"
          alt="stack image"
          className="w-32 px-2 md:w-44"
          height="80"
          width="100"
        />

        <Image
          src="/stacks/vercel-light.svg"
          alt="stack image"
          className="w-24 px-2 md:w-44"
          height="256"
          width="256"
        />
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
