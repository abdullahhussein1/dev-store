import * as React from "react";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BlurFade from "@/components/ui/blur-fade";

export function FeatureCards() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-8 md:gap-12">
      <div className="flex w-full flex-col gap-2">
        <BlurFade className="z-10 text-3xl font-bold md:text-5xl" inView>
          Features
        </BlurFade>
        <BlurFade
          delay={0.1}
          className="z-10 font-medium text-foreground/50 md:text-lg"
          inView
        >
          Designed to Enhance Your Journey, Every Step of the Way.
        </BlurFade>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="z-10 w-full max-w-sm md:max-w-2xl lg:max-w-screen-md"
      >
        <BlurFade delay={0.2} inView>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="flex flex-col rounded-[40px] border-none bg-secondary p-10 dark:bg-background">
                  <CardTitle>Feature 1</CardTitle>
                  <CardContent className="flex items-center justify-center">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </BlurFade>
      </Carousel>
      <div className="absolute h-[500px] w-[100vw] bg-gradient-to-b from-transparent via-background via-70% to-transparent dark:via-secondary/20 md:h-[700px]" />
    </div>
  );
}
