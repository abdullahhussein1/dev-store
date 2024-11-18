import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Item } from "@/types/types";
import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";
import ItemRatings from "./item-ratings";
import ItemSpecifications from "./item-specifications";
import Link from "next/link";

export default function ItemCart({ item }: { item: Item }) {
  return (
    <div className="group relative flex h-full select-none items-center justify-center gap-2 rounded-3xl bg-secondary/50 p-2 backdrop-blur-xl">
      <Link
        href={`/dashboard/store/${item.id}`}
        className="flex aspect-square basis-1/3 items-center justify-center overflow-clip rounded-3xl bg-white"
      >
        <Image
          src={item.images[0]}
          width={1000}
          height={1000}
          alt={item.title}
          className="pointer-events-none h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <Button
        size="icon"
        variant="outline"
        className="absolute right-2 top-2 aspect-square size-7 rounded-full bg-secondary/40 text-foreground/30 backdrop-blur-md transition-all"
      >
        <Heart />
      </Button>
      <div className="flex w-full basis-2/3 flex-col gap-1 p-2 text-foreground/90 transition-all group-hover:text-foreground">
        <div className="flex flex-wrap items-center gap-1">
          <Link
            href={`/dashboard/store/${item.id}`}
            className="text-lg font-semibold"
          >
            {item.title}
          </Link>
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
    </div>
  );
}
