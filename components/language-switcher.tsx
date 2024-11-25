"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Locale } from "@/types/language-types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLanguage } from "@/hooks/use-language";

const languages: { [key in Locale]: string } = {
  en: "English",
  ku: "Kurdish",
};

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, switchLanguage } = useLanguage();

  return (
    <div
      dir="ltr"
      className={cn(
        "flex h-fit w-fit items-center rounded-full border bg-secondary/30 text-foreground/60 group-hover:bg-background",
        className,
      )}
    >
      {Object.entries(languages).map(([locale, name]) => (
        <LanguageButton
          key={locale}
          locale={locale as Locale}
          name={name}
          isActive={lang === locale}
          onClick={() => switchLanguage(locale as Locale)}
        />
      ))}
    </div>
  );
}

function LanguageButton({
  locale,
  name,
  isActive,
  onClick,
}: {
  locale: Locale;
  name: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "aspect-square size-5 rounded-full border border-transparent p-0 text-[9px] transition-all hover:bg-transparent hover:text-foreground",
              isActive && "border-foreground/20 text-foreground",
            )}
            onClick={onClick}
          >
            {locale.toUpperCase()}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
