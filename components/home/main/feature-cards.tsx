import * as React from "react"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import BlurFade from "@/components/ui/blur-fade"

export function FeatureCards() {
  return (
   <div className="flex flex-col gap-8 md:gap-12 relative py-20 justify-center items-center">
    <BlurFade className="z-10 text-3xl font-bold md:text-5xl">
        Features
      </BlurFade>
     <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm z-10 md:max-w-2xl lg:max-w-screen-md"
    >
      <BlurFade delay={0.25}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="flex border-none flex-col p-10 rounded-[40px] bg-secondary dark:bg-background">
                <CardTitle>Feature 1</CardTitle>
                <CardContent className="flex items-center justify-center">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext/>
    </BlurFade>
    </Carousel>
    <div className="bg-gradient-to-b from-transparent top-8 via-background dark:via-secondary/20 to-transparent h-[500px] w-[100vw] absolute"/>
   </div>
  )
}
