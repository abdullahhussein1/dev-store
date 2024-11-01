import BlurFade from "@/components/ui/blur-fade";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

export function StackMarquee() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-8 to-background py-12 md:gap-12">
      <BlurFade className="z-10 text-3xl font-semibold md:text-5xl">
        Build With
      </BlurFade>
      <Marquee className="[--duration:20s]">
        <Image
          src="/stacks/nextjs-dark.svg"
          alt="stack image"
          className="hidden w-24 px-2 dark:block md:w-28"
          height="10"
          width="10"
        />
        <Image
          src="/stacks/supabase-dark.svg"
          alt="stack image"
          className="hidden w-32 px-2 dark:block md:w-36"
          height="10"
          width="10"
        />
        <Image
          src="/stacks/vercel-light.svg"
          alt="stack image"
          className="hidden w-24 px-2 dark:block md:w-28"
          height="10"
          width="10"
        />
        <Image
          src="/stacks/nextjs-light.svg"
          alt="stack image"
          className="w-24 px-2 dark:hidden md:w-28"
          height="10"
          width="10"
        />
        <Image
          src="/stacks/supabase-light.svg"
          alt="stack image"
          className="w-32 px-2 dark:hidden md:w-36"
          height="10"
          width="10"
        />
        <Image
          src="/stacks/vercel-dark.svg"
          alt="stack image"
          className="w-24 px-2 dark:hidden md:w-28"
          height="10"
          width="10"
        />
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-secondary dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-secondary dark:from-background"></div>
    </div>
  );
}
