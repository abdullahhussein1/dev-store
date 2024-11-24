import { ChevronUp } from "lucide-react";
import React from "react";

export default function loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <ChevronUp className="size-14 rounded-full border bg-secondary/20 p-3 animate-in fade-in-60" />
    </div>
  );
}
