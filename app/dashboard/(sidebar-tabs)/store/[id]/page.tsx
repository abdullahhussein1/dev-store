import ItemRatings from "@/components/dashboard/item/item-ratings";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { itemsData } from "@/data/data";
import { Item } from "@/types/types";
import { iconMap } from "@/utils/utils";
import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const item: Item = itemsData.find((item) => item.id === id)!;
  return (
    <div className="grid w-full grid-cols-auto-fit-300 rounded-[35px] bg-secondary/50 p-3 backdrop-blur-xl">
      <Carousel className="max-h-min">
        <CarouselContent>
          {item.images.map((image, index) => (
            <CarouselItem key={image} className="max-h-96 min-w-full p-3">
              <div className="flex aspect-square h-full w-full items-center justify-center overflow-clip rounded-[35px] bg-white">
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt={item.title + "image: " + index + 1}
                  className="pointer-events-none h-auto w-11/12 object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex w-full justify-center gap-4">
          <CarouselPrevious className="static" />
          <CarouselNext className="static" />
        </div>
      </Carousel>
      <div className="flex flex-col gap-5 px-4 py-6 text-foreground transition-all">
        <div className="flex flex-wrap items-center gap-3">
          <div className="text-3xl font-bold">{item.title}</div>
          {item.features.map((feature) => (
            <Badge
              key={feature}
              variant="secondary"
              className="bg-foreground/5 text-xs text-foreground/70 hover:bg-secondary dark:bg-secondary dark:hover:bg-secondary/80"
            >
              {feature}
            </Badge>
          ))}
        </div>
        <ItemRatings
          className="text-sm [&_svg]:size-5"
          rating={item.rating}
          numberOfRatings={item.numberOfRatings}
        />
        <div className="flex items-center gap-2">
          <p className="text-2xl font-semibold">{item.price}</p>
          <p className="text-sm text-foreground/50">
            {item.stock} left in Stock
          </p>
        </div>
        <div className="grid flex-1 grid-cols-auto-fit-200 place-content-start gap-4 overflow-clip py-1">
          {item.specifications.map((specification) => {
            const Icon = iconMap[specification.key];
            return (
              <div
                key={specification.key}
                className="flex max-w-fit items-center gap-2 overflow-hidden text-sm font-semibold text-foreground/80"
              >
                <div>
                  <Icon className="size-5 text-foreground" />
                </div>
                <p className="text-foreground">{specification.key}:</p>
                <p className="truncate">{specification.value}</p>
              </div>
            );
          })}
        </div>
        <div className="flex gap-2 pt-2">
          <Button className="w-full rounded-full font-bold">Add to Cart</Button>{" "}
          <Button
            size="icon"
            variant="outline"
            className="aspect-square rounded-full backdrop-blur-md transition-all"
          >
            <Heart />
          </Button>
        </div>
      </div>
    </div>
  );
}
