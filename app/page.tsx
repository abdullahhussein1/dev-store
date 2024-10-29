import Navbar from "@/components/home/navbar/navbar";
import BlurFade from "@/components/ui/blur-fade";
import ShineBorder from "@/components/ui/shine-border";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center p-5 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex w-full flex-col items-center justify-center gap-24 p-8 pt-44">
        <div className="flex flex-col items-start gap-4">
          <BlurFade className="text-5xl font-bold" duration={0.5} inView>
            Equip Yourself for Code
          </BlurFade>
          <BlurFade className="text-foreground/70" delay={0.25} inView>
            Dev Store is crafted to provide a simple, fast, and intuitive
            shopping experience designed with developers in mind.
          </BlurFade>
        </div>
        <BlurFade className="w-full" delay={0.5} inView>
          <ShineBorder
            className="aspect-video w-full text-center text-2xl font-bold capitalize"
            borderRadius={35}
            duration={30}
            color="#333"
          >
            Shine Border
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
