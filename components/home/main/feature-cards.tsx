import * as React from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import BlurFade from "@/components/ui/blur-fade";
import { Plus, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";

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
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="group cursor-pointer transition-all dark:hover:brightness-105"
                >
                  <Card className="flex h-[350px] w-[300px] flex-col gap-3 overflow-clip rounded-[35px] border-none bg-secondary p-3 pb-1 dark:bg-background">
                    <CardContent className="flex flex-1 items-center justify-center rounded-3xl bg-background p-2 dark:bg-secondary/20">
                      <Settings2
                        size={88}
                        className="fill-border text-foreground/20 transition-all group-hover:text-foreground/40"
                      />
                    </CardContent>
                    <CardFooter className="flex items-center justify-between text-lg font-medium text-foreground/80">
                      <p>All-in-One Place</p>
                      <Button
                        size="icon"
                        variant="outline"
                        className="aspect-square rounded-full bg-background/80 group-hover:bg-background dark:group-hover:bg-secondary"
                      >
                        <Plus />
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </BlurFade>
        </Carousel>
        <div className="absolute -right-2 top-0 z-10 h-full w-8 bg-background blur-md" />
      </div>
      <div className="absolute h-[650px] w-[100vw] bg-gradient-to-b from-transparent via-background via-70% to-transparent dark:via-secondary/20 md:h-[700px]" />
    </div>
  );
}
