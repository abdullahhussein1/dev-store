import Navbar from "@/components/home/navbar/navbar";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import ShineBorder from "@/components/ui/shine-border";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center overflow-x-clip bg-secondary px-4 py-8 font-[family-name:var(--font-geist-sans)] dark:bg-background">
      <div className="fixed top-0 z-50 h-16 w-full rounded-b-[40px] bg-background/10 backdrop-blur-sm"></div>
      <div className="absolute -left-12 -top-12 -z-10 h-[700px] w-[300px] -rotate-45 rounded-full bg-background blur-3xl dark:bg-secondary/30"></div>
      <Navbar />
      <main className="flex flex-col items-center justify-center gap-20 p-8 pt-10 md:gap-32 md:pt-24">
        <div className="flex w-full flex-col items-start gap-4">
          <BlurFade className="text-5xl font-semibold lg:text-6xl">
            <AnimatedShinyText>Equip Yourself for Code</AnimatedShinyText>
          </BlurFade>
          <BlurFade
            className="flex flex-col gap-6 font-medium text-foreground/60 lg:text-xl"
            delay={0.25}
          >
            Dev Store is crafted to provide a simple, fast, and intuitive
            shopping experience designed with developers in mind.
            <Link href="/dashboard">
              <Button className="w-fit">
                Go To Dashboard <ArrowRight />
              </Button>
            </Link>
          </BlurFade>
        </div>
        <BlurFade className="w-full" delay={0.5}>
          <ShineBorder
            className="relative h-fit w-fit translate-x-1/2 -rotate-[10deg] skew-x-[20deg] scale-150 overflow-clip p-0 text-center text-2xl font-bold capitalize"
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
            <div className="absolute -bottom-10 -left-10 h-full w-full bg-gradient-to-b from-transparent via-secondary via-50% to-secondary dark:via-background dark:to-background"></div>
          </ShineBorder>
        </BlurFade>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
