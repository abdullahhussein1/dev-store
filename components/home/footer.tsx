"use client";

import { ChevronUp } from "lucide-react";
import React from "react";
import { GithubButton } from "../github-icon";
import { useLanguage } from "@/hooks/use-language";

export default function Footer() {
  const { dict } = useLanguage();
  return (
    <footer className="mt-6 flex w-full items-center justify-between border-t p-2 text-xs sm:p-4 md:mx-auto md:max-w-screen-lg">
      <div className="flex items-center gap-1">
        <ChevronUp strokeWidth={3} className="size-5 rounded-full border p-1" />
        <p className="font-medium text-foreground/70">
          {dict.footer.copyright}
        </p>
      </div>
      <div className="flex gap-1 text-[11px] font-medium text-foreground/70 sm:text-xs">
        <p>{dict.footer.standsWith}</p>
        <p className="font-semibold text-foreground/90 transition-all hover:text-foreground">
          {dict.footer.countries}
        </p>
      </div>
      <GithubButton className="p-px" />
    </footer>
  );
}
