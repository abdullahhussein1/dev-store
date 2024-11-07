"use client";

import * as React from "react";
import { Laptop, LucideIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeSwitcher() {
  return (
    <div className="flex h-fit w-fit items-center rounded-full border bg-secondary/30 text-foreground/60 group-hover:bg-background dark:bg-secondary/30">
      <ThemeButton Icon={Sun} themeTitle="light" />
      <ThemeButton Icon={Moon} themeTitle="dark" />
      <ThemeButton Icon={Laptop} themeTitle="system" />
    </div>
  );
}

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function ThemeButton({
  Icon,
  themeTitle,
}: {
  Icon: LucideIcon;
  themeTitle: "light" | "dark" | "system";
}) {
  const { theme, setTheme } = useTheme();

  const storedTheme = localStorage.getItem("theme") || "";

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "size-6 rounded-full border border-transparent p-0 transition-transform hover:rotate-6 hover:bg-transparent hover:text-foreground [&_svg]:size-3",
              (theme == themeTitle || storedTheme == themeTitle) &&
                "border-foreground/20 text-foreground",
            )}
            onClick={() => setTheme(themeTitle)}
          >
            <Icon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="capitalize">{themeTitle}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
