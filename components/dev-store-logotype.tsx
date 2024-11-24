import { ChevronUp } from "lucide-react";
import React from "react";

export default function DevStoreLogoType() {
  return (
    <div className="pointer-events-none flex select-none items-center gap-2">
      <ChevronUp strokeWidth={3} className="size-6 rounded-full border p-1" />
      <p className="font-semibold rtl:hidden">Dev Store</p>
      <p className="hidden font-semibold rtl:block">دێڤ ستۆر</p>
    </div>
  );
}
