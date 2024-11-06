import * as React from "react";

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
  Plus,
  ShieldCheck,
  ShoppingCart,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const featuresItems: Feature[] = [
  {
    title: "All-in-One Marketplace",
    description: "Find everything you need in one convenient location.",
    icon: ShoppingCart,
  },
  {
    title: "Top-Tier Security",
    description:
      "Your data and transactions are protected with state-of-the-art security measures.",
    icon: ShieldCheck,
  },
  {
    title: "Lightning-Fast Performance",
    description: "Experience blazing speeds with our optimized platform.",
    icon: Zap,
  },
  {
    title: "Community-Driven",
    description: "Join a thriving community of users and sellers.",
    icon: Users,
  },
  {
    title: "Global Reach",
    description: "Connect with customers and sellers from around the world.",
    icon: Globe,
  },
  {
    title: "24/7 Availability",
    description:
      "Shop or sell anytime, day or night, with round-the-clock access.",
    icon: Clock,
  },
];

export function FeatureCards() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-8 pb-8 md:gap-12">
      <div className="flex w-full flex-col gap-2">
        <BlurFade className="z-10 text-4xl font-bold md:text-5xl" inView>
          Crafted for Today's Developers
        </BlurFade>
        <BlurFade
          delay={0.1}
          className="z-10 font-medium text-foreground/50 md:text-lg"
          inView
        >
          Designed to Enhance Your Journey, Every Step of the Way.
        </BlurFade>
      </div>
      <div className="relative mr-auto flex w-full max-w-[80vw] items-center md:max-w-2xl lg:max-w-screen-md">
        <Carousel
          opts={{
            align: "center",
          }}
          className="z-10 w-full max-w-[80vw] md:max-w-2xl lg:max-w-screen-md"
        >
          <BlurFade delay={0.2} inView>
            <CarouselContent>
              {featuresItems.map((item) => (
                <CarouselItem
                  key={item.title}
                  className="group cursor-pointer transition-all"
                >
                  <Card className="flex h-[350px] w-[300px] flex-col gap-3 overflow-clip rounded-[35px] border-none bg-secondary p-3 pb-1 group-hover:bg-secondary/60 dark:bg-background dark:group-hover:bg-background/70">
                    <CardContent className="flex flex-1 items-center justify-center rounded-3xl p-2">
                      <item.icon
                        strokeWidth={1.5}
                        className="size-24 fill-background/80 text-foreground/80 transition-all group-hover:text-foreground/90 dark:fill-secondary/80"
                      />
                    </CardContent>
                    <CardFooter className="flex items-center justify-between text-lg font-medium text-foreground/80 group-hover:text-foreground/90">
                      <p>{item.title}</p>
                      <Button
                        size="icon"
                        variant="outline"
                        className="aspect-square rounded-full border-2 bg-background/60 group-hover:bg-background dark:group-hover:bg-secondary"
                      >
                        <Plus />
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </BlurFade>
        </Carousel>
        <div className="absolute -right-2 top-0 z-10 h-full w-6 bg-background/80 blur-md" />
      </div>
      <div className="absolute h-[750px] w-[100vw] bg-gradient-to-b from-transparent via-background via-70% to-transparent dark:via-secondary/25 md:h-[850px]" />
    </div>
  );
}
