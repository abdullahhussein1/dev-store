import ItemRatings from "@/components/dashboard/item/item-ratings";
import ItemSpecifications from "@/components/dashboard/item/item-specifications";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { itemsData } from "@/data/data";
import { Item } from "@/types/types";
import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const item: Item = itemsData.find((item) => item.id === id)!;
  return (
    <div className="flex w-full flex-col rounded-3xl bg-secondary/50 p-4">
      <div className="flex basis-1/2 items-center justify-center overflow-clip rounded-3xl border border-secondary/70 bg-white">
        <Image
          src={item.images[0]}
          width={1000}
          height={1000}
          alt={item.title}
          className="pointer-events-none h-auto w-11/12 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <Button
        size="icon"
        variant="outline"
        className="absolute right-2 top-2 aspect-square size-7 rounded-full bg-secondary/40 text-foreground/30 backdrop-blur-md transition-all"
      >
        <Heart />
      </Button>
      <div className="flex basis-1/2 flex-col gap-1 px-4 py-6 text-foreground/90 transition-all group-hover:text-foreground">
        <div className="flex flex-wrap items-center gap-1">
          <div className="text-3xl font-semibold">{item.title}</div>
          {item.features.map((feature) => (
            <Badge
              key={feature}
              variant="secondary"
              className="bg-foreground/5 text-[10px] text-foreground/70 hover:bg-secondary dark:bg-secondary dark:hover:bg-secondary/80"
            >
              {feature}
            </Badge>
          ))}
        </div>
        <ItemRatings
          rating={item.rating}
          numberOfRatings={item.numberOfRatings}
        />
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{item.price}</p>
          <p className="text-xs text-foreground/50">
            {item.stock} left in Stock
          </p>
        </div>
        <ItemSpecifications specifications={item.specifications} />
      </div>
      <Button className="w-full rounded-full font-bold">Add to Cart</Button>
    </div>
  );
}
