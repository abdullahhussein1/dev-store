"use client";

import ItemCart from "@/components/dashboard/item/item-cart";
import { Input } from "@/components/ui/input";
import { itemsData } from "@/data/data";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [input, setInput] = useState("");

  return (
    <div className="flex w-full flex-col gap-4">
      <h1 className="text-2xl font-bold">Search</h1>
      <div className="relative mx-auto mb-3 flex w-full max-w-2xl items-center">
        <Input
          autoFocus
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Search"
          className="flex w-full rounded-2xl border bg-secondary/20 ps-9 text-sm backdrop-blur-xl transition-colors hover:bg-secondary/40"
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80">
          <Search className="size-4" />
        </div>
      </div>
      {itemsData
        .filter((item) =>
          item.title.toLowerCase().includes(input.toLowerCase()),
        )
        .map((item) => (
          <ItemCart key={item.title} item={item} />
        ))}
    </div>
  );
}
