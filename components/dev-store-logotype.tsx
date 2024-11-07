import { Terminal } from "lucide-react";
import React from "react";

export default function DevStoreLogoType() {
  return (
    <div className="pointer-events-none flex select-none items-center gap-2">
      <Terminal strokeWidth={3} className="size-6 rounded-full border p-1" />
      <p className="font-semibold">Dev Store</p>
    </div>
  );
}
