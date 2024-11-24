"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BlurFade from "@/components/ui/blur-fade";
import {
  Clock,
  Globe,
  LucideIcon,
  ShieldCheck,
  ShoppingCart,
  Users,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/i18n/context/language-context";

const featuresItems: LucideIcon[] = [
  ShoppingCart,
  ShieldCheck,
  Zap,
  Users,
  Globe,
  Clock,
];

export function FeatureCards() {
  const { lang, dict } = useLanguage();

  return (
    <div
      id="features"
      className="relative flex w-full flex-col items-center justify-center gap-8 pb-8 md:gap-12"
    >
      <div className="flex w-full flex-col gap-2">
        <BlurFade className="z-10 text-4xl font-bold md:text-5xl" inView>
          {dict.features.mainTitle}
        </BlurFade>
        <BlurFade
          delay={0.1}
          className="z-10 font-medium text-foreground/50 md:text-lg"
          inView
        >
          {dict.features.mainDescription}
        </BlurFade>
      </div>
      <div className="relative me-auto flex w-full max-w-[80vw] items-center md:max-w-2xl lg:max-w-screen-md">
        <Carousel
          opts={{
            align: "center",
            direction: lang == "en" ? "ltr" : "rtl",
          }}
          className="z-10 w-full max-w-[80vw] md:max-w-2xl lg:max-w-screen-md"
        >
          <BlurFade delay={0.2} inView>
            <CarouselContent>
              {featuresItems.map((Icon, index) => (
                <CarouselItem
                  key={dict.features.cards[index].title}
                  className="group transition-all"
                >
                  <Card className="flex h-[350px] w-[300px] flex-col gap-3 overflow-clip rounded-[35px] border-none bg-secondary p-3 pb-1 group-hover:bg-secondary/60 dark:bg-background dark:group-hover:bg-background/70">
                    <CardContent className="flex flex-1 items-center justify-center rounded-3xl p-2">
                      <Icon
                        strokeWidth={1.5}
                        className="size-24 fill-background/80 text-foreground/80 transition-all group-hover:text-foreground/90 dark:fill-secondary/80"
                      />
                    </CardContent>
                    <CardFooter className="flex items-center justify-between text-xl font-medium text-foreground/80 group-hover:text-foreground/90">
                      <p>{dict.features.cards[index].title}</p>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </BlurFade>
        </Carousel>
        <div className="absolute -end-2 top-0 z-10 h-full w-6 bg-background/80 blur-md" />
      </div>
      <div className="absolute h-[750px] w-[100vw] bg-gradient-to-b from-transparent via-background via-70% to-transparent dark:via-secondary/25 md:h-[850px]" />
    </div>
  );
}
